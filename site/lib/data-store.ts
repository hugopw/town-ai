"use client";

// Pluggable submission store.
//
// Demo build: localStorage adapter (zero infra). All data persists in
// the visitor's browser. Good enough for the council walk-through.
//
// Production swap: drop in a Supabase / KV adapter behind the same
// SubmissionStore interface and wire up an API route. Schema and
// guidance live in /SUPABASE.md.

import type {
  Problem,
  Signup,
  SubmissionStore,
} from "./submissions";

const SIGNUPS_KEY = "harpenden-ai:signups:v1";
const PROBLEMS_KEY = "harpenden-ai:problems:v1";

function uid(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  return safeParse<T[]>(window.localStorage.getItem(key), []);
}

function write<T>(key: string, value: T[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(`harpenden-ai:store-changed:${key}`));
}

export const localStore: SubmissionStore = {
  async listSignups() {
    return read<Signup>(SIGNUPS_KEY);
  },
  async addSignup(input) {
    const all = read<Signup>(SIGNUPS_KEY);
    const next: Signup = {
      ...input,
      id: input.id ?? uid("sig"),
      createdAt: input.createdAt ?? new Date().toISOString(),
    } as Signup;
    write<Signup>(SIGNUPS_KEY, [next, ...all]);
    return next;
  },
  async listProblems({ onlyPublic } = {}) {
    const all = read<Problem>(PROBLEMS_KEY);
    return onlyPublic ? all.filter((p) => p.isPublic) : all;
  },
  async getProblem(id) {
    const all = read<Problem>(PROBLEMS_KEY);
    return all.find((p) => p.id === id) ?? null;
  },
  async addProblem(input) {
    const all = read<Problem>(PROBLEMS_KEY);
    const next: Problem = {
      ...input,
      id: input.id ?? uid("prb"),
      createdAt: input.createdAt ?? new Date().toISOString(),
      status: input.status ?? "open",
      joinedBy: [],
    };
    write<Problem>(PROBLEMS_KEY, [next, ...all]);
    return next;
  },
  async joinProblem(problemId, email) {
    const all = read<Problem>(PROBLEMS_KEY);
    const idx = all.findIndex((p) => p.id === problemId);
    if (idx === -1) return null;
    const existing = all[idx];
    if (existing.joinedBy.includes(email)) return existing;
    const updated: Problem = {
      ...existing,
      joinedBy: [...existing.joinedBy, email],
    };
    const nextAll = [...all];
    nextAll[idx] = updated;
    write<Problem>(PROBLEMS_KEY, nextAll);
    return updated;
  },
};

// Seed a set of demo problems on first load so /community-projects
// is never empty when the council walks through it. Seeds come from
// the active place config so each tenant gets locally-relevant
// examples. The seed flag is per-place so a returning visitor who
// switches tenant sees that tenant's seed data.
import { getPlace } from "./place";

export function ensureSeedData() {
  if (typeof window === "undefined") return;
  const place = getPlace();
  const seedFlag = `town-ai:${place.slug}:seeded:v1`;
  if (window.localStorage.getItem(seedFlag)) return;

  const seeds: Problem[] = place.seedProblems.map((p, idx) => ({
    id: `prb_seed_${place.slug}_${idx}`,
    createdAt: new Date(
      Date.now() - 1000 * 60 * 60 * 24 * (place.seedProblems.length - idx),
    ).toISOString(),
    organisation: p.organisation,
    contactName: p.contactName,
    contactEmail: p.contactEmail,
    shortTitle: p.shortTitle,
    description: p.description,
    whoFeelsIt: p.whoFeelsIt,
    alreadyTried: p.alreadyTried,
    successIn90Days: p.successIn90Days,
    isPublic: true,
    status: "open",
    tags: p.tags,
    joinedBy: [],
  }));

  const existing = read<Problem>(PROBLEMS_KEY);
  if (existing.length === 0) write<Problem>(PROBLEMS_KEY, seeds);
  window.localStorage.setItem(seedFlag, "1");
}
