import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SinglePostInt from './singlePostInt';
import SinglePostExt from './singlePostExt';

const PostsSection = styled.section`
	.postContainer {
		margin-top: 5em;
		display: flex;
		flex-wrap: wrap;
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
							publishedDate(fromNow: true)
							tag
							featuredImage {
								fluid(maxWidth: 600) {
									...GatsbyContentfulFluid_withWebp
								}
							}
							body {
								childMarkdownRemark {
									html
								}
							}
							abstract {
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
			<>
				<PostsSection>
					{/* <h2>
						<span>in</span>sight
					</h2> */}
					<div className="postContainer">
						{data.allContentfulBlogPost.edges.map((edge, index) => {
							if (index < 9) {
								let target, postProps;
								edge.node.source ? (target = edge.node.source) : (target = `/blog/${edge.node.slug}`);

								postProps = {
									slug: `/blog/${edge.node.slug}`,
									imgPost: edge.node.featuredImage.fluid.src,
									externalLink: edge.node.source,
									tags: edge.node.tag,
									title: edge.node.title,
									body: edge.node.body.childMarkdownRemark.html,
									date: edge.node.publishedDate,
									abstract: edge.node.abstract.childMarkdownRemark.html,
									target: target
								};

								return !postProps.externalLink ? (
									<SinglePostInt key={index} postProps={postProps} />
								) : (
										<SinglePostExt key={index} postProps={postProps} />
									);
							} else {
								return null;
							}
						})}
					</div>
				</PostsSection>
			</>
		)}
	/>
);
