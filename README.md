# Portfolio — Mohammed Hashmath Ali

Live: https://hashmathali.github.io/PORTFOLIO/

A single-page portfolio in plain HTML, CSS and JavaScript. No framework, no build step, no trackers.

## What is different about it

- **Reading lenses.** A visitor picks *ML research*, *AI products* or *Data & analytics*; the project
  index reorders so the most relevant work is first, unrelated work fades, and the matching skills
  light up. One page serves three kinds of reader.
- **An index, not a card wall.** Projects are a numbered table of contents. Each row opens to what
  was built, how, the stack and working links.
- **Light and dark** from the same stylesheet, following the system setting until toggled.
- Keyboard accessible, respects reduced-motion, fits a 375 px phone without horizontal scroll.

## Editing

All content lives in two arrays at the top of `script.js`:

- `PROJECTS` — title, one-line kind, headline metric, lenses, description, tags, links.
- `SKILLS` — grouped skills, each tagged with the lenses that highlight it.

Education, milestones and certifications are plain HTML in `index.html`.

```bash
python -m http.server 8000   # then open http://localhost:8000
```
