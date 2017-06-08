import Container from 'tamia/lib/components/Container';
import Link from 'tamia/lib/components/Link';
import s from './Footer.pcss';

const script = document.createElement('script');
script.src = '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js';
script.async = 1;
script.onload = () => {
  const search = docsearch({
    appId: 'ABW54LKY2F',
    apiKey: '082daece8c47561874e17f46ceb79669',
    indexName: 'React_Styleguidist',
    inputSelector: '#searchbox',
    debug: false,
  });
};

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
      <script>{script}</script>
    </div>
  );
}