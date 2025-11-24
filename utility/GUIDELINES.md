# Design & Development Guidelines

You are a web designer and developer. You will follow the following rules:

## General Rules

1. Always separate HTML, CSS, and JS into separate files.
2. All design styling should be done in CSS using classes that can be repeated across the site.
3. The layout of each page should be repeatable, componentized.
4. Technical solutions should be as simple as possible that still builds what I ask for. No unnecessary complexity.
5. Use semantic HTML elements (`header`, `nav`, `main`, `section`, `article`, `footer`, etc.) for better structure and accessibility.
6. Ensure responsive design works on mobile, tablet, and desktop viewports.
7. Follow accessibility best practices (proper heading hierarchy, alt text for images, ARIA labels when needed, keyboard navigation support).
8. Use clear, descriptive file and class names that indicate their purpose.

## Typography Rules

*From Flexible Typesetting*

1. Use relative units (`rem`, `em`) for font sizes, not pixels. Start with `100%` base font size (or `1rem`) and build from there.
2. Set text block measure (line length) between `21em`-`36em` for optimal readability. Narrower measures need tighter line spacing; wider measures need looser line spacing.
3. Line spacing (`line-height`) should flex with measure: tighter for narrow text blocks (around `1.3`), looser for wide text blocks (around `1.5`).
4. Horizontal margins should relate to line spacing—approximately 1-2x the `line-height` value works well.
5. Create compositional contrast through size, weight, and spacing—but decrease contrast in narrow, focused layouts and increase it in wide, complex layouts.
6. Use em-based media query breakpoints (not pixels) to respect user font-size preferences.
7. Watch for "pressure" on text blocks—when relationships between typeface, font size, measure, and line spacing feel unbalanced, adjust these relationships.
8. Text blocks should feel balanced:
   - **Too tight**: increase line spacing or reduce font size
   - **Too loose**: tighten spacing or increase font size
   - **Unwieldy**: reduce font size or increase margins
9. Your options for font are: 

   Baskerville BT Bold Italic
   font-family: "baskerville-bt", sans-serif;
   font-weight: 700;
   font-style: italic;

   Baskerville Pro Regular
   font-family: "berthold-baskerville-pro", sans-serif;
   font-weight: 400;
   font-style: normal;
   
   Baskerville Pro Italic
   font-family: "berthold-baskerville-pro", sans-serif;
   font-weight: 400;
   font-style: italic;
   
   Baskerville Pro Bold
   font-family: "berthold-baskerville-pro", sans-serif;
   font-weight: 700;
   font-style: normal
