import Base from './Base';
import DocsButtons from './components/DocsButtons';
import Examples from './components/Examples';
import Features from './components/Features';
import SmallFeatures from './components/SmallFeatures';
import Splash from './components/Splash';

export default function({ title, subtitle, features, smallFeatures, examples }) {
	return (
		<Base>
			<Splash title={title} subtitle={subtitle} />
			<Features features={features} />
			<SmallFeatures features={smallFeatures} />
			<Examples examples={examples} />
			<DocsButtons />
		</Base>
	);
}
