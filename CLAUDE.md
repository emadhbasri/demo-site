# CLAUDE.md

## Project state

Planning stage only: no application code, build tooling, tests, or build/lint/test commands yet (add them here once scaffolded). The repo holds product docs written in **Persian (Farsi)**:

- [IDEA.md](IDEA.md): problem, customer, features, risks, open questions.
- [SPEC.md](SPEC.md): v1 goal, pages, stored data, out-of-scope list, acceptance criteria. Source of truth for what to build.
- [docs/stack.md](docs/stack.md): proposed stack and rationale.

## Product

A digital cafe menu ("منوی دیجیتال کافه") for **one cafe** in v1. Customers scan a per-table QR code and see a Persian menu on their phone, and can leave feedback for the owner.

Four pages: cafe intro (name, hours, address, buttons to menu and feedback), menu (categories and items with prices), feedback form (name optional, text required, confirmation message "نظر شما ثبت شد"), and a printable A4 page of per-table QR codes that link to the menu.

All UI must be Persian, RTL, and mobile-first, with no horizontal scroll on any page.

## Planned architecture

Docker Compose on a single Ubuntu server with these services:

- **Caddy**: reverse proxy and automatic HTTPS, routing to the other services.
- **Next.js**: customer-facing pages.
- **Express**: data service between Next.js and the database. It serves menu data and stores feedback. The stack doc notes Next.js could do this alone; Express was kept by explicit request, so don't remove it.
- **PostgreSQL**: persistent storage.
- **`qrcode` library**: generates table QR images.
- **Vazirmatn font**: self-hosted, no external font services.

Data model: menu categories (name, order), menu items (name, price, category, order), feedback (optional name, text, timestamp). Cafe name, hours, address, and table count are fixed config kept separate from the rest.

## Scope constraints

Do not build anything listed under "Not in v1" in SPEC.md (payments, ordering, any login or password-protected page, menu editing panel, feedback-reading page, and so on). Menu changes are manual in the database; feedback is only stored.

Store no customer data beyond the optional name and the feedback text: no phone, email, or location.

The QR URL is printed on paper, so the site address is hard to change later. It is still an open question in SPEC.md; don't hardcode one.

## Workflow

The project skill [spec-writer](.claude/skills/spec-writer/SKILL.md) writes or updates SPEC.md from IDEA.md. Keep SPEC.md's acceptance criteria in sync with any scope change.
