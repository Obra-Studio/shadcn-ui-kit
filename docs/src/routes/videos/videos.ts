export interface Video {
    id: string;
    title: string;
    date: string;
    description: string;
    dateObj: Date;
}

const videoData = [
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