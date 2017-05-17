import Base from './Base';
import DocsButtons from './components/DocsButtons';
import Examples from './components/Examples';
import Features from './components/Features';
import Splash from './components/Splash';

export default function({ title, subtitle, features, examples }) {
	return (
		<Base>
			<Splash title={title} subtitle={subtitle} />
			<Features features={features} />
			<Examples examples={examples} />
			<DocsButtons />
		</Base>
	);
}
