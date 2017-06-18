export default function({ to }) {
	return <meta http-equiv="refresh" content={`0; url=${to}`} />;
}
