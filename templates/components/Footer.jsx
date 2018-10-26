import Container from 'tamia/lib/components/Container';
import Link from 'tamia/lib/components/Link';
import s from './Footer.pcss';

const CONTRIBUTORS_URL =
	'https://github.com/styleguidist/react-styleguidist/graphs/contributors';

export default function Footer() {
	return (
		<div>
			<Container component="footer" class={s.root}>
				Made with coffee in Berlin by{' '}
				<Link href="http://sapegin.me/">Artem Sapegin</Link> and{' '}
				<Link href={CONTRIBUTORS_URL}>amazing contributors</Link>. Logo:{' '}
				<Link href="http://okonet.ru/">Andrey Okonetchnikov</Link> and{' '}
				<Link href="http://iamsaravieira.com/">Sara Vieira</Link>. Hosting:{' '}
				<Link href="https://www.netlify.com/">Netlify</Link>.{' '}
				<Link href="https://github.com/styleguidist/site">Site sources</Link>
			</Container>
			<script
				src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"
				onload={`
					javascript:docsearch({
						apiKey: '0bd0dc976499f3a333c9d26416b4fee1',
						indexName: 'react_styleguidist',
						inputSelector: '#searchbox'
			        })
			    `}
			/>
		</div>
	);
}
