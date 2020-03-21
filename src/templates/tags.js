import React from 'react';
import { Link, graphql } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';
import PostSingle from '../components/postSingle';

const PostsSection = styled.div`
	margin-top: 5vh;
	display: flex;
	flex-wrap: wrap;

	.introTag {
		margin: 0 3rem 3rem 3rem;
		font-weight: 800;
		font-size: 1.8rem;

		span {
			text-transform: uppercase;
			color: ${(props) => props.theme.colors.primary};
		}
	}

	.allTagsLink {
		font-size: 1rem;
		margin-left: 1rem;
		text-decoration: underline;
	}

	@media only screen and (max-width: 550px) {
		margin-top: 5vh;
	}
`;

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allContentfulBlogPost;

	return (
		<Theme>
			<Layout>
				<SEO title="Tags" />
				<Menu leftPosition="3em" />
				<PostsSection>
					<p className="introTag">
						{totalCount} articol{`${totalCount === 1 ? 'o' : 'i'}`} in <span>{tag}</span>
						<Link className="allTagsLink" to="/tags">
							cambia tag
						</Link>
					</p>

					<ul>
						{edges.map(({ node }) => {
							let target, postProps;
							node.source ? (target = node.source) : (target = `/blog/${node.slug}`);

							postProps = {
								slug: `/blog/${node.slug}`,
								imgPost: node.featuredImage.fluid.src,
								externalLink: node.source,
								tags: node.tag,
								title: node.title,
								body: node.body.childMarkdownRemark.html,
								day: node.day,
								month: node.month,
								year: node.year,
								target: target
							};
							return (
								<li key={postProps.slug}>
									<PostSingle key={postProps.slug} postProps={postProps} />
								</li>
							);
						})}
					</ul>
				</PostsSection>
			</Layout>
		</Theme>
	);
};

export default Tags;

export const pageQuery = graphql`
	query($tag: String) {
		allContentfulBlogPost(filter: { tag: { in: [$tag] } }) {
			totalCount
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
`;
