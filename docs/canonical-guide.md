# Canonical Guide

This is the default Grounded path from idea to first shipped version.

Use it when you want structure without overplanning.

## 1. Start With Three Lines

Write:

- who is this for
- what painful problem does it solve
- what is the smallest useful version

Example:

- for: solo builders with limited budget and too many AI tools
- problem: they confuse motion with progress and drift between ideas
- smallest useful version: a practical system that helps them choose the next sane step

If these lines are weak, the project is still fuzzy.

## 2. Turn the Idea Into a Spec-Lite

Do not write a long product doc.

Just define:

- core user flow
- must-have features
- not-now features
- stack choice
- first milestone

The purpose is not to sound strategic.
The purpose is to reduce drift before implementation starts.

## 3. Pick a Real Milestone 1

Milestone 1 must be concrete and testable.

Bad examples:

- build the platform
- create the MVP
- ship the startup

Better examples:

- user can submit one form successfully
- one workflow runs end to end
- one recurring pain is solved in a usable way

Milestone 1 should prove that the project can become useful.
It should not try to prove everything.

## 4. Build Only What the Milestone Needs

This is where most solo builders drift.

They add:

- auth too early
- dashboards too early
- configuration systems too early
- polish too early

Grounded principle:

If the milestone works without it, it is probably not needed yet.

## 5. Deploy as a Verification Step

Deployment is not the start of thinking.

It is the moment verified work becomes available for use.

Before deploy, check:

- scope is clear
- environment is understood
- rollback is known
- basic tests or checks pass

Use [../checklists/deploy.md](../checklists/deploy.md).

## 6. Validate the Milestone

You do not always need real users first, but you do need signal.

Possible early signals:

- you use it repeatedly
- a trusted person can complete the main task
- the workflow is materially easier than before

What matters is not traffic.
What matters is whether the project is teaching you something real.

## 7. Review What Changed

After shipping, do not jump straight into more building.

Run a review:

- what worked
- what felt awkward
- what assumption changed
- what is the next bottleneck

Use [../templates/milestone-review.md](../templates/milestone-review.md).

## 8. Choose the Next Sane Step

Do not ask:

- what else can I add
- what would make this feel complete

Ask:

- what is blocking usefulness now
- what would make the next user action easier
- what removed friction is worth more than a new feature

That is how Grounded turns output into judgment.
