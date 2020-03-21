import React from 'react';

// Components
import { Link, graphql } from 'gatsby';

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allContentfulBlogPost;
	const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

	return (
		<div>
			<h1>{tagHeader} Template</h1>
			<ul>
				{edges.map(({ node }) => {
					const { slug } = node;
					const { title } = node;

					return (
						<li key={slug}>
							<Link to={`blog/${slug}`}>{title}</Link>
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
	);
};

export default Tags;

export const pageQuery = graphql`
	query($tag: String) {
		allContentfulBlogPost(filter: { tag: { in: [$tag] } }) {
			totalCount
			edges {
				node {
					slug
					title
				}
			}
		}
	}
`;
