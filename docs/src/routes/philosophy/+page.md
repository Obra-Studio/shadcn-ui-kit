# The philosophy

# A stance on UI kits

First of all I’ve always found UI kits a bit weird: if you have the ability to design, why don’t you design the kit yourself?

Over time, I realised a few things:

* I realised that not everybody has the ability to design a UI kit themselves, so for them, it can be handy to put together a quick interface.
* It really does save you time if you don’t have to create a complex kit yourself
* The closeness to a dev framework has a lot of benefits when actually developing apps.

Design UI kits tend to be overcomplicated. They want to support everything and in the process they sometimes make it harder for a non-designer to actually put things together.

As Obra, we decided the balance had to be found between replicating the source framework (in this case shadcn/ui) and customisability. You will find that, within the philosophy of this kit, it is rather easy to customize.

You might also find it lacks some features you might expect such as theming variables and dark mode. This was done on purpose to keep things editable (Read more in the technical comments)

## Design changes to shadcn

* We try to be 100% accurate with shadcn/ui. If you find any error, please let us know.
* Color-wise we specifically reference the Tailwind colors in shadcn, not the theming colors (see technical comments)
* When a change to shadcn is made, we try to follow it, see the changelog for updates.