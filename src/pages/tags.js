import React from 'react';
import { Link, graphql } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';

const TagsSection = styled.div`
	margin: 10vh 5rem 10vh 5rem;

	@media only screen and (max-width: 550px) {
		margin: 10vh 1rem 10vh 1rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		padding-top: 2em;
		li {
			display: flex;
			align-items: center;
			border: 2px solid #000;
			margin: 5px;
			height: 50px;
			padding: 0 15px;
			font-weight: 600;
			transition: all 0.2s linear
			font-size: 1.2rem;

			&:hover {
				background: ${(props) => props.theme.colors.primary};
			}
		}

		a {
			text-transform: uppercase;
		}

		span {
			color: #222;
			margin: 0 5px 0 0;
		}
	}
`;

const TagsPage = ({ data: { allContentfulBlogPost: { group } } }) => (
	<Theme>
		<Layout>
			<SEO title="Tags" />
			<Menu leftPosition="3em" />
			<TagsSection>
				<h1>All Tags</h1>
				<ul>
					{group.map((tag) => (
						<li key={tag.fieldValue}>
							<span>{tag.totalCount} in </span>
							<Link to={`/blog/${tag.fieldValue}/`}>{tag.fieldValue}</Link>
						</li>
					))}
				</ul>
			</TagsSection>
		</Layout>
	</Theme>
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
