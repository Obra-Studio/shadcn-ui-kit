export interface Video {
    id: string;
    title: string;
    date: string;
    description: string;
    dateObj: Date;
}

const videoData = [
    {
        id: "oz-HOJTkHns",
        title: "Obra shadcn/ui for Figma - 1.5.0 release",
        date: "February 6, 2026",
        description: "In this video, Obra studio founder Johan walks through the changes in the Obra shadcn/ui 1.5.0 kit. We explain the new variable logic for brand variables, as well as changes to the shadcn/ui tools."
    },
    {
        id: "VS3eoq4gcz8",
        title: "Obra shadcn/ui for Figma - 1.4.0 release - kit to tailwind/shadcn/ui code plugin demo",
        date: "January 14, 2026",
        description: "This video shows how the CSS export plugin for the Figma shadcn/ui kit works. This plugin allows you to export CSS code for use in your shadcn/ui development projects."
    },
    {
        id: "orcE5swmoEg",
        title: "Obra shadcn/ui kit for Figma: multi theme improvements / demo of Obra Batch Mode Switcher",
        date: "January 14, 2026",
        description: "This video shows a theme being created, and the Obra batch mode switcher plugin being used to quickly change the look and feel of an existing screen in a non-destructive manner."
    },
    {
        id: "XDbVf96rR68",
        title: "Obra shadcn/ui kit: 1.2.0 updates - New organisation + Theming updates",
        date: "November 22, 2025",
        description: "In this video, we go through the organizational and theme-related changes in the 1.2.0 version of the Obra shadcn/ui kit for Figma. You can find duplicate the kit for free via Figma community. "
    },
    {
        id: "R2sW2iKpCxY",
        title: "Upgrading the Obra shadcn/ui kit",
        date: "October 15, 2025",
        description: "Upgrading Figma libraries is not for the faint of heart. In this video, we point out a few strategies that we use to try and make it happen. There is a manual way which involves deprecating components as well as swapping them out manually, and there is a more automatic way which involves the swap library function in Figma. "
    },
    {
        id: "AFIQXSJiv1U",
        title: "Obra shadcn/ui - Tips for editing rather complex components in Figma",
        date: "September 26, 2025",
        description: "I use our Obra shadcn/ui kit and show an example of editing an already complex component, to demonstrate how to make an addition to the kit."
    },
    {
        id: "as93OVoqwfw",
        title: "Obra shadcn/ui 0.5.0: Light/dark mode, theming support and example screens",
        date: "September 11, 2025",
        description: "We've reached a nice milestone with 10,000 duplicates for our kit. In the latest 0.5.0 version we added light and dark mode, theming support and example screens."
    },
    {
        id: "pEBHW6JZ7YY",
        title: "0.4.0 version of the Obra shadcn/ui kit: border radii & spacing variables",
        date: "September 4, 2025",
        description: "We released a new minor version of our kit, containing border radii and spacing variables. We also explain how two new plugins help you stay consistent."
    },
    {
        id: "5KZFwtLvZ6Q",
        title: "Obra Shadcn/ui tools plugin",
        date: "September 2, 2025",
        description: "We created a plugin that makes it easier to work with the kit in combination with the Propstar plugin."
    },
    {
        id: "WxItXWrCnV0",
        title: "Figma Obra shadcn/ui 0.2.0 update: icons and colors now bundled",
        date: "August 18, 2025",
        description: "We listened to the community and bundled all Tailwind colors and all Lucide icons inside of the kit. The add-on files are thus deprecated. This makes the kit heavier on initial publish, but provides more options to design with by default."
    },
    {
        id: "j5nzQ5YONd4",
        title: "Obra shadcn/ui - Pick and choose components, then customize",
        date: "July 9, 2025",
        description: "We show you a design, where we picked two components from our shadcn/ui kit and customized one of them. The kit is just handy to nearby, to quickly drop a component in when you're designing and stay in your flow."
    },
    {
        id: "yQ3BbcF0rWg",
        title: "The Obra shadcn/ui kit in practice: making a start in our planner project",
        date: "July 8, 2025",
        description: "In this video, we create a team member management screen using the Obra shadcn/ui kit in Figma. This video serves as an example of how to use our Figma community kit in practice."
    },
    {
        id: "ticGL4n1uMs",
        title: "Friday update",
        date: "June 20, 2025",
        description: "Just a small update"
    },
    {
        id: "5vzBZj3vck4",
        title: "Release video",
        date: "June 12, 2025",
        description: "Introducing the kit & the public beta."
    },
    {
        id: "bVqYV1G6IOA",
        title: "Getting started with your design system in Figma using the Obra shadcn/ui kit",
        date: "June 12, 2025",
        description: "A video that shows how easy it is to customize the kit."
    }
];

export const videos: Video[] = videoData
    .map(video => ({
        ...video,
        dateObj: new Date(video.date)
    }))
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());