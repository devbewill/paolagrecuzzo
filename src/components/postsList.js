import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PostSingle from './postSingle';

const PostsSection = styled.div`
	margin-top: 20vh;
	display: flex;
	flex-wrap: wrap;

	@media only screen and (max-width: 550px) {
		margin-top: 10vh;
	}
`;

const PostsList = () => {
	const [ filterBy, setFilterBy ] = useState(false);

	useEffect(
		() => {
			setFilterBy(filterBy);
		},
		[ filterBy ]
	);

	const data = useStaticQuery(graphql`
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
	`);

	return (
		<PostsSection>
			{data.allContentfulBlogPost.edges.map((edge, index) => {
				//check tags

				if (!filterBy) {
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

					return <PostSingle key={index} postProps={postProps} setFilterBy={setFilterBy} />;
				} else {
					if (edge.node.tag.includes(filterBy)) {
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

						return (
							<PostSingle
								key={index}
								postProps={postProps}
								className="sal-animate"
								setFilterBy={setFilterBy}
							/>
						);
					}
				}
			})}
		</PostsSection>
	);
};

export default PostsList;
