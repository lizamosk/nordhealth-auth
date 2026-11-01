# Agent Skills

> Install Nord Design System skills for AI coding agents like Claude Code, Cursor, Codex, Copilot, Windsurf, and 40+ more.

## What are Agent Skills?

Agent Skills provide structured knowledge about Nord Design System directly to AI coding agents. Once installed, your AI assistant understands Nord components, design tokens, CSS framework, and best practices — without needing to reference documentation manually.

Skills follow the [Agent Skills Discovery RFC](https://github.com/cloudflare/agent-skills-discovery-rfc){rel="[\"nofollow\"]"} and work with **40+ AI coding agents** including Claude Code, Cursor, Codex CLI, GitHub Copilot, Windsurf, Cline, Aider, and more.

## Installation

Install the Nord skill using the `npx skills` CLI:

```bash
npx skills add https://nordhealth.design
```

This fetches the skill from our well-known discovery endpoint and adds it to your project.

## What the skill provides

The Nord skill gives your AI agent:

- **Component guidance** — how to use all 55+ `<nord-*>` web components correctly
- **Design tokens** — CSS custom property naming (`--n-color-*`, `--n-space-*`)
- **Styling approach** — Tailwind CSS v4 with `n:` variant prefix
- **Theming** — therapy/veterinary brands, dark mode, high contrast
- **Forms** — native form participation, validation patterns
- **Accessibility** — built-in ARIA, keyboard nav, screen reader support
- **Do/Don't rules** — common mistakes to avoid
- **Documentation index** — links to raw markdown for every component and guideline page

## Supported agents

The `npx skills` CLI supports any agent that reads project-level skill files. This includes:

- Claude Code
- Cursor
- Codex CLI
- GitHub Copilot
- Windsurf
- Cline
- Aider
- Continue
- And many more

See the full list at [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills){rel="[\"nofollow\"]"}.

## Alternative: LLMs.txt

If your AI tool doesn't support agent skills, you can reference our documentation directly:

- [`nordhealth.design/llms.txt`](/llms.txt) — Structured overview with raw Markdown links
- [`nordhealth.design/llms-full.txt`](/llms-full.txt) — Complete inline documentation

See the [LLMs.txt](/docs/developer/working-with-ai/llms-txt/) page for tool-specific setup instructions.

<!--
Source: https://nordhealth.design/raw/docs/developer/working-with-ai/skills.md
-->
