import Block from 'tamia/lib/components/Block';
import Icon from 'tamia/lib/components/Icon';
import DocsButtons from './DocsButtons';
import s from './Splash.pcss';

export default function Splash({ title, subtitle }) {
	return (
		<Block component="header" bottom={8} class={s.root}>
			<div class={s.logo}>
				<Icon name="logo" />
			</div>
			<h1 class={s.text}>
				<div class={s.title}>{title}</div>
				<div class={s.subtitle}>{subtitle}</div>
			</h1>
			<DocsButtons />
		</Block>
	);
}
