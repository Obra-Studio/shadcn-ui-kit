import { posts } from './blog/posts';
import { videos } from './documentation/videos/videos';
import { isPostPublished } from '$lib/blog/utils';
import { dev } from '$app/environment';

export async function load() {
	const filteredPosts = dev
		? posts // Show all posts in dev mode
		: posts.filter(isPostPublished);
	
	const recentPosts = filteredPosts.slice(0, 3);
	const recentVideos = videos.slice(0, 2);
	
	return {
		recentPosts,
		recentVideos
	};
}