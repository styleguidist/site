import Block from 'tamia/lib/components/Block';

export default function InAction({ features }, children, { typo }) {
	return (
		<Block bottom={2}>
			<ul>
				{features.map(feature => <li>{typo(feature)}</li>)}
			</ul>
		</Block>
	);
}
