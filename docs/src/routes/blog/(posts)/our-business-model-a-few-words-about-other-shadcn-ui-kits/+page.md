<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Our business model & a few words about other shadcn/ui kits',
        date: '2025-11-16',
        author: 'Johan Ronsse'
    }
</script>

We provide our [Obra shadcn/ui Figma library](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui) for free to the community.

It is a Figma library that can be used as a base for your [shadcn/ui](https://ui.shadcn.com/)-based projects. Design teams use it to create mock-ups with the official shadcn/ui elements. Some use it as the base for their design system.

We’ve been getting super positive comments about our kit and are happy design teams worldwide are using our kit.  

We initially released this project in June and it’s been growing steadily so far. We’ve been supporting this Figma file with updates over the past few months as it grew to over 19,000 duplicates at the time of writing.

In the kit we support Lucide icons, Tailwind v4 colors, and theming (via a default dark and light mode). All shadcn/ui components are faithfully recreated in the kit.  

When the October update came out to [shadcn/ui](https://ui.shadcn.com/), we jumped on it to provide the necessary updates. We keep our kit up-to-date with shadcn/ui.

When a user reports a bug or problem, we more than often fix it within 24 hours of the report. We provide a public log of issues on [Github](https://github.com/Obra-Studio/shadcn-ui-kit/issues) as well as provide [a place for ideas and discussions](https://github.com/Obra-Studio/shadcn-ui-kit/discussions).

Even though the library is a design file, we treat it as an open source project with a [changelog](https://shadcn.obra.studio/changelog) that uses semantic versioning (insofar that is possible for design work).

## Comparison to other kits

Lately we’ve been getting some questions about how our kits compare to other kits, specifically to commercial kits.

We see the competition heating up in the kit space with new alternatives popping up.  

We see possible clients comparing our kits to some commercial offerings and asking us to compare the kits.  

We understand this is an important business choice when starting a design system project, so we’d like to elaborate on this.

We think our kit definitely stacks up to the paid options, even though it's completely free.

We believe the main benefits that the paid options promote as benefits over our kit are rather limited.

The main benefits we’ve seen promoted so far include design-to-code plugins; automatic theme adaptation to [tweakcn](https://tweakcn.com/) styles; collections of shadcn-based blocks, and a video series teaching how to use the kit.

### Design to code

For design-to-code, we believe [Figma’s official MCP](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) is the go-to solution. We don’t believe individual plugins will match Figma’s native evolution in this space.

### Automatic theme adaptation

We’ve experimented with automatic theme adaption, but we don’t believe tweakcn themes provide enough depth when it comes to branding a UI kit.

The number of variables available in shadcn is limited by default (this is on purpose); the idea that you can fully make it work with those variables is misguided. Just go on tweakcn and look at the actual result of a skin - it's not the result you professionally want.

We prefer customizing the shadcn/ui kit theme to a brand manually based on a client’s branding guidelines. We analyze the client's brand and theme the kit acordingly, providing customizations where appropriate. We provide [consulting and help around this](https://obra.studio/shadcn-ui-kit-customization/).

### Pro blocks

What this feature is: some kits offer ready-made Figma sections, sometimes with a front-end counterpart, often in React.

We think the “pro” blocks option that some kits provide are not exactly the type of design work we want to promote.

Most “pro” blocks we see are blocks for marketing websites (e.g. generic looking pricing sections, call to action sections etc.).

We think shadcn/ui is a great framework for web apps, but using the typical “pro” blocks found for websites in competing kits mostly leads to uninspired design work.

One competitor describes their generic looking pro blocks as “stunning”. The whole point of shadcn/ui is to provide a base for your design work. The choices made are intentionally neutral so that design teams can build on top of it and make their own choices. How could unskinned, basic looking blocks then be stunning? 

However, aisde from my objections, in some cases, using shadcn/ui “pro” type of blocks can be helpful to whip together a quick landing page. Not every project needs a designer. Not every FAQ or pricing section needs to be reinvented in every project.

Our kit has a limited number of examples on the Examples page. We believe more examples can help designers help get more out of the kit.

We aim to expand on the existing examples so kit users have more copy-pastable user interfaces available.

Just like with most things in our kit, I am not the only person deciding about the direction. We take a community-driven approach. We’d like your opinion on also adding landing page and application blocks to our kit.

You can [chime in here](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/79). Are you missing a “pro blocks” feature? What kind of examples are you missing?

### Video tutorials

Lastly, providing video tutorials is a great idea in our opinion, and something we would like to work on towards the future. We already have [videos about our kit](https://shadcn.obra.studio/videos), but they don’t follow a structured learning format. We’ve started planning out a video course on how to use the kit.

However, the backbone of using any Figma library is mostly general Figma knowledge. We offer a commercial [Figma workshop](https://obra.studio/figma-workshop/) where we teach teams how to use Figma, and provide guidance adapted to the designer skill level.

## Our business model

Our business model is selling consulting, design and development projects as an agency.

Promoting our free kit leads to client work for our studio, [Obra Studio](http://obra.studio/).

Currently the kit leads to people being interested in our design services and to actual design projects. We can already attribute a sizable amount of revenue to our kit that we expect to grow.

We’ve made many design systems in the past, either custom or based on other development frameworks such as Material UI. We think that the Obra shadcn/ui file is an example of the type of quality design file we can deliver as a studio. shadcn/ui is not a design system in itself, but can be used as a base for the start of a design system where design and development are based on the same underlying framework.

Given our business model to grow with our agency, we have no plans to make the kit commercial.  

In the future, we plan to:

* track the evolutions in shadcn and update the kit accordingly
* update the kit to support the new featuresin Figma (e.g. the upcoming slot components)
* fix bugs or issues when reported by the community
* continue working on our roadmap of changes
* backport any useful non-client-specific changes we make in our [commercial work with the kit](https://obra.studio/shadcn-ui-kit-customization)
* keep providing a clear changelog

## Hype vs. substance

We’re observing that, in the market for UI kits, there is a lot of “hype’ marketing promising you many things. We don’t believe in baseless claims such as promises as “10x design productivity” or “perfect Figma to code conversion”.

On the design side, we believe if you’re going to do something meaningful with a UI kit like ours, you will still need to put in the hours. To get the best results, you will still need to hire a skilled designer to use the kit as a tool to craft great designs.

On the development end, some competing kit's marketing claims might make you believe you don't need a front-end developer for your project anymore.

Here, we think the evolutions in AI in terms of getting info from Figma files are strong, but still believe that you need a skilled developer for the job as well to make a correct interpretation between design and code.

## Conclusion

We believe our kit stacks up to the competition and is a great option.

With the kit being free, you don’t need to deal with licenses and ever-changing pricing models.  

With the kit having an open source model, you are never locked in. If we make a decision you don’t agree with, you can always fork the kit and continue the work.

It’s up to us to remain a quality choice so there is no need for this.

We invite you to [check out our kit](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui), use it as you please, and if you some help, [we’re here to help as a design & development studio](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui).  
  


