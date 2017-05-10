import visit from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import getDocUrl from './getDocUrl';

const slugger = new GithubSlugger();

/*
 * Add IDs to headings
 */
export function heading() {
	return ast => visit(ast, 'heading', node => {
		const text = node.children.map(child => child.value).join('');
		node.data = {
			hProperties: {
				id: slugger.slug(text),
			},
		};
	});
}

/*
 * Fix links: Configuration.md → docs/configuration
 */
export function link() {
	return ast => visit(ast, 'link', node => {
		if (node.url.match(/^\w+\.md/)) {
			node.url = `/${getDocUrl(node.url)}`;
		}
	});
}

/*
 * > **Note:**
 * > **Warning:**
 */
export function note() {
	return ast => visit(ast, 'blockquote', node => {
		node.children.forEach(child => {
			const strong = child && child.children && child.children[0];
			const type = strong && strong.children && strong.children[0] && strong.children[0].value;
			if (type === 'Note:' || type === 'Warning:') {
				node.type = 'div'; // blockquote → div
				child.children.shift();  // Remove **Note:**
				child.data = {
					hProperties: {
						className: type === 'Note:' ? 'text-note' : 'text-warning',
					},
				};
			}
		});
	});
}
