export interface BlogFrontmatter {
	title: string;
	date: string;
	author: string;
	tags?: string[];
}

export interface BlogMetadata {
	title: string;
	slug: string;
	author: string;
	date: Date;
	tags: string[];
	content: string;
}
