<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/collaborative-editor.webp" alt="Collaborative Editor with Velt and Auth0: A rich text editor with Auth0 login and Velt comments and presence" width="100%" />

<br />
<br />

# Collaborative Editor with Velt and Auth0

### A rich text editor with Auth0 login and Velt comments and presence

A Next.js app that signs users in with Auth0 and adds Velt comments, a comments sidebar, notifications and presence to a React Quill document editor.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://collaborative-editor-neon.vercel.app)
[![Read the blog](https://img.shields.io/badge/Read_the_blog-1c1917?style=for-the-badge&logo=rss&logoColor=white)](https://velt.dev/blog)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A Next.js app that combines Auth0 authentication with [Velt](https://velt.dev) collaboration. Users sign in with Auth0, open a document page with a React Quill rich text editor, and use Velt for comments, notifications and presence. The Auth0 profile is passed to Velt as the user identity.

This is the code demo for the blog post [Building Real-Time Collaborative Documents App with Velt.dev and Auth0 in Next.js](https://velt.dev/blog).

## Features

- **Auth0 login**: `@auth0/nextjs-auth0` handles sign in, with a middleware that runs on all pages except static assets.
- **Comments**: `VeltComments` and `VeltCommentTool` for comments on the document.
- **Comments sidebar**: `VeltCommentsSidebar` in page mode and `VeltSidebarButton` to open it.
- **Notifications**: `VeltNotificationsTool` provides in-app notifications.
- **Presence**: `VeltPresence` shows who is on the document.
- **Rich text editing**: React Quill editor.
- **Identity from Auth0**: The `useVeltAuth` hook maps the Auth0 user (id, name, email, picture) to a Velt user with `useIdentify`.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (Pages Router), [TypeScript](https://www.typescriptlang.org/) |
| Auth | [Auth0](https://auth0.com/) |
| Collaboration | [Velt](https://velt.dev/) (`@veltdev/react`) |
| Editor | [React Quill](https://quilljs.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |

## Getting started

### Prerequisites

- Node.js 16.8 or newer
- An Auth0 account and application (Client ID, Client Secret, Domain)
- A Velt account and API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/collaborative-editor.git
cd collaborative-editor
npm install
```

### Environment variables

Create a `.env.local` file in the project root.

| Variable | Description |
| --- | --- |
| `AUTH0_SECRET` | Long random string. Generate one with `openssl rand -hex 32`. |
| `APP_BASE_URL` | Base URL of the app, for example `http://localhost:3000`. |
| `AUTH0_DOMAIN` | Your Auth0 domain, for example `https://YOUR_DOMAIN.auth0.com`. |
| `AUTH0_CLIENT_ID` | Client ID from your Auth0 application. |
| `AUTH0_CLIENT_SECRET` | Client secret from your Auth0 application. |
| `NEXT_PUBLIC_VELT_API_KEY` | Your Velt API key, from the Velt dashboard. |

The optional API route `pages/api/sync-velt-user.ts` calls the Velt REST API to add users. It also reads `VELT_API_KEY`, `VELT_AUTH_TOKEN` and `VELT_ORG_ID`. The client call to it in `pages/index.tsx` is commented out.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## How it works

```text
collaborative-editor/
├── pages/
│   ├── index.tsx             # Landing page
│   ├── editor.tsx            # Editor page: Velt tools, sidebar, editor
│   └── api/sync-velt-user.ts # Adds users through the Velt REST API
├── components/               # RichTextEditor, UserDropdown
├── providers/                # AuthProvider, VeltReactProvider
├── hooks/useVeltAuth.ts      # Auth0 user to Velt identity
├── lib/auth0.ts              # Auth0 client
└── middleware.ts             # Auth0 middleware
```

`VeltReactProvider` wraps the app with the Velt API key. After login, `useVeltAuth` calls `useIdentify` with the Auth0 user, using the organization ID `collaborative-editor`.

## Resources

- [Building Real-Time Collaborative Documents App with Velt.dev and Auth0 in Next.js](https://velt.dev/blog): The blog post this repo accompanies.
- [Velt documentation](https://docs.velt.dev): SDK guides and API reference.
- [Velt](https://velt.dev): Product site.
- [Auth0](https://auth0.com/): Identity provider used for login.

## License

Released under the [MIT License](LICENSE).

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
