import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
// import Head from '../components/head';
import SEO from '../components/seo';

import Menu from '../components/menu';
import PostsList from '../components/postsList';



const BlogPage = (props) => {


	return (
		<Theme>
			<Layout>
				<SEO title="blog" />
				<Menu leftPosition="3em" />
				<PostsList />
			</Layout>
		</Theme>
	);
};

export default BlogPage;
