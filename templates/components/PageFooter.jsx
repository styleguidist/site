import Block from 'tamia/lib/components/Block';
import Link from 'tamia/lib/components/Link';
import s from './PageFooter.pcss';

const getUrl = fileName =>
	`https://github.com/styleguidist/react-styleguidist/tree/master/docs/${fileName}`;

export default function PageFooter({ fileName }) {
	return (
		<Block bottom={6} class={s.root}>
			Caught a mistake or want to improve the documentation?{' '}
			<Link href={getUrl(fileName)}>Edit this page on GitHub</Link>!
		</Block>
	);
}
