import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Theme from '../styles/Theme';
import TextContent from '../components/textContent';

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
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
`;

const PostLayout = styled.div`
	max-width: 60vw;
	margin: 0  auto;

	.gatsby-image-wrapper {
		max-height: 400px;
	}

	.content {
		padding-top: 2em;
		h1 {
			font-size: 4rem;
			font-weight: 800;
			text-transform: uppercase;
			letter-spacing: -3px;
			line-height: 0.9;
		}


		p {
			font-size: 1.2rem;
			line-height: 1.4;
			font-weight: 300;
		}

		.tags {
			text-transform: uppercase;
		}
	}

	@media only screen and (max-width: 550px) {
		max-width: none;

		.content {
			margin: 0 auto;
			max-width: 85vw;

			h1 {
				font-size: 3rem;
				letter-spacing: -2px;
			}
		}
	}
`;

const Navigator = styled.nav`
	margin: 2em auto 0 auto;
	font-size: 3em;

	ul {
		display: flex;
		justify-content: space-between;
	}
a {
	font-weight: 800;
	color: ${(props) => props.theme.colors.primary};
	color: #222;
}
`;


const Post = (props) => {


	const title = props.data.contentfulBlogPost.title;
	const body = props.data.contentfulBlogPost.body.childMarkdownRemark.html;
	const tags = props.data.contentfulBlogPost.tag;
	const day = props.data.contentfulBlogPost.day;
	const month = props.data.contentfulBlogPost.month;
	const year = props.data.contentfulBlogPost.year;


	return (
		<Theme>
			<PostLayout>
				{props.data.contentfulBlogPost.featuredImage && (
					<Img fluid={props.data.contentfulBlogPost.featuredImage.fluid} alt="" />
				)}
				<div className="content">
					<span className="date">{day}.{month}.{year}</span>

					<h1>{title}</h1>
					<ul className="tags">
						{tags.map((tag, index) => {
							return <li key={index}>{tag}</li>;
						})}
					</ul>
					<TextContent content={body} />
				</div>

				<Navigator>
					<ul>
						<li>
							{props.pageContext.previous && (
								<Link to={`/blog/${props.pageContext.previous.slug}`} rel="prev">
									prev
									</Link>
							)}
						</li>
						<li>
							{props.pageContext.next && (
								<Link to={`/blog/${props.pageContext.next.slug}`} rel="next">
									next
									</Link>
							)}
						</li>
					</ul>
				</Navigator>

			</PostLayout>
		</Theme>
	);
};

export default Post;
