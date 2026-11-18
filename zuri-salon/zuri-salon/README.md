# Zuri Hair & Beauty Studio

## Project Description
A responsive multi-page website for a fictional salon in Lagos, built with React JS. Visitors can read about the studio, browse and filter services, save favourites, and send a message through a validated contact form.

## Technologies Used
- React JS (functional components, hooks), React Router
- Vite
- JavaScript (ES6+), HTML, CSS (Flexbox, Grid, media queries)

## React Concepts Demonstrated
- Components, JSX, props and reusable components (`ServiceCard`, `Navbar`, `Footer`, `InfoBlock`)
- `useState` (menu toggle, testimonial slider, filters, favourites, form data)
- `useEffect` + Local Storage (saved favourites)
- Event handling (`onClick`, `onChange`, `onSubmit`)
- Controlled form inputs with validation and feedback
- `.map()` and `.filter()` for rendering lists
- React Router for page navigation without reloads

## Installation
1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Run: `npm install`

## Running the Application
- Development: `npm run dev`
- Production build: `npm run build`

## Deployment
Build command: `npm run build`. Publish directory: `dist`.
`public/_redirects` makes page refreshes work on Netlify.

## Project Structure
```
src/
  components/  Navbar, Footer, ServiceCard, ScrollToTop
  pages/       Home, About, Services, Contact
  data/        services.js
  App.jsx      routes
  main.jsx     entry point
  styles.css   all styling
```
