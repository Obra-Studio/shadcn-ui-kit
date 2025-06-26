import { Feed } from 'feed';
import { posts } from '../blog/posts';
import { isPostPublished } from '$lib/blog/utils';

export async function GET() {
	const feed = new Feed({
		title: 'Obra shadcn/ui blog',
		description: 'Updates and news about Obra shadcn/ui.',
		id: 'https://shadcn.obra.studio/',
		link: 'https://shadcn.obra.studio/',
		language: 'en',
		image: 'https://shadcn.obra.studio/favicon.png',
		favicon: 'https://shadcn.obra.studio/favicon.ico',
		copyright: `All rights reserved ${new Date().getFullYear()}, Obra Studio`,
		updated: new Date(
			Math.max(...posts.map((post) => post.date.getTime())),
		),
		feedLinks: {
			rss: 'https://shadcn.obra.studio/rss.xml',
		},
	});

	const publishedPosts = posts.filter(isPostPublished);

	for (const post of publishedPosts) {
		feed.addItem({
			title: post.title,
			id: `https://shadcn.obra.studio/blog/${post.slug}`,
			link: `https://shadcn.obra.studio/blog/${post.slug}`,
			description: post.content, // Use the full content here
			content: post.content, // Include the full content here as well
			date: post.date,
			author: [{ name: 'Obra Studio' }],
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/rss+xml',
		},
	});
}
