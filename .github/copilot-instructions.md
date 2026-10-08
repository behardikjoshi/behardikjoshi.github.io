# Copilot Instructions

## Project Structure
- This site uses Angular 17, TypeScript, standalone components, and Angular Router.
- The portfolio is served at `/` by `src/app/components/portfolio/portfolio.component.ts`, with its template and component-scoped styles beside it.
- Portfolio profile data, projects, skills, metrics, and experience are defined in typed arrays and fields in `PortfolioComponent`.
- The `/wedding-invite` route is a separate feature. Do not change it during portfolio work unless requested.
- Global design tokens and base styles live in `src/styles.css`.

## Implementation
- Follow existing Angular patterns and keep changes within the component that owns the behavior.
- Keep TypeScript interfaces, component data, and template bindings in sync.
- Use existing CSS variables and component styles before adding global styles.
- Keep layouts responsive, semantic, keyboard-accessible, and consistent with the current site's visual language.
- Treat resume details, project outcomes, dates, employers, and metrics as factual. Do not invent or inflate claims; ask for missing facts or leave them out.
- Use assets from `src/assets/` and preserve meaningful alternative text for images.

## Validation
- Run `npm run build` after Angular code or template changes.
- Run `npm test -- --watch=false` when behavior changes or tests are added.
- Report checks that could not run and the reason.