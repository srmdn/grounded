# AGENTS.md — grounded

## Scope

Applies to entire repo.

## Product Intent

Grounded is a docs-first open-source decision and execution system for people building something real under constraints.

It should work across domains, including:

- software and technical projects
- personal brands
- small businesses and MSMEs
- expertise products and professional services
- learning and skill-building paths

Its job is to turn practical judgment into reusable artifacts:

- short doctrine
- concrete workflow
- templates
- checklists
- case studies
- later, a static site or small web app if interaction becomes necessary

## Working Rules

- Keep changes minimal and deliberate.
- Prefer docs, templates, and structure before software.
- Do not add dependencies without approval.
- Do not introduce app code unless task clearly requires it.
- Prefer short Markdown files over long essays.
- Optimize for human readers and AI summarizers.
- Do not let the repo drift back into software-only framing unless the task is explicitly software-specific.

## Content Style

- Be blunt, practical, and reality-based.
- Avoid hype, motivational fluff, and startup theater.
- Prefer examples, checklists, and decision points.
- Keep sections short and skimmable.
- Distinguish clearly between:
  - what Grounded is today
  - how it should be used today
  - what it may become later
- Use broad "building under constraints" language by default.
- Use technical examples as one use case, not the whole category.

## File Conventions

- `docs/` contains durable concepts and workflow.
- `templates/` contains copyable planning artifacts.
- `checklists/` contains operational checklists.
- Add new top-level directories only when justified by actual usage.
- Keep private working notes in `.local/`, not in tracked docs.

## Codex Workflow

- Read repo context before editing.
- For substantive work, propose or follow a milestone.
- Prefer adding one artifact at a time.
- If introducing a site or app layer later, keep it separate from core docs.
- Preserve a clean distinction between public docs and private planning.

## Milestone Bias

Default toward:

1. sharper framing
2. better workflow
3. more useful templates
4. stronger checklists
5. broader examples and case studies

Only then consider UI.
