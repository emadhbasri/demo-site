# Graph Report - demo-site  (2026-11-08)

## Corpus Check
- 16 files · ~2,405 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 5, .example 1, .woff2 1)

## Summary
- 71 nodes · 66 edges · 11 communities (7 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b4471373`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ایده: منوی دیجیتال کافه
- SPEC: منوی دیجیتال کافه، نسخه‌ی ۱
- CLAUDE.md
- CLAUDE.md
- demo-site
- api/package.json
- web/package.json
- layout.js
- page.js

## God Nodes (most connected - your core abstractions)
1. `ایده: منوی دیجیتال کافه` - 8 edges
2. `SPEC: منوی دیجیتال کافه، نسخه‌ی ۱` - 7 edges
3. `scripts` - 3 edges
4. `next` - 3 edges
5. `scripts` - 2 edges
6. `express` - 2 edges
7. `cafe` - 2 edges
8. `demo-site` - 2 edges
9. `Run locally` - 2 edges
10. `express` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 4 thin omitted)

### Community 0 - "ایده: منوی دیجیتال کافه"
Cohesion: 0.25
Nodes (8): Customer, Not now, Open questions, Problem, Risks, Three features, Version 1, ایده: منوی دیجیتال کافه

### Community 1 - "SPEC: منوی دیجیتال کافه، نسخه‌ی ۱"
Cohesion: 0.29
Nodes (7): Acceptance criteria, Data we store, Goal, Not in v1, Open questions, Pages, SPEC: منوی دیجیتال کافه، نسخه‌ی ۱

### Community 2 - "CLAUDE.md"
Cohesion: 0.33
Nodes (5): Planned architecture, Product, Project state, Scope constraints, Workflow

### Community 4 - "demo-site"
Cohesion: 0.50
Nodes (3): demo-site, Run locally, Stopping: `down` vs `down -v`

### Community 5 - "api/package.json"
Cohesion: 0.15
Nodes (11): app, express, dependencies, express, main, name, private, scripts (+3 more)

### Community 6 - "web/package.json"
Cohesion: 0.15
Nodes (12): react, react-dom, dependencies, next, react, react-dom, name, private (+4 more)

### Community 7 - "layout.js"
Cohesion: 0.29
Nodes (4): next, metadata, vazir, viewport

## Knowledge Gaps
- **41 isolated node(s):** `express`, `app`, `name`, `private`, `version` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 49 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `layout.js` to `page.js`, `web/package.json`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **What connects `express`, `app`, `name` to the rest of the system?**
  _41 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `ایده: منوی دیجیتال کافه` connect `ایده: منوی دیجیتال کافه` to `CLAUDE.md`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `SPEC: منوی دیجیتال کافه، نسخه‌ی ۱` connect `SPEC: منوی دیجیتال کافه، نسخه‌ی ۱` to `CLAUDE.md`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._