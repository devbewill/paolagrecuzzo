import React from 'react';
import { graphql } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import Menu from '../components/menu';
import PostsList from '../components/postsList';


const BlogPage = (props) => {


	return (
		<Theme>
			<Layout>
				<Head title="Blog" />
				<Menu />
				<PostsList />
			</Layout>
		</Theme>
	);
};

export default BlogPage;
