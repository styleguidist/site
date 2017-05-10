import Block from 'tamia/lib/components/Block';
import Layout from 'tamia/lib/components/Layout';
import s from './SmallFeatures.pcss';

export default function SmallFeatures({ features }, children, { typo }) {
	return (
		<Block bottom={6}>
			<Layout component="ul" class={s.list}>
				{features.map(feature => (
					<Layout component="li" sm={1 / 2} md={1 / 3} class={s.item}>{typo(feature)}</Layout>
				))}
			</Layout>
		</Block>
	);
}
