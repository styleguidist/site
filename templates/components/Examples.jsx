import { Beta } from 'tamia/lib/components/Text';
import Block from 'tamia/lib/components/Block';
import Layout from 'tamia/lib/components/Layout';
import Link from 'tamia/lib/components/Link';
import s from './Examples.pcss';

export default function Examples({ examples }, children, { typo }) {
	return (
		<Block bottom={6}>
			<Beta>See it in action</Beta>
			<Layout component="ul">
				{examples.map(({ caption, href, image }) => (
					<Layout component="li" sm={1 / 2} md={1 / 4} class={s.item}>
						<Link class={s.link} href={href}>
							<img class={s.image} src={image} />
							<div>{typo(caption)}</div>
						</Link>
					</Layout>
				))}
			</Layout>
		</Block>
	);
}
