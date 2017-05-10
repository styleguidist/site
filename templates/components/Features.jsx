import Block from 'tamia/lib/components/Block';
import Layout from 'tamia/lib/components/Layout';
import { Gamma } from 'tamia/lib/components/Text';
import s from './Features.pcss';

export default function Features({ features }, children, { typo, typoTitle }) {
	return (
		<section>
			{features.map(({ caption, text, images }) => (
				<Block bottom={8} class={s.item}>
					<Layout>
						<Layout sm={1 / 3} class={s.body}>
							<Gamma class={s.heading}>{typoTitle(caption)}</Gamma>
							<div>{typo(text)}</div>
						</Layout>
						{images.map(image => ( // 1 or 2 images — 2/3 or 1/3 each
							<Layout sm={(3 - images.length) / 3}>
								<img class={s.image} src={image} />
							</Layout>
						))}
					</Layout>
				</Block>
			))}
		</section>
	);
}
