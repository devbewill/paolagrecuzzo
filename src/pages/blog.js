import React from 'react';
import { graphql } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import PostsList from '../components/postsList';


const BlogPage = (props) => {


	return (
		<Theme>
			<Layout>
				<Head title="Home" />
				<PostsList />
			</Layout>
		</Theme>
	);
};

export default BlogPage;
