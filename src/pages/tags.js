import React from 'react';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

const TagsPage = ({ data: { allContentfulBlogPost: { group }, site: { siteMetadata: { title } } } }) => (
	<div>
		<Helmet title={title} />
		<div>
			<h1>Tags</h1>
			<ul>
				{group.map((tag) => (
					<li key={tag.fieldValue}>
						<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
							{tag.fieldValue} ({tag.totalCount})
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default TagsPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulBlogPost {
			group(field: tag) {
				totalCount
				fieldValue
			}
		}
	}
`;