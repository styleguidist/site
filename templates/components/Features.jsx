import Block from 'tamia/lib/components/Block';
import Layout from 'tamia/lib/components/Layout';
import { Beta } from 'tamia/lib/components/Text';
import s from './Features.pcss';

export default function Features({ features }, children, { typo, typoTitle }) {
	return (
		<section>
			{features.map(({ caption, body, images }) => (
				<Block bottom={8} class={s.item}>
					<Layout>
						<Layout sm={1 / 3} class={s.body}>
							<Beta class={s.heading}>{typoTitle(caption)}</Beta>
							<ul>
								{body.map(text => <li class={s.listItem}>{typo(text)}</li>)}
							</ul>
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
