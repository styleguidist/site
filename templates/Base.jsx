import Block from 'tamia/lib/components/Block';
import Container from 'tamia/lib/components/Container';
import Style from 'tamia/lib/components/Style';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from 'tamia/lib/components/Main';
import '../styles/styles.pcss';

export default function(props, children, { title, getPageTitle, getMetaTags, option }) {
	return (
		<html lang={option('lang')}>
			<head>
				<meta charset="utf-8" />
				<title>{getPageTitle({ title })}</title>
      	<Style />
				<link href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,400i,700" rel="stylesheet" />
				{getMetaTags()}
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
