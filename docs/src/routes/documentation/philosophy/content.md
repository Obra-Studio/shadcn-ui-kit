# A stance on UI kits

First of all I’ve always found UI kits a bit weird: if you have the ability to design, why don’t you design the kit yourself?

Over time, I realised a few things:

- I realised that not everybody has the ability to design a UI kit themselves, so for them, it can be handy to put together a quick interface.
- It really does save you time if you don’t have to create a complex kit yourself
- The closeness to a dev framework has a lot of benefits when actually developing apps.

Design UI kits tend to be overcomplicated. They want to support everything and in the process they sometimes make it harder for a non-designer to actually put things together.

As Obra, we decided the balance had to be found between replicating the source framework (in this case shadcn/ui) and customisability. You will find that, within the philosophy of this kit, it is rather easy to customize.

## How our stance evolved during this project

When we designed this kit, we initially had a philosophy of “do more with less”: we only shipped the colors that were used, we only had 20 or so icons in the kit (the ones actually used) and no dark mode on purpose.

Based on the feedback of the community, we realised that it’s better to be more feature complete. Over the 0.2.0-0.5.0 releases we gradually added features:

* August 18, 2025 - 0.2.0 - We learned from the community that they would like all Lucide icons and all Tailwind colors straight-up in the library file instead of dealing with the add-ons.
* September 2, 2025 - 0.3.0 - Added Propstar based docs for all components.
* September 4, 2025 - 0.4.0 - We added variables for border radii and spacing. Check out our community profile [@obrastudio](https://www.figma.com/@obrastudio) to find all new plugins to help you keep your border radii and spacing consistent (as well as a general shadcn/ui tools plugin, see our blog post).
* September 8, 2025 - 0.5.0 - The Obra shadcn/ui kit now supports dark mode and theming. We've added variables for light/dark mode (and subsequently, themes) to all components.

[Read the full changelog](/changelog)

## Design changes to shadcn

- We try to be 100% accurate with shadcn/ui. If you find any error, please let us know.
- Color-wise we specifically reference the Tailwind colors in shadcn, not the theming colors (see technical comments)
- When a change to shadcn is made, we try to follow it, see the changelog for updates.
