import Block from 'tamia/lib/components/Block';
import Container from 'tamia/lib/components/Container';
import Style from 'tamia/lib/components/Style';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from 'tamia/lib/components/Main';
import '../styles/styles.pcss';

export default function(props, children, { title, pageTitle, option }) {
	return (
		<html lang={option('lang')}>
			<head>
				<meta charset="utf-8" />
				<title>{pageTitle || `${title} — ${option('title')}`}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="description" content={option('description')} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={option('title')} />
				<meta property="og:url" content={option('url')} />
				<meta property="og:site_name" content={option('title')} />
				<meta property="og:description" content={option('description')} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={option('title')} />
				<meta name="twitter:description" content={option('description')} />
				<meta name="twitter:creator" content={`@${option('twitter')}`} />
				<link href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,400i,700" rel="stylesheet" />
				<Style />
			</head>
			<body>
				<Header />
				<Main>
					<Container>
						<Block bottom={4}>
							{children}
						</Block>
					</Container>
				</Main>
				<Footer />
			</body>
		</html>
	);
}
