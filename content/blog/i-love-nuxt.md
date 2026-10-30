---
description: A explanation why you should use Nuxt
date: 2026-10-30
---

# Why I love Nuxt so much

Three days ago was Nuxt's 10th anniversary. I truly can't believe 10 years have already passed with Nuxt. Although I first set foot in web development in 2021, I've used most of the well-known frameworks such as Next.js, TanStack Start, Qwik, Solid Start, etc., and most of them do a great job as web frameworks, but I still felt something was missing. When I came to Nuxt, I realized that what the other frameworks were lacking was DX (developer experience).

First, I'll rate which framework to use based on the following criteria: Runtime performance, Developer Productivity, and Maintainability. More specifically:
- Runtime performance: build bundle size, render speed
- Developer productivity: ecosystem and community
- Maintainability: how well a project can be maintained as it grows larger, as well as how code files are organized.

## On Performance

### Vue

Both Vue and React use a virtual DOM, so their performance is lower than UI libraries that don't use a virtual DOM, such as Svelte or Solid. However, Vue 3.6 has introduced Vapor Mode, which lets Vue compile without a virtual DOM, similar to Solid and Svelte. This promises that Vue will be lighter in the future, and build sizes will be smaller.
Vue is truly reactive like Solid, it only renders what gets changed instead of re-rendering everything by default.

### Nuxt

Nuxt uses Vite as its main bundler and Nitro as its server engine. This allows Nuxt to achieve Vite's fast build speed and Nitro's high compatibility with many runtimes.

## On Developer Productivity

### Vue

Although Vue has fewer packages than React, the Vue ecosystem still supports all the essential features, such as a basic UI library (Nuxt UI), global state management (Pinia), and data fetching (Pinia Colada).

### Nuxt

The community has developed a large number of Nuxt modules, and among them are many that I consider must-haves when building my Nuxt apps. Some examples include `nuxt/hints`, which helps detect hydration-related errors, and `nuxt/a11y`, which helps improve Accessibility scores, etc.

## On Maintainability

Nuxt comes with built-in conventions for organizing files, such as `components` and `composables`, along with auto-imports that remove the need to write import statements.
Although you can build a full-stack app with Nuxt through API routes, I personally still recommend separating the backend and frontend into two different apps. That said, Nuxt also has mechanisms that prevent developers from calling server-only code in the browser, and vice versa.