import Container from 'tamia/lib/components/Container';
import Link from 'tamia/lib/components/Link';
import s from './Footer.pcss';


export default function Footer() {
  return (
    <div>
      <Container component="footer" class={s.root}>
        Made with coffee in Berlin by{' '}
        <Link href="http://sapegin.me/">Artem Sapegin</Link> and
        <Link href="https://github.com/styleguidist/react-styleguidist/graphs/contributors">
          amazing contributors
        </Link>. Logo by{' '}
        <Link href="http://okonet.ru/">Andrey Okonetchnikov</Link> and{' '}
        <Link href="http://iamsaravieira.com/">Sara Vieira</Link>. Hosted
        on <Link href="https://www.netlify.com/">Netlify</Link>.
        <Link href="https://github.com/styleguidist/site">
          Site sources
        </Link>
      </Container>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"
      />
      <script
		    src="//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js" onload={`
		        javascript:docsearch({
		          apiKey: '0bd0dc976499f3a333c9d26416b4fee1',
							indexName: 'react_styleguidist',
							inputSelector: '#searchbox',
		          debug: false
		        })
		    `}
		></script>
			<svg xmlns="http://www.w3.org/2000/svg">
				<symbol id="search-icon" width="40" height="40" viewBox="0 0 40 40">
					<path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.33 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.808 29.012zm-10.427.627c7.32 0 13.26-5.94 13.26-13.26 0-7.325-5.94-13.26-13.26-13.26-7.325 0-13.26 5.935-13.26 13.26 0 7.32 5.935 13.26 13.26 13.26z" fill-rule="evenodd"/>
				</symbol>
			</svg>
    </div>
  );
}