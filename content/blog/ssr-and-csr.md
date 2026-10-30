---
description: Everything about Server-side rendering and Client-side rendering
date: 2026-10-20   
---

# SSR and CSR

Years ago, I built my very first website using vanilla PHP. Back then, my whole philosophy on web development boiled down to three simple steps: connect to the database, run a query, and render the results on the page. Terminology like SSR (Server-Side Rendering) or CSR (Client-Side Rendering) wasn't even on my radar.

That changed when I built my first React app. That was my gateway into Single Page Applications (SPAs) and client-side rendering—learning to handle backend logic through REST APIs. Fast forward to the arrival of Next.js, and my mindset shifted once again: for the first time, writing server and client code seamlessly side-by-side in a single project became the new normal.

## Server-side Rendering

Server-Side Rendering (SSR) is a process where the HTML is generated on the server before being sent to the browser. This means heavy lifting like fetching data from a database happens entirely on the server side, with the final results embedded directly into the initial HTML response.

To make this process seamless, traditional template engines like Pug, EJS, and Thymeleaf were built to let developers easily inject server data straight into HTML layouts.

## Client-side Rendering

In contrast, Client-Side Rendering (CSR) shifts the work to the browser, which dynamically builds and renders the markup on the user's device. Instead of receiving pre-rendered HTML, the client fetches data asynchronously using backend APIs (such as REST or GraphQL) and updates the view on the fly.

### Single-Page Application

Most CSR applications operate as Single-Page Applications (SPAs). An SPA serves a single, essentially empty HTML document, often containing little more than `<div id="app"></div>` and relies on JavaScript to build, swap, and tear down DOM elements as users navigate.

While this creates smooth transitions, it presents a major drawback for SEO: search engine crawlers often see an empty skeleton before JavaScript gets a chance to execute.

### Multi-Page Application

The alternative to an SPA is a Multi-Page Application (MPA), where the server serves distinct HTML documents for different routes. Modern frameworks like [Astro](https://astro.build) have revitalized the MPA pattern by offering component-driven developer experiences paired with static multi-page output.
