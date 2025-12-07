## Quick Start

Clone the repository:

```bash
git clone https://github.com/matt-powelldev2784/PM-Test.git
```

Navigate to the project directory:

```bash
cd PM-Test
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Click the following URL from the terminal to open the application in your browser:

```bash
http://localhost:5173
```

## Deployed Site

https://matthew-powell-pm-test.netlify.app/

## Tech Stack

- **Vite** - Modern build tool
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Commit message, pre-commit, and pre-push hooks added

# Notes / Assumptions

I have built the follow sections of the homepage.

**Header / Navigation Bar**  
Navigation menus built with Shadcn drop-down and accordion components for desktop and mobile versions respectively.

**Hero Section**  
Desktop and mobile versions of the hero section with form inputs and buttons.

**Forex Buttons Below Hero Section**  
Built with the Shadcn carousel component. This carousel is scrollable on small screen sizes.

**Markets Section**  
This section also uses Shadcn UI components. Shadcn speeds up development time, manages UI updates, and is well tested by the community. Because of that, I have not needed to use React state management. I have added interactivity to the Bitcoin buttons on the left side of this section to demonstrate how I would wire up local state in React.

I have focused on building out the desktop and mobile versions of these sections to be as close to the design as possible.
I have not implemented full responsiveness across all screen sizes due to time constraints.
I have followed the component composition model, therefore there may be several components in a single file.

**Testing**  
I have set up Vitest and React Testing Library for testing.
I have included a basic snapshot test for the App component to demonstrate the testing setup.

**Husky Commit Hooks**  
Commit-message hook is set up to enforce commit naming conventions.
Pre-commit hook is set up to check staged files with lint-staged.
Pre-push hook is set up to run tsc, tests and build before allowing a push.

## What you would improve with more time

- Complete the remaining sections of the homepage.
- Complete responsiveness across all screen sizes.
- Add interactivity to more components.
- Implement accessibility features.
- Add unit and integration tests.
- Optimize images and assets for better performance.
- Lazy load components where appropriate.
