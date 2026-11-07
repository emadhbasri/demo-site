# Graph Report - demo-site  (2026-11-07)

## Corpus Check
- 5 files · ~1,500 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 28 nodes · 26 edges · 5 communities (3 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dc6f5750`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ایده: منوی دیجیتال کافه
- SPEC: منوی دیجیتال کافه، نسخه‌ی ۱
- CLAUDE.md
- CLAUDE.md
- README.md

## God Nodes (most connected - your core abstractions)
1. `ایده: منوی دیجیتال کافه` - 8 edges
2. `SPEC: منوی دیجیتال کافه، نسخه‌ی ۱` - 7 edges
3. `Project state` - 1 edges
4. `Product` - 1 edges
5. `Planned architecture` - 1 edges
6. `Scope constraints` - 1 edges
7. `Workflow` - 1 edges
8. `Problem` - 1 edges
9. `Customer` - 1 edges
10. `Three features` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (5 total, 2 thin omitted)

### Community 0 - "ایده: منوی دیجیتال کافه"
Cohesion: 0.25
Nodes (8): Customer, Not now, Open questions, Problem, Risks, Three features, Version 1, ایده: منوی دیجیتال کافه

### Community 1 - "SPEC: منوی دیجیتال کافه، نسخه‌ی ۱"
Cohesion: 0.29
Nodes (7): Acceptance criteria, Data we store, Goal, Not in v1, Open questions, Pages, SPEC: منوی دیجیتال کافه، نسخه‌ی ۱

### Community 2 - "CLAUDE.md"
Cohesion: 0.33
Nodes (5): Planned architecture, Product, Project state, Scope constraints, Workflow

## Knowledge Gaps
- **20 isolated node(s):** `Project state`, `Product`, `Planned architecture`, `Scope constraints`, `Workflow` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 21 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ایده: منوی دیجیتال کافه` connect `ایده: منوی دیجیتال کافه` to `CLAUDE.md`?**
  _High betweenness centrality (0.419) - this node is a cross-community bridge._
- **What connects `Project state`, `Product`, `Planned architecture` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `SPEC: منوی دیجیتال کافه، نسخه‌ی ۱` connect `SPEC: منوی دیجیتال کافه، نسخه‌ی ۱` to `CLAUDE.md`?**
  _High betweenness centrality (0.368) - this node is a cross-community bridge._