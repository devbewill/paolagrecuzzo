import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';

const IndexPage = (props) => {
	return (
		<Theme>
			<Layout>
				<SEO title="home" />
				<Intro />
			</Layout>
		</Theme>
	);
};

export default IndexPage;

