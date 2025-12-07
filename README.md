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

Click the following URL in the terminal to the application in your browser:

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

# Notes / Assumptions

I have built the follow sections of the homepage.

**Header / Navigation Bar**  
Navigation menus build with Shadcn drop-down and accordion components for desktop and mobile versions respectively.

**Hero Section**  
Desktop and mobile versions of the hero section with form inputs and buttons.

**Forex Buttons Below Hero Section**  
Build with Shadcn carousel component.
This is scrollable on small screen sizes.

**Markets Section**  
As I am using Shadcn UI components, I have not had any need to to use state management.
Using Shadcn speeds up development time, and are well tested by the community.
Therefore, I add interactivity to the bitcoin buttons on the left of this section.
This demonstrates how I would add interactivity using state management in React.

I have focused on building out the desktop and mobile versions of these sections to be as close to the design as possible.
I have not implemented full responsiveness across all screen sizes due to time constraints.
I have followed the component composition model, therefore the may be several components in a single file.

**Testing**
I have set up Vitest and React Testing Library for testing.
I have included a basic snapshot test for the App component to demonstrate the testing setup.

**Husky Commit Hooks**
Commit-message hook is setup to enforce commit naming conventions.
Pre-commit hook is setup to check staged files with lint-staged.
Pre-push hook is setup to run tsc, tests and build before allowing a push.

## What you would improve with more time

- Complete responsiveness across all screen sizes.
- Add interactivity to more components.
- Implement accessibility features.
- Add unit and integration tests.
- Optimize images and assets for better performance.
- Lazy load components where appropriate.
