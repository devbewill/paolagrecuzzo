import React from 'react';
import { Link, graphql } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import SinglePost from '../components/singlePost';

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allContentfulBlogPost;
	const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

	return (
		<Theme>
			<Layout>
				<SEO title="Tags" />
				<Menu leftPosition="3em" />
				<div>
					<h1>{tagHeader} Template</h1>
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
									<SinglePost key={postProps.slug} postProps={postProps} />
								</li>
							);
						})}
					</ul>
					{/*
					This links to a page that does not yet exist.
					You'll come back to it!
					*/}
					<Link to="/tags">All tags</Link>
				</div>
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
