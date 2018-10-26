import kebabCase from 'lodash/kebabCase';

// Configuration.md#theme → docs/configuration.html#theme
export default function getDocUrl(url) {
	return `docs/${url.replace(
		/^\/?(\w+)(?:\.md)?/,
		(_, $1) => `${kebabCase($1)}.html`
	)}`;
}
