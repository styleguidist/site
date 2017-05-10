import {
	og,
	meta,
	getFirstParagraph,
} from 'fledermaus/lib/util';

/* eslint-disable no-invalid-this */

// OG, Twitter Card and other meta tags
export function getMetaTags() {
	const image = '/images/workbench.png';
	const title = this.getPageTitle({ suffix: false });

	let description = this.description;
	if (!description) {
		if (this.content) {
			const firstParagraph = getFirstParagraph(this.content);
			if (firstParagraph) {
				description = firstParagraph;
			}
		}
		if (!description) {
			description = this.option('description');
		}
	}

	return [
		meta('viewport', 'width=device-width, initial-scale=1.0'),
		meta('description', description),
		og('og:type', this.url === '/' ? 'website' : 'article'),
		og('og:title', title),
		og('og:url', this.absolutizeUrl(this.url)),
		og('og:site_name', this.option('title')),
		og('og:description', description),
		og('og:image', this.absolutizeUrl(image)),
		meta('twitter:card', 'summary'),
		meta('twitter:title', title),
		meta('twitter:description', description),
		meta('twitter:creator', '@' + this.option('twitter')),
	];
}
