import Block from 'tamia/lib/components/Block';
import Container from 'tamia/lib/components/Container';
import HeaderButton from './HeaderButton';
import Nav from './Nav';
import s from './Header.pcss';

export default function Header(props, children, { option }) {
	return (
		<Block component="header" bottom={4} class={s.root}>
			<Container class={s.container}>
				<div class={s.logo}>
					<HeaderButton href="/">{option('title')}</HeaderButton>
				</div>
				<nav class={s.nav}>
					<Nav items={option('menu')} />
				</nav>
			</Container>
		</Block>
	);
}
