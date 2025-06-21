# Next.js Velt App Using Auth0

This is a Next.js application that integrates Auth0 authentication and Velt for comments and @mentions. The project demonstrates how to build a modern web application with user authentication, real-time updates, and social features for a collaborative experience.

This is the code demo for the blog post: [Building Real-Time Collaborative Documents App with Velt.dev and Auth0 in Next.js](https://velt.dev/blog).

Please give this repo a ⭐ if it was helpful to you.

## Table of Contents

- [Next.js Velt App Using Auth0](#nextjs-velt-app-using-auth0)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Tech Stack](#tech-stack)
  - [License](#license)

## Demo

<https://github.com/user-attachments/assets/fcf8a8e1-acbf-482e-9f91-b2e29a8b2cbb>

## Features

- User authentication with Auth0
- Real-time comments, @mentions, notifications, and user presence using Velt
- Modern UI with Tailwind CSS
- Collaborative rich text editing with React Quill

## Prerequisites

- Auth0 account and application (Client ID, Client Secret, Domain)
- A Velt account and API key
- Node.js 16.8 or later

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/studio1hq/nextjs-velt-firebase-app.git
cd collaborative-editor
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a .env.local file in the root directory and add your Auth0 and Velt API keys:

```
AUTH0_SECRET=your-long-random-secret
APP_BASE_URL=http://localhost:3000
AUTH0_DOMAIN=https://YOUR_DOMAIN.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
NEXT_PUBLIC_VELT_API_KEY=your-velt-api-key
```

You can generate the Auth0 secret by running `openssl rand -hex 32` in your terminal. Get the Auth0 credentials from your Auth0 dashboard after creating an application. The Velt API key is available in your Velt dashboard.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Auth0](https://auth0.com/)
- [Velt](https://velt.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Quill](https://quilljs.com/)

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more information.

<!-- www.tech.timonwa.com/blog -->
