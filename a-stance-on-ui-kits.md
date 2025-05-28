# A stance on UI kits

First of all I’ve always found UI kits a bit weird: if you have the ability to design, why don’t you design the kit yourself?

Over time, I realized 2 things:

* I realized that not everybody has the ability to design a UI kit themselves, so for them, it can be handy to put together a quick interface.
* The closeness to a dev framework has a lot of benefits when actually developing apps

Design UI kits tend to be overcomplicated. They want to support everything and in the process they sometimes make it harder for a non-designer to actually put things together.

This leads to a weird conundrum where the people who need the kits the most, can’t use them.

In a recent project, a colleague of mine used a commercial shadcn kit that was overcomplicated and had 5,000 or more tokens. It took more than 5 minutes to publish and was cumbersome to use, even on an M3 Mac.

It frustrated me - why would you do that? The kit promised customizability but it was not customizable at all.

Even with my profile, being a Figma expert, giving Figma classes, knowing every deep feature of Figma, I could not properly customize it without destroying the kit itself.

If I would try to change something, something would go horribly wrong.

I decided the balance had to be found between replicating the source framework (in this case [shadcn/ui](https://v4.shadcn.com/)) and customizability.