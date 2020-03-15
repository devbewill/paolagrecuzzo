import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import Intro from '../components/intro';

const IndexPage = (props) => {
	return (
		<Theme>
			<Layout>
				<Head title="Home" />
				<Intro />
			</Layout>
		</Theme>
	);
};

export default IndexPage;

