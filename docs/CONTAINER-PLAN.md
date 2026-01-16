# Container Width System

## Overview

The container system uses an outer/inner pattern:
- **Outer elements** stretch full width (for backgrounds)
- **Inner `.container`** constrains content width

## Container Classes

| Class | Max Width | Use Case |
|-------|-----------|----------|
| `.container` | 1280px | Default content width |
| `.container--narrow` | 700px | Text-heavy pages (blog, changelog, authors) |
| `.section` | 1280px | Homepage sections (includes padding) |
| `.main-content` | none | Grows to fill available space |

## Usage by Route

| Route | Container | Notes |
|-------|-----------|-------|
| `/` (Homepage) | `.section` | Each section is self-contained with max-width |
| `/documentation/*` | `.container` | Wraps sidebar + content |
| `/blog` | `.container.container--narrow` | Narrow for readability |
| `/changelog` | `.container.container--narrow` | Narrow for readability |
| `/authors` | `.container.container--narrow` | Narrow for readability |

## Pattern for Full-Width Backgrounds

```html
<!-- Outer stretches full width for background -->
<footer class="bg-muted w-full">
  <!-- Inner container constrains content -->
  <div class="container py-20">
    <!-- Content here -->
  </div>
</footer>
```

## CSS Definitions

```css
.container {
  @apply mx-auto w-full px-4 md:px-6 lg:px-8;
  max-width: 1280px;
}

.container--narrow {
  max-width: 700px;
}

.section {
  @apply flex flex-col items-center gap-6 py-12 px-4 md:px-6 lg:px-8 md:py-20 mx-auto w-full;
  max-width: 1280px;
}

.main-content {
  @apply grow-1 w-full;
}
```
