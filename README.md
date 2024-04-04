# Main

- Try to keep pages server component;
- Use BEM
- Use FC generic for Component
- Use the same node version (v20.9.0)

# Imports order

- Next components and utils
- React
- Third libraries
- React components
- Utils
- Style

# Pages

- Pages are stored in the app folder

- Naming -> CategoriesPage, CategoryPage

# Files

 File naming is `kebab-case` 

- User.jsx => bad
- user.jsx => good

<br />

- loginCard.jsx => bad
- LoginCard.jsx => bad
- login-card.jsx => good

# Components

- Creating component
  ```
  modal
    index.tsx
    style.scss

  card 
     index.tsx
     style.scss
  ```
- Component naming is PascalCase

  ```
    <UserComponent />
  ```
- Component is made without margin

# Hooks

 Hooks naming is camelCase

  ```
    useFetch
  ```

# Variables

 Sass folder -> variables.scss