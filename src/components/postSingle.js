import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TextContent from './textContent';

const PostSingle = ({ postProps }) => {
	const StyledPost = styled.div`
		margin: 0 0 15em 0;

		p {
			font-weight: 400;
			letter-spacing: -1px;
			font-size: 1.1rem;
			line-height: 1.7;
		}

		.head {
			display: flex;
			width: 100%;
			padding: 0 3em;
			.title {
				flex-grow: 2;
				.date {
					font-size: 0.8rem;
					font-weight: 700;
				}
				h2 {
					max-width: 65vw;
				}
			}

			.tags {
				margin: 0 5px;
				text-transform: uppercase;
				font-size: 0.8rem;
				font-weight: 700;
				letter-spacing: -1px;
			}
		}

		.flexed {
			display: flex;

			.text {
				padding: 0 3em;
			}

			.thumb {
				position: relative;
				margin-top: 2em;
				min-width: 40vw;
				height: 500px;
				background: ${(props) => props.theme.colors.primary};
			}
		}

		.goToSource {
			position: absolute;
			display: block;
			padding: 5vw 10px 0 30px;
			width: 12vw;
			height: 15vw;
			background: rgba(0, 0, 0, 0.55);
			z-index: 2;
			left: 2rem;
			bottom: -2rem;
			color: #fff;
			line-height: 1;
			font-size: 2.3rem;
			font-weight: 700;
			text-align: right;
			font-family: 'Playfair Display';
			transition: all 0.25s ease-in;
			&:hover {
				color: #222;
				background: rgba(255, 255, 255, 0.55);
			}
		}

		&:nth-child(2n) {
			.flexed {
				flex-direction: row-reverse;
			}

			.goToSource {
				left: auto;
				right: 2rem;
			}
		}

		@media only screen and (max-width: 550px) {
			margin-bottom: 2em;

			.head {
				flex-flow: column;
				padding: 0 1em;

				.title h2 {
					max-width: none;
					font-size: 1.9rem;
				}
			}
			.flexed {
				flex-flow: column;
				flex-direction: column-reverse;

				.text {
					padding: 3em 1em;
				}

				.thumb {
					width: 100vw;
					max-height: 200px;
				}
			}

			.goToSource {
				font-size: 1.5rem;
				width: 45vw;
				height: 5vh;
				right: 0;
				left: auto;
				padding-top: 2vw;
				padding-left: 0;
			}

			&:nth-child(2n) {
				.flexed {
					flex-direction: column-reverse;
				}
			}
		}
	`;

	const ImgPost = styled.div`
		position: absolute;
		top: 2rem;
		left: 2rem;
		bottom: -2rem;
		right: 0;
		background: url(${(props) => props.background}) no-repeat;
		background-position: center center;
		background-size: cover;
		transition: all 0.4s ease-in;

		${StyledPost}:nth-child (2n) & {
			left: 0;
			right: 2rem;
		}

		@media only screen and (max-width: 550px) {
			width: 100vw;
			min-height: 200px;
		}
	`;

	return (
		<StyledPost data-sal="slide-up" data-sal-duration="800">
			<div className="head">
				<div className="title">
					<span className="date">
						{postProps.day}.{postProps.month}.{postProps.year}
					</span>
					<h2>{postProps.title}</h2>
				</div>

				<ul className="tags">
					{postProps.tags.map((tag, index) => {
						return (
							<Link className="tags" key={index} to={`/blog/${tag}/`}>
								{tag}
							</Link>
						);
					})}
				</ul>
			</div>

			<div className="flexed">
				<div className="text">
					<TextContent content={postProps.body} />
				</div>
				<div className="thumb">
					<a href={postProps.target} className="goToSource">
						Vai alla fonte
					</a>
					<ImgPost background={postProps.imgPost} />
				</div>
			</div>
		</StyledPost>
	);
};

export default PostSingle;
