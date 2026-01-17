# Maintenance

## Unused Code Analysis

Last scanned: 2026-01-16

### Unused Component Files (5)

| File | Lines |
|------|-------|
| `docs/src/lib/components/HeaderNavItem.svelte` | 21 |
| `docs/src/lib/components/AdvantageList.svelte` | 10 |
| `docs/src/lib/components/AdvantageListItem.svelte` | 7 |
| `docs/src/lib/components/TestimonialSlider.svelte` | 68 |
| `docs/src/lib/components/HeroImage.svelte` | 12 |

None of these are imported anywhere in the codebase.

### Orphaned Routes (1)

- `docs/src/routes/_backup/+page.svelte` (413 lines) - Underscore prefix makes it inaccessible in SvelteKit

### Unused CSS Classes

In `docs/src/app.css`:

- `.container--small` (line 77-79)
- `.container--centered` (line 81-83)
- `.intro` (line 85-87)

### Dead Code in Home Page

In `docs/src/routes/+page.svelte`:

- `mobileMenuOpen` state variable (line 162) - declared but never used
- `plugins` array (lines 79-112) - defined for commented-out section
- Commented-out Plugins Section (lines 352-377)
- Commented-out Case Studies Section (lines 508-525)

### Recommendations

**Safe to remove immediately:**

1. The 5 unused component files (~118 lines)
2. The `_backup` route directory (~413 lines)
3. Unused CSS classes

**Review before removing:**

- Commented-out sections and the `plugins` array - decide if these are planned features or dead code
