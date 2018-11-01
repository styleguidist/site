import Block from 'tamia/lib/components/Block';
import Container from 'tamia/lib/components/Container';
import Style from 'tamia/lib/components/Style';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from 'tamia/lib/components/Main';
import '../styles/styles.pcss';

export default function(
	props,
	children,
	{ title, getPageTitle, getMetaTags, option }
) {
	return (
		<html lang={option('lang')}>
			<head>
				<meta charset="utf-8" />
				<title>{getPageTitle({ title })}</title>
				<link
					href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,400i,700"
					rel="stylesheet"
				/>
				<Style />
				{getMetaTags()}
				<script src="https://codefund.io/scripts/9d69767e-f9ea-4f8d-8a7e-9606344b9060/embed.js" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
var SeedAndDewConfig = {};
(function() {
  SeedAndDewConfig['adClass'] = "snd-ad";
  SeedAndDewConfig['projectId'] = '7a2cba99-5663-44db-aabd-ca3b5a940f5c';
  SeedAndDewConfig['loadStartTime'] = performance.now();
  SeedAndDewConfig['apiVersion'] = '2018-05-28'
  SeedAndDewConfig['sessionId'] = Math.random().toString(36).substring(2, 15);
  var snd = document.createElement('script');
  snd.type = 'text/javascript';
  snd.async = true;
  snd.src = 'https://www.seedanddew.com/static/embed.min.js';
  (document.getElementsByTagName('head')[0] ||
  document.getElementsByTagName('body')[0]).appendChild(snd);
})();
`,
					}}
				/>
			</head>
			<body>
				<Header />
				<Main>
					<Container>
						<Block bottom={4}>{children}</Block>
					</Container>
				</Main>
				<Footer />
			</body>
		</html>
	);
}
