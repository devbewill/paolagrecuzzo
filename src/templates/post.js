import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Theme from '../styles/Theme';
import TextContent from '../components/textContent';
import leftArrow from '../images/left.svg';
import rightArrow from '../images/right.svg';
import Header from '../components/header';
import SEO from '../components/seo';

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			source
			slug
			day: publishedDate(formatString: "DD")
			month: publishedDate(formatString: "MM")
			year: publishedDate(formatString: "YY")
			tag
			featuredImage {
				fluid(maxWidth: 1200, quality: 90) {
					...GatsbyContentfulFluid_withWebp
				}

				file{
					url
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
	margin: 15rem auto 3rem auto;

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

		.source {
			color: #222;
			display: block;
			margin: 2em 0;
			font-size: 1.1rem;
			font-weight: 700;
			text-decoration: underline;
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
	margin: 1em auto 0 auto;
	font-size: 3em;

	ul {
		display: flex;
		justify-content: space-between;

		li {margin: 0;}
	}

`;


const GoToPost = styled(Link)`
mask-image: url(${props => props.arrow});
mask-size: 3vw 3vw;
mask-repeat: no-repeat;
background-size: cover;
width: 9vw;
height: 9vw;
display: block;
background-color: black;
/* background-color: ${(props) => props.theme.colors.primary}; */

@media only screen and (max-width: 550px) {
mask-size: 10vw 10vw;
height: 10vw;
width: 10vw;
margin: 0 0.5em;
}

`;

const Post = (props) => {


	const title = props.data.contentfulBlogPost.title;
	const source = props.data.contentfulBlogPost.source;
	const body = props.data.contentfulBlogPost.body.childMarkdownRemark.html;
	const tags = props.data.contentfulBlogPost.tag;
	const day = props.data.contentfulBlogPost.day;
	const month = props.data.contentfulBlogPost.month;
	const year = props.data.contentfulBlogPost.year;
	const slug = props.data.contentfulBlogPost.slug;

	return (
		<Theme>
			<SEO
				title={title}
				description={title || 'nothin'}
				image={props.data.contentfulBlogPost.featuredImage.file.url}
				pathname={`blog/${slug}`}
				article
			/>
			<Header></Header>
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
					{source && (
						<a className="source" href={source}>Vai alla fonte</a>
					)}

				</div>

				<Navigator>
					<ul>
						<li>
							{props.pageContext.previous && (
								<GoToPost arrow={leftArrow} to={`/blog/${props.pageContext.previous.slug}`} rel="prev">
								</GoToPost>
							)}
						</li>
						<li>
							{props.pageContext.next && (
								<GoToPost arrow={rightArrow} to={`/blog/${props.pageContext.next.slug}`} rel="next">


								</GoToPost>
							)}
						</li>
					</ul>
				</Navigator>

			</PostLayout>
		</Theme>
	);
};

export default Post;
