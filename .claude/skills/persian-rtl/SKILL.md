---
name: persian-rtl
description: Rules for building Persian (Farsi) right-to-left web pages. Use whenever a page, form, or component shows Persian text.
---

When you build or change any page with Persian text:

1. Set `lang="fa"` and `dir="rtl"` on the `<html>` element. Never set `dir` per paragraph unless the paragraph is Latin-only.
2. Use logical CSS properties (`margin-inline-start`, `padding-inline-end`, `text-align: start`) instead of left/right.
3. Font: use a Persian-capable font stack. Prefer `Vazirmatn` if it is available in the project (license: verify), then system fonts: `"Vazirmatn", "Tahoma", "Segoe UI", sans-serif`. Do not use letter-spacing on Persian text.
4. Numbers: show Persian digits in UI text only if SPEC.md asks for it; keep Latin digits in inputs, phone numbers, and codes.
5. Forms: labels above inputs, aligned to the start side; placeholders in Persian; error messages in Persian.
6. Icons and arrows: mirror directional icons (back/next) in RTL.
7. Keep English words inside Persian sentences short, or wrap them in `<span dir="ltr">`.
8. After the change, list the pages you touched and ask me to check them on a phone width.
