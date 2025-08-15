# Academlo Portfolio

This project is a personal portfolio website built as the final project for the first module of the Academlo bootcamp. It showcases my projects, skills, and certifications.

The live version can be viewed [here](https://your-deployment-link.com).

## ✨ Features

-   **Responsive Design:** Adapts to different screen sizes, from mobile to desktop.
-   **Dark/Light Mode:** Theme switcher to toggle between dark and light mode.
-   **Internationalization (i18n):** Supports both English and Spanish.
-   **Dynamic Content:** Sections for Home, About, Portfolio (Projects, Certificates, Tech Stack), and a functional Contact form.
-   **Smooth Animations:** Uses `motion` to create fluid and engaging animations.
-   **EmailJS Integration:** The contact form is connected to EmailJS to receive messages directly in your inbox.

## 🚀 Tech Stack

-   **Framework:** [React 19](https://react.dev/)
-   **Bundler:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:**
    -   [Tailwind CSS 4](https://tailwindcss.com/)
    -   [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) for utility class management.
    -   [Framer Motion](https://www.framer.com/motion/) for animations.
    -   [React Icons](https://react-icons.github.io/react-icons/) for icons.
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Contact Form:** [EmailJS](https://www.emailjs.com/)
-   **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
-   **Linting & Formatting:**
    -   [ESLint](https://eslint.org/)
    -   [Prettier](https://prettier.io/)
    -   `prettier-plugin-tailwindcss` for automatic class sorting.

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm (or your package manager of choice)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/academlo-portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd academlo-portfolio
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```
4.  Create a `.env` file in the root of the project and add your EmailJS credentials:
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

## 📈 Areas for Improvement

This project is a great start, but there are always ways to improve it. Here are some suggestions for future work:

-   **Accessibility (a11y):** Conduct a full accessibility audit to ensure the site is usable by everyone. This includes checking color contrast, keyboard navigation, and proper ARIA attribute usage.
-   **Performance Optimization:**
    -   **Image Optimization:** Compress images and serve them in modern formats like WebP or AVIF to reduce load times.
    -   **Lazy Loading:** Implement lazy loading for images and components that are not in the initial viewport.
-   **Testing:**
    -   **Unit Tests:** Add unit tests for components and hooks using a framework like [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
    -   **End-to-End Tests:** Implement end-to-end tests with a tool like [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/) to automate user flow testing.
-   **CI/CD Pipeline:** Set up a Continuous Integration/Continuous Deployment pipeline using [GitHub Actions](https://github.com/features/actions) to automate the testing and deployment process.
-   **SEO:** Enhance Search Engine Optimization by adding more meta tags, generating a sitemap, and using a library like [React Helmet](https://github.com/nfl/react-helmet) to manage document head content.
-   **Refactor i18n:** While the current implementation works, consider using a dedicated i18n library like [i18next](https://www.i18next.com/) for more advanced features and better scalability.
-   **Code Refinements:** Some larger components could be broken down into smaller, more reusable ones to improve maintainability.