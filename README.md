# AFRAME Custom Template with Astro

This repository provides a custom AFRAME template that utilizes Astro for building WebXR experiences.

## Getting Started

There are two ways to get started with this template:

### Clone the Repository:

```bash
git clone https://github.com/samu01tech/aframe-astro-template.git
```

### Use the GitHub Template:

Click on the "`Use this template`" button on the GitHub repository homepage. This will create a new repository based on this template in your GitHub account.

## Project Structure

This template follows a basic Astro project structure:

```
src/: Contains all your Astro components and pages.
public/: Houses static assets like images, models, and sounds.
```

## Using Fragments

Astro components allow you to define fragments for specific sections of your HTML. This template utilizes two fragments:

`<Fragment slot="head">`: This fragment is placed within the <head> tag of your HTML and is ideal for including scripts, styles, and other metadata.

`<Fragment slot="assets">`: This fragment goes inside the <body> tag and is suitable for adding assets like 3D models or textures directly into your scene.

See the `src/pages/index.astro` file for an example of how these fragments are used.

```bash
bun astro dev
```

This will launch the development server at http://localhost:4321 by default.

## Additional Notes
This is a basic template to get you started with AFRAME and Astro. You can customize it further by adding your own Astro components and A-Frame elements.

Refer to the official Astro documentation https://astro.build/ for more details on Astro components and functionalities.

The AFRAME documentation https://aframe.io/ provides a comprehensive guide on building WebXR experiences using A-Frame.
