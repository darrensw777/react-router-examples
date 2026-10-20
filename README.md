# React Router Examples

A small React and TypeScript application demonstrating client-side routing with React Router. A simple services website provides practical examples of navigation, shared layouts, URL parameters and conditional access to routes.

Built by [Darren Sweeney](https://github.com/darrensw777) as a learning and portfolio project. Explanatory text within the app describes the behaviour of several examples.

## Features

| Concept                  | Implementation                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Client-side routing      | `BrowserRouter`, `Routes` and `Route` map URLs to page components.                            |
| Shared layout            | Separate header and footer components surround an `Outlet` for the matched child page.        |
| Nested and index routes  | A services route groups its index page and dynamic detail route.                              |
| Internal navigation      | `Link` navigates to a service detail page.                                                    |
| Active navigation        | `NavLink` applies an active class to matching navigation items.                               |
| Dynamic path parameters  | `useParams` reads the service `slug` from the URL.                                            |
| Search parameters        | `useSearchParams` reads and updates a category while preserving other query parameters.       |
| Programmatic navigation  | `useNavigate` opens a thank-you page after a simulated booking operation.                     |
| Conditional route access | `RequireAuth` renders the account page or redirects to login using `Navigate` with `replace`. |
| Unmatched routes         | A wildcard route displays a page-not-found message.                                           |

## Technology

- React 18
- React Router 7, using Declarative mode
- TypeScript 4.9
- Tailwind CSS 3
- Create React App / React Scripts 5
- Prettier

## Getting started

Install Node.js and npm, then run:

```bash
git clone https://github.com/darrensw777/react-router-examples.git
cd react-router-examples
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server reloads the page when source files change.

## Routes

All routes share the same header and footer.

| Path               | Page / behaviour                                         |
| ------------------ | -------------------------------------------------------- |
| `/`                | Home page; the layout's index route.                     |
| `/about`           | About page.                                              |
| `/services`        | Services index with a link to the voiceover example.     |
| `/services/:slug`  | Displays the service slug, such as `voiceover`.          |
| `/bookings`        | Demonstrates navigation after a simulated booking.       |
| `/thank-you`       | Destination after the booking operation.                 |
| `/singing`         | Demonstrates reading and updating search parameters.     |
| `/account`         | Guarded account route; redirects to `/login` by default. |
| `/login`           | Explanatory login placeholder.                           |
| Any unmatched path | Page-not-found message.                                  |

## Try the examples

1. Navigate between pages and observe the active menu item and shared layout.
2. Open **Services**, then **Voiceover**. The detail page reads `voiceover` from `/services/voiceover`.
3. Open **Bookings** and select **Book session**. The simulated save logs a message to the browser console before navigating to `/thank-you`.
4. Open **Singing** and select **Show singing**. The URL becomes `/singing?category=singing`, and the displayed category updates. Refreshing preserves that category because it is stored in the URL.
5. Open `/singing?sort=price`, then select **Show singing** to see the existing search parameter preserved alongside the new category.
6. Select **Account** to see the redirect to `/login`. Set `loggedIn` to `true` in `src/App.tsx` to demonstrate the permitted state.
7. Visit an undefined path such as `/missing-page` to see the fallback page.

## Code organisation

| Location                         | Responsibility                                  |
| -------------------------------- | ----------------------------------------------- |
| `src/index.tsx`                  | Entry point and `BrowserRouter` setup.          |
| `src/App.tsx`                    | Route definitions and demonstration login flag. |
| `src/components/SiteLayout.tsx`  | Shared layout and child-route outlet.           |
| `src/components/Header.tsx`      | Navigation and active-link handling.            |
| `src/components/Footer.tsx`      | Shared footer.                                  |
| `src/components/RequireAuth.tsx` | Conditional rendering and login redirect.       |
| `src/pages/`                     | Page components and routing examples.           |
| `src/index.css`                  | Global styles and Tailwind directives.          |
| `tailwind.config.js`             | Tailwind configuration.                         |

## Available commands

| Command                | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server.                     |
| `npm run build`        | Create a production bundle in `build/`.           |
| `npm run typecheck`    | Check TypeScript types without generating output. |
| `npm test`             | Start the configured test runner in watch mode.   |
| `npm run format`       | Format the project with Prettier.                 |
| `npm run format:check` | Check formatting without changing files.          |

## Scope

This project focuses on React Router's Declarative APIs. It does not implement route loaders, actions or Framework mode.

The booking operation is a console-log simulation and does not save data. Authentication uses a hardcoded boolean to demonstrate route-guard behaviour; the login page does not authenticate users. A production application would require an authentication service and server-side authorisation for protected data.

When deploying the production build to static hosting, configure application routes to fall back to `index.html` so direct visits and refreshes on nested URLs work correctly.

## Reference

[React Router documentation](https://reactrouter.com/start/declarative/installation)
