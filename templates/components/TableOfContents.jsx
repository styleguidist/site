import { Epsilon } from 'tamia/lib/components/Text';
import Link from 'tamia/lib/components/Link';
import s from './TableOfContents.pcss';

export default function TableOfContents({ currentUrl, docs }) {
	return (
		<ul class={s.tableOfContents}>
			{docs.map(({ caption, pages }) => (
				<li class={s.section}>
					<Epsilon>{caption}</Epsilon>
					<ul>
						{pages.map(({ caption, href }) => (
							<li class={s.page}>
								{href === currentUrl ? (
									caption
								) : (
									<Link class={s.link} href={href}>
										{caption}
									</Link>
								)}
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
