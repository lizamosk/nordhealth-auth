# Frequently Asked Questions

> 

## What is the Nord Design System?

Nord is Nordhealth's design system for products, digital experiences and brand. It's a collection of reusable components and tools, guided by clear standards, that can be assembled together to build digital products and experiences.

## Who works on Nord?

Nord Design System is maintained by João Gonçalves and Joseph Anson, with contributions from teams across Nordhealth. The system was originally built by a core team including Ariel Salminen (architect), Eric Habich, Nick Williams, David Darnes, and Elwin van Eede.

## Why is the design system public?

Public documentation makes sharing and collaboration between different teams and third party vendors much easier as it increases the system's visibility and accountability. This also makes us push towards higher quality content and enables us to be more transparent. Finally, this also serves as an amazing tool that we can leverage in recruiting.

## What is the goal of the design system?

The goal of Nord Design System is to improve UI consistency and quality, while making our software design and development processes more efficient. Nord also helps to establish a common vocabulary between everyone in our organization and ease collaboration between different teams and disciplines.

## What's on the roadmap?

See our [Roadmap in Linear](https://linear.app/nordhealth/team/NDS/all){rel="[\"nofollow\"]"} for up to date plans.

## How do you prioritize items on your roadmap?

Please see [backlog prioritization model](/resources/backlog-prioritization/) for more details.

## Should we use the Nord Design System?

The short answer is yes, you should use it. Nord improves UI consistency and quality, while making our software design and development processes more efficient.

## Can we use a different framework instead of Nord?

The short answer is, no, you shouldn't. Third party frontend frameworks provide a specific solution and a particular look and feel, and the resulting experience ends up resembling someone else's brand. In addition to look-alike issues, these frameworks add a lot of unnecessary bloat to the user experience.

While a third party framework might seem like a good way to jump start development, it will eventually lead to developers needing to create a substantial amount of custom code to achieve their products' goals. Eventually a threshold will be crossed where the initial benefits of using a third party framework are outweighed by the time spent modifying, extending, and fixing the framework.

Finally, there's also the issue with naming. Using a third party framework means subscribing to someone else's structure, naming, styling conventions, and even ways of working which will make it harder and harder for us to improve our processes and ease the collaboration between different teams and disciplines.

## What if Nord doesn't fulfill our team's requirements?

Nord's contribution model allows feature teams to add new features based on their product requirements. At the same time, it allows us to keep an eye on the quality and consistency of the user experience. Please see [contributing guidelines](/resources/contributing/) for more information.

## What's the meaning of "draft" badges?

These badges indicate whether something is ready to be used in production. Orange ("Draft") status means that it's still under work and not ready to be used in production environment or design work.

## Can I use Nord in any project?

Nord Design System is meant for building digital products and experiences for Nordhealth. Our [terms of use](/resources/terms/) doesn't allow the use of Nord outside of this context.

## Is Nord open source?

No, but feel free to browse this website to learn how we approach design and development at [Nordhealth](https://nordhealth.com){rel="[\"nofollow\"]"}.

## Is there a way to monitor API status?

Yes, Nord Design System has a public status page that informs our users about the uptime of our services. You can view our [status page here](https://nordhealth.betteruptime.com/){rel="[\"nofollow\"]"}.

## What tools do you use?

- [Slack for updates](https://nordhealth.slack.com/archives/C01BKU5JA9W){rel="[\"nofollow\"]"}
- [Figma for design](https://www.figma.com/files/team/929995727836666854/Nordhealth){rel="[\"nofollow\"]"}
- [GitHub for code](https://github.com/nordhealth){rel="[\"nofollow\"]"}
- [Linear for tracking progress](https://linear.app/nordhealth/team/NDS/all){rel="[\"nofollow\"]"}
- [NPM for distribution](https://www.npmjs.com/org/nordhealth){rel="[\"nofollow\"]"}

## What packages do you offer?

- [Web Components](/components/)
- [CSS Framework](/docs/developer/css-framework/)
- [Design Tokens](/tokens/)
- [Themes](/themes/)
- [Webfonts](/docs/developer/webfonts/)
- [Nordicons](/icons/)
- [Color Utilities](/design/foundations/color-utilities/)
- [AG Grid Theme](/components/table/#recommendation-for-component-based-libraries)
- [Figma Toolkit](/design/foundations/figma/)

## What's your working culture?

The following set of fundamental rules allows us to get to the highest level of productivity while benefiting both the company and our team members.

- We avoid meetings as much as possible. Instead of having them, we communicate asynchronous to each other via Linear, GitHub, Notion, Figma, and (occasionally) Slack, expecting responses within 24 hours.
- We don't do team wide standups or sync meetings, except one meeting at the start of every cycle. Here we walk through the tasks and also discuss about how the team feels, what motivates them right now, and what would they want to change.
- Most collaboration and discussion happens in feedback loops, using the above mentioned tools, which requires clear and thoughtful communication from everyone.
- We don't have strict deadlines. We ship incrementally as we move through the backlog and launch new things as they become ready.
- Our team members should be able to work on what they think is fun, or rely on their intuition when picking tasks from the backlog. Our [roadmap on Linear](https://linear.app/nordhealth/team/NDS/all){rel="[\"nofollow\"]"} holds us accountable.
- We focus on persistent iteration over flashy launches.

## How do you use Slack?

We aim to follow the below guidelines to keep the experience great for everyone:

- Reply/follow up to all posts in threads.
- Don't use the "Also send thread reply to main channel" feature, unless absolutely necessary.
- Keep discussion on topic in a thread.
- If you want to discuss about a new topic, start a new thread.

## How do I get started with Nord?

See the [Getting Started](/docs/developer/) section in the documentation.

## Where can I find Nordhealth logo?

You can find the logo in different formats from our [downloads page](/design/assets/).

## Where can I find the presentation templates?

You can find the presentation templates in different formats from our [downloads page](/design/assets/).

## What's the difference between RGB, CMYK and Spot colors?

The straightforward answer is that RGB is for anything digital or on a screen, and CMYK and Spot are for print. If you're working on print and don't know what Spot colors are, then we recommend you to always pick the CMYK version instead.

## What browsers are supported?

Nord Design System is tested in the latest two versions of Chrome, Safari, Edge, Firefox, and Opera. Our team addresses critical bug fixes in earlier versions based on their severity and impact. If you need to support IE11 or pre-Chromium Edge, this library isn't for you.

## Can I use Nord together with other CSS frameworks?

Yes. All CSS selectors are prefixed with `.n-` to prevent collisions.

## What languages are the components written in?

Components are written in TypeScript, CSS and HTML. They ship as standards based Web Components making them compatible with current and future JavaScript based frameworks like Angular, React or Vue.

## What are you using to generate the documentation?

We use [Nuxt](https://nuxt.com/){rel="[\"nofollow\"]"} to generate it.

## What tools do you use for Web Components?

- Components are built with [Lit](https://lit.dev/){rel="[\"nofollow\"]"}.
- Component metadata is generated by the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest){rel="[\"nofollow\"]"}.

## How do you version the system's parts?

We follow "Semantic Versioning." Under this scheme, version numbers and the way they change convey meaning about the underlying features and what has been modified from one version to the next. For more details, please see the [documentation](https://semver.org/){rel="[\"nofollow\"]"}.

## How do I test the different themes?

Explore presets in [Themes](/themes/) or customise them in the [playground](/themes/playground/).

## How did we choose the UI typeface (font)?

For digital products, we use a typeface called Inter which is carefully crafted and designed for computer screens specifically. It features a tall x-height to aid in readability of mixed-case and lower-case text.

We chose this specific typeface based on user research we did in 2020. During this research we tested dozen different options and chose Inter for its legibility and ability to present user interface and content as clearly and efficiently as possible.

## How can I add a new icon?

All new icons should be added to [Nordicons](/icons/) first. Please see [Support page](/resources/support/) for more information on how to contact us.

## How can I add a new theme?

Choose a starting point in [Themes](/themes/), customise its tokens in the [playground](/themes/playground/), then copy the CSS into your product.

## I found a bug. How do I report it?

First, make sure the problem is reproducible. Once confirmed, [send us a bug report](/resources/support/).

## I couldn't find an answer to my question

See the [Support guidelines](/resources/support/) for instructions on how to reach us.

<!--
Source: https://nordhealth.design/raw/docs/developer/faq.md
-->
