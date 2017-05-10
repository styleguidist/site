import Block from 'tamia/lib/components/Block';
import s from './SmallFeatures.pcss';

export default function InAction({ features }, children, { typo }) {
	return (
		<Block bottom={2} class={s.root}>
			<ul>
				{features.map(feature => (
					<li>{typo(feature)}</li>
				))}
			</ul>
		</Block>
	);
}
