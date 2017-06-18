import {
	start,
	loadConfig,
	loadSourceFiles,
	generatePages,
	savePages,
	createMarkdownRenderer,
	createTemplateRenderer,
	helpers as defaultHelpers,
} from 'fledermaus';
import getDocUrl from './util/getDocUrl';
import * as customHelpers from './util/helpers';
import * as remarkPlugins from './util/remark';

start('Building site...');

const config = loadConfig('config');
const options = config.base;

const helpers = { ...defaultHelpers, ...customHelpers };

const renderMarkdown = createMarkdownRenderer({
	plugins: Object.values(remarkPlugins),
});
const renderTemplate = createTemplateRenderer({
	root: options.templatesFolder,
});

const loadFrom = (dir, extras = {}) =>
	loadSourceFiles(dir, options.sourceTypes, {
		renderers: {
			md: renderMarkdown,
		},
		...extras,
	});

const documents = loadFrom(options.sourceFolder);

// Documentation
const docs = loadFrom(options.docsFolder, {
	fieldParsers: {
		layout: () => 'Page',
		// Store original file for edit on GitHub links
		fileName: (_, attrs) => attrs.sourcePath,
		// GettingStarted.md -> docs/getting-started
		sourcePath: url => getDocUrl(url).replace('.html', '.md'),
		// /GettingStarted -> /docs/getting-started
		url: url => `/${getDocUrl(url)}`,
		// Read title from content HTML
		title: (_, attrs) => attrs.content.match(/<h1[^>]*>(.*?)<\/h1>/)[1],
		// Remove title from content HTML
		content: content => content.replace(/<h1[^>]*>.*?<\/h1>\s*/, ''),
	},
});
documents.push(...docs.filter(d => d.url !== '/docs/readme'));

const pages = generatePages(documents, config, helpers, { jsx: renderTemplate });

savePages(pages, options.publicFolder);
