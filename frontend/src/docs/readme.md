# Folder Structure

These descriptions provide a concise overview of the purpose and content of each folder within the project structure, giving a quick understanding of what each section is responsible for.

<pre>
src
├── @types/                     # TypeScript type declarations
├── api/                        # API endpoints and data fetching
├── assets/                     # Resource files such as images and icons
│   ├── icons                   # SVG and PNG icons
│   └── images                  # JPG and PNG images
├── components                  # Reusable UI components
│   └── common                  # Commonly used components
├── constants                   # Constants and configuration values
├── context                     # React context providers
├── docs                        # Documentation files and resources
├── hooks                       # Custom React hooks
├── interfaces                  # Types and Interfaces
├── pages                       # Page components and routing logic
├── store                       # State management related files
├── styles                      # Custom CSS styles and themes
└── utils                       # Utility functions and helper modules
</pre>

# Conventions

We strive to maintain a high level of professionalism and code quality. To achieve this, we have established a set of coding conventions that we encourage all developers to follow.

We understand that personal coding preferences may vary. However, to maintain a unified and coherent codebase, we kindly request that all team members adhere to the established conventions.

By following these conventions, the code will look consistent and readable to all developers involved in the project.

## Naming Conventions:

Use descriptive and meaningful names for components, variables, functions, and files. The following naming conventions should be followed for the following:

| Type      | Convention | Example        |
| --------- | ---------- | -------------- |
| Component | PascalCase | UserProfile    |
| Variable  | camelCase  | isLoading      |
| Function  | camelCase  | calculateTotal |

## Component Structure:

- Use of functional components is encouraged
- Follow a consistent component structure
- Place component-specific CSS or styles in separate files ending with \*.module.css to enforce CSS encapsulation
- Inline CSS should be avoided and should be used as a last resort
- Avoid having large and complex components; break them down into smaller reusable components

## JSX Syntax:

- Use proper indentation and formatting for JSX code
- Use self-closing tags for components without children (e.g., `<UserProfile />`)
- Use curly braces for JavaScript expressions within JSX (e.g., {isLoading})

## Conditional Rendering:

- Use of short-circuiting is encouraged (e.g. {isLoading && `<UserProfile />`})
- Avoid complex logic in JSX, Move it to separate functions or components if needed
- Minimize the use of ternary operators only for one-liner code

## Code Formatting and Styling:

- Use meaningful comments to explain complex logic or important details
- Use consistent code formatting and indentation.
- Follow a consistent code styling approach (e.g., ESLint rules).
- Never leave an unused variable or import statement
