import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SinglePostExt from './singlePostExt';

const PostsSection = styled.section`
	.postContainer {
		margin-top: 20vh;
		display: flex;
		flex-wrap: wrap;

		@media only screen and (max-width: 550px) {
			margin-top: 10vh;
		}
	}
`;

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
					edges {
						node {
							title
							slug
							source
							day: publishedDate(formatString: "DD")
							month: publishedDate(formatString: "MM")
							year: publishedDate(formatString: "YY")
							tag
							featuredImage {
								fluid(maxWidth: 1200, quality: 90) {
									...GatsbyContentfulFluid_withWebp
								}
							}
							body {
								childMarkdownRemark {
									html
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => (
			<PostsSection>
				{/* <h2>
						<span>in</span>sight
					</h2> */}
				<div className="postContainer">
					{data.allContentfulBlogPost.edges.map((edge, index) => {
						let target, postProps;
						edge.node.source ? (target = edge.node.source) : (target = `/blog/${edge.node.slug}`);

						postProps = {
							slug: `/blog/${edge.node.slug}`,
							imgPost: edge.node.featuredImage.fluid.src,
							externalLink: edge.node.source,
							tags: edge.node.tag,
							title: edge.node.title,
							body: edge.node.body.childMarkdownRemark.html,
							day: edge.node.day,
							month: edge.node.month,
							year: edge.node.year,
							target: target
						};

						return <SinglePostExt key={index} postProps={postProps} />;
					})}
				</div>
			</PostsSection>
		)}
	/>
);
