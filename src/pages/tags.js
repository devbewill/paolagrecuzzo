import React from 'react';

// Components
import { Link, graphql } from 'gatsby';

const TagsPage = ({ data: { allContentfulBlogPost: { group } } }) => (
	<div>
		<div>
			<h1>Tags</h1>
			<ul>
				{group.map((tag) => (
					<li key={tag.fieldValue}>
						<Link to={`/blog/${tag.fieldValue}/`}>
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
		allContentfulBlogPost {
			group(field: tag) {
				totalCount
				fieldValue
			}
		}
	}
`;
