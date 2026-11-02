---
name: playwright-plan
description: Analyse a ticket or requirement and design appropriate Playwright automation coverage without implementing it.
disable-model-invocation: true
---

# Playwright Test Planning

Analyse:

$ARGUMENTS

Do not implement code.

## Understand the requirement

Identify:
- expected behaviour
- acceptance criteria
- actors or roles
- preconditions
- state changes
- expected outcomes

Highlight unclear, missing or contradictory requirements.
Do not invent missing behaviour.

## Inspect the managed project

Search the relevant project/workspace for:
- similar tests
- fixtures
- helpers
- page objects
- API utilities
- authentication utilities
- test-data builders

Identify what should be reused.

## Design coverage

Consider meaningful:
- happy paths
- negative scenarios
- validation
- boundaries
- permissions
- state transitions
- persistence
- duplicate actions
- error handling
- regression scenarios

Avoid low-value variations of the same scenario.

## Choose automation level

For each proposed scenario determine whether it belongs at:
- UI
- API
- another existing test layer
- manual/exploratory testing

Do not default everything to UI automation.

## Report

Return only:

### Proposed coverage

| Scenario | Level | Priority | Reason |
|---|---|---|---|

### Reuse
Existing fixtures/helpers/tests relevant to implementation.

### Test data
Only required test-data considerations.

### Questions / gaps
Only genuine requirement ambiguities or blockers.

Omit empty sections.
Keep the response concise.

## Communication style

Write naturally, like an experienced engineer communicating with another engineer.

Be concise and task-focused.
Lead with the information that matters.
Use the shortest response that clearly communicates the result.
Prefer short, direct sentences and useful bullets.

Avoid:
- unnecessary introductions
- filler
- generic commentary
- overly formal language
- AI-sounding conclusions
- repeating the user's request
- repeating acceptance criteria unnecessarily
- explaining obvious code
- narrating every action
- tutorials unless requested
- unnecessary background information

Explain decisions, not obvious actions.

Good:
- "Reused the existing authenticatedUser fixture instead of adding another login helper."
- "Kept this as a UI test because the behaviour being validated is the disabled button state."
- "AC3 isn't covered because expected behaviour for a 409 response isn't defined."

Avoid:
- "I imported test and expect."
- "The test navigates to the page."
- "I clicked the button."
- "Playwright is a powerful testing framework."
- "I created tests to test the functionality."

## Security & sensitive data

Treat credentials and sensitive values as secrets, including:
- API keys
- access and refresh tokens
- authentication tokens
- passwords
- client secrets
- private keys
- session cookies
- connection strings containing credentials
- environment variables containing secrets
- secrets found in logs, screenshots, traces, API responses or configuration

If a secret is provided or encountered:
- use it only when strictly necessary for the immediate task
- do not intentionally retain or memorise it for future tasks
- do not repeat the full value in responses
- do not include it in summaries or explanations
- do not copy it into source code, tests, fixtures, docs, handbooks or skills
- do not expose it in logs or debugging output
- do not commit it to the repository

Secrets are ephemeral inputs, not project knowledge.

When a secret must be referenced, redact it, for example `token_****`.

Never hard-code real credentials in Playwright automation.
Use the project's established secret-management mechanism, such as environment variables or secure configuration.

If a real credential appears to have been exposed:
1. Do not reproduce it.
2. Do not persist it.
3. Refer to it only in redacted form if needed.
4. Flag the exposure.
5. Recommend rotation or revocation when appropriate.
