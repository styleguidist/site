import visit from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import getDocUrl from './getDocUrl';

const slugger = new GithubSlugger();

/*
 * Add IDs and links to headings
 */
export function heading() {
	return ast =>
		visit(ast, 'heading', node => {
			const text = node.children.map(child => child.value).join('');
			const slug = slugger.slug(text);

			// Add ID
			node.data = {
				hProperties: {
					id: slug,
				},
			};

			if (node.depth === 1) {
				return;
			}

			// Add a link
			const { children } = node;
			node.children = [
				{
					type: 'link',
					url: `#${slug}`,
					children,
				},
			];
		});
}

/*
 * Make anchor links consistent inside files.
 */
export function resetSluggerBetweenFiles() {
	return ast =>
		visit(ast, 'root', () => {
			slugger.reset();
		});
}

/*
 * Fix links: Configuration.md → docs/configuration
 */
export function link() {
	return ast =>
		visit(ast, 'link', node => {
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
	return ast =>
		visit(ast, 'blockquote', node => {
			node.children.forEach(child => {
				const strong = child && child.children && child.children[0];
				const type =
					strong &&
					strong.children &&
					strong.children[0] &&
					strong.children[0].value;
				if (type === 'Note:' || type === 'Warning:') {
					node.type = 'div'; // blockquote → div
					child.children.shift(); // Remove **Note:**
					child.data = {
						hProperties: {
							className: type === 'Note:' ? 'text-note' : 'text-warning',
						},
					};
				}
			});
		});
}
