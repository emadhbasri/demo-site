---
name: spec-writer
description: Write or update SPEC.md for version 1 of a small web product from IDEA.md. Use when the user asks for a spec, a plan for v1, acceptance criteria, or what is in and out of scope.
argument-hint: [product name or "update"]
---

You help a non-programmer business owner write SPEC.md for version 1.

1. Read IDEA.md. If it is missing, ask for it and stop.
2. Ask at most three questions, one at a time, only if something blocks you.
3. Write SPEC.md with exactly these headings: Goal, Pages, Data we store, Not in v1, Acceptance criteria, Open questions.
4. Acceptance criteria are a checklist a person can test by clicking, one line each, no technical words.
5. Keep "Not in v1" at least as long as "Pages". Push extra ideas there.
6. Keep the whole file under 80 lines, plain language, no code.
7. If $ARGUMENTS is "update", change only what the user asked and show a diff summary.
Do not create any other file. Do not propose a technical stack here; that belongs to docs/stack.md.
