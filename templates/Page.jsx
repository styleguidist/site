import { Alpha } from 'tamia/lib/components/Text';
import Block from 'tamia/lib/components/Block';
import Layout from 'tamia/lib/components/Layout';
import TableOfContents from './components/TableOfContents';
import PageFooter from './components/PageFooter';
import Base from './Base';

export default function({ title, content, url, fileName, option, typo, typoTitle }) {
	return (
		<Base>
			<Block bottom={2}>
				<Alpha>{typoTitle(title)}</Alpha>
				<Layout spacious>
					<Layout spacious md={3 / 4} class="text">
						<Block bottom={6}>
							{typo(content)}
						</Block>
						<PageFooter fileName={fileName} />
					</Layout>
					<Layout spacious md={1 / 4}>
						<TableOfContents currentUrl={url} docs={option('docs')} />
					</Layout>
				</Layout>
			</Block>
		</Base>
	);
}
