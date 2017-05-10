import Button from './Button';
import s from './DocsButtons.pcss';

export default function DocsButtons() {
	return (
		<div class={s.root}>
			<Button href="/docs/getting-started.html">Try it now!</Button>
		</div>
	);
}
