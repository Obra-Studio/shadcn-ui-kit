import { format } from 'date-fns';

export function formatDate(date: Date | string) {
	// If it's a string like '2026-01-14', parse it as a local date to avoid timezone shift
	if (typeof date === 'string') {
		const [year, month, day] = date.split('-').map(Number);
		date = new Date(year, month - 1, day);
	}
	return format(date, 'MMMM do, yyyy');
}

export function isPostPublished(post: {
	date: string | number | Date;
}): boolean {
	const gmtMinus6Offset = 3600000 * 6; // 6 hours in milliseconds
	const currentDateGMTMinus6 = new Date(Date.now() - gmtMinus6Offset);
	const publishDateGMTMinus6 = new Date(
		new Date(post.date).getTime() - gmtMinus6Offset,
	);

	return publishDateGMTMinus6 <= currentDateGMTMinus6;
}
