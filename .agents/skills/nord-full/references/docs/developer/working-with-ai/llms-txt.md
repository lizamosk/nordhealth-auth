# LLMs.txt

> How to get AI tools like Cursor, Windsurf, GitHub Copilot, ChatGPT, and Claude to understand Nord Design System components, design tokens, and best practices.

## What is LLMs.txt?

LLMs.txt is a structured documentation format specifically designed for large language models (LLMs). Nord Design System provides LLMs.txt files that contain comprehensive information about our component library, making it easy for AI tools to understand and assist with Nord Design System development.

These files are optimized for AI consumption and contain structured information about components, APIs, usage patterns, and best practices.

## Available routes

We provide LLMs.txt routes to help AI tools access our documentation:

- [**`/llms.txt`**](/llms.txt) - Contains a structured overview of all components and their documentation links (~5K tokens)
- [**`/llms-full.txt`**](/llms-full.txt) - Provides comprehensive documentation including implementation details, examples, design tokens, and migration guidance (~1M+ tokens)

## Choosing the Right File

> [!NOTE]
> **Most users should start with `/llms.txt`** - it contains all essential information and works with standard LLM context windows. Use `/llms-full.txt` only if you need comprehensive implementation examples and your AI tool supports large contexts (200K+ tokens).

## Important usage notes

> [!WARNING]
> **@-symbol must be typed manually** - When using tools like Cursor or Windsurf, the `@` symbol must be typed by hand in the chat interface. Copy-pasting breaks the tool's ability to recognize it as a context reference.

## Usage with AI Tools

### Cursor

Nord Design System provides specialized LLMs.txt files that you can reference in Cursor for better AI assistance with component development.

#### How to use:

1. **Direct reference**: Mention the LLMs.txt URLs when asking questions
2. Add these specific URLs to your project context using `@docs`

[Read more about Cursor Web and Docs Search](https://docs.cursor.com/en/context/@-symbols/@-docs){rel="[\"nofollow\"]"}

### Windsurf

Windsurf can directly access the Nord Design System LLMs.txt files to understand component usage and best practices.

#### Using LLMs.txt with Windsurf:

- Use `@docs` to reference specific LLMs.txt URLs
- Create persistent rules referencing these URLs in your workspace

[Read more about Windsurf Web and Docs Search](https://docs.windsurf.com/windsurf/cascade/web-search){rel="[\"nofollow\"]"}

### Other AI Tools

Any AI tool that supports LLMs.txt can use these routes to better understand Nord Design System.

#### Examples for ChatGPT, Claude, or other LLMs:

- "Using Nord Design System documentation from [https://nordhealth.design/llms.txt](https://nordhealth.design/llms.txt){rel="[\"nofollow\"]"}"
- "Follow complete Nord Design System guidelines from [https://nordhealth.design/llms-full.txt](https://nordhealth.design/llms-full.txt){rel="[\"nofollow\"]"}"

<!--
Source: https://nordhealth.design/raw/docs/developer/working-with-ai/llms-txt.md
-->
