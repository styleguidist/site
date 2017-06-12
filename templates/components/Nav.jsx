import HeaderButton from './HeaderButton';
import SearchBox from './SearchBox';
import s from './Nav.pcss';

export default function Header({ items }) {
	return (
		<nav class={s.navigationElement}>
			<SearchBox />
			<ul class={s.list}>
				{items.map(({ caption, href }) => (
					<li class={s.item}>
						<HeaderButton href={href}>{caption}</HeaderButton>
					</li>
				))}
			</ul>
		</nav>
	);
}
