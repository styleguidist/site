import HeaderButton from './HeaderButton';
import s from './Nav.pcss';

export default function Header({ items }, children, { option }) {
	return (
		<nav>
			<ul>
				{items.map(({ caption, href }) => (
					<li class={s.item}>
						<HeaderButton href={href}>{caption}</HeaderButton>
					</li>
				))}
			</ul>
		</nav>
	);
}
