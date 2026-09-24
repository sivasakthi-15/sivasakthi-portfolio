# Sivasakthi Ramasamy — Portfolio

A premium, static personal portfolio for an AI & Data Science Engineer. Built for direct GitHub Pages deployment with no backend.

## Features

- Dark/light theme with saved preference
- Responsive sticky navigation, scroll progress, active-section state, and reduced-motion support
- Flagship AUTOMUS and CareerLens AI project storytelling
- Searchable, filterable certificate vault and certificate details modal
- Resume viewer and EmailJS-ready recruiter contact form

## Tech stack

HTML5, CSS3, JavaScript ES6+, Bootstrap 5, AOS, GSAP (loaded for optional motion expansion), Font Awesome, and EmailJS.

## Structure

```
index.html
css/                 # visual system and responsive rules
js/                  # theme, certificates, contact form, page interaction
assets/images/       # add sivasakthi.jpg here
assets/projects/     # add project screenshots/diagrams here
assets/certificates/ # add certificate PDFs here
assets/resume/       # add Sivasakthi-Ramasamy-Resume.pdf here
```

## Local preview

Open `index.html` in a browser, or use the VS Code Live Server extension. No build step is required.

## Add personal assets

1. Replace the hero placeholder with your photograph. Update the `.portrait-placeholder` element in `index.html` to an `<img src="assets/images/sivasakthi.jpg" ...>`.
2. Add project screenshots to `assets/projects/` and replace the visual placeholders.
3. Put your resume at `assets/resume/Sivasakthi-Ramasamy-Resume.pdf`.
4. Add certificate PDF files to `assets/certificates/`, then add their title/category/details in `js/certificates.js`.

## Configure EmailJS

1. Create an EmailJS account and an email service that sends to `sivasakthiramasamy03@gmail.com`.
2. Make a template that uses `from_name`, `reply_to`, `subject`, and `message`.
3. In `js/contact.js`, replace `YOUR_EMAILJS_PUBLIC_KEY`, `YOUR_EMAILJS_SERVICE_ID`, and `YOUR_EMAILJS_TEMPLATE_ID`.
4. In EmailJS, restrict the allowed origin to your GitHub Pages domain after testing.

## Deploy to GitHub Pages

1. Create a GitHub repository and push these files to its `main` branch.
2. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
3. GitHub will publish the static site. Because all paths are relative, it works on both project and user GitHub Pages sites.
