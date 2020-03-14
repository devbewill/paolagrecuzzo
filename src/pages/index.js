import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Theme from '../styles/Theme';
import { Container, ImageWrapper } from '../styles/styledComponent';
import Layout from '../components/layout';
import Head from '../components/head';
import Intro from '../components/intro';
import Timeline from '../components/timeline';
import Quote from '../components/quote';
// import LastWorks from '../components/lastWorks';
import PostsList from '../components/postsList';

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

export const query = graphql`
	query {
		intersection: file(relativePath: { eq: "intersection.png" }) {
			childImageSharp {
				fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				}
			}
		}
		cycle: file(relativePath: { eq: "cycle.png" }) {
			childImageSharp {
				fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				}
			}
		}
		avatar: file(relativePath: { eq: "steperelli.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
