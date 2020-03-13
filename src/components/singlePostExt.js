import React from 'react';
import styled from 'styled-components';
import TextContent from '../components/textContent';

const SinglePostExt = ({ postProps }) => {
	const cleanUrl = (url) => {
		let urlCleaned = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
		return urlCleaned;
	};

	const StyledPost = styled.div`
		margin: 0 0 10em 0;
		
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
				h2 {max-width: 50vw;}
			}

			.tags {
				text-transform: uppercase;
				font-size: 0.8rem;
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


		&:nth-child(2n){
			.flexed {
				flex-direction: row-reverse;
			}
			
		}

		@media only screen and (max-width: 550px) {
			.head { 
				flex-flow: column;
				padding: 0 1em;

				.title h2 {max-width: none; font-size :1.9rem}
			}
			.flexed {
				flex-flow: column;
				flex-direction: column-reverse;

				.text {padding: 3em 1em;}

				.thumb {
					width: 100vw;
					max-height: 200px;
				}
			}

		
			&:nth-child(2n){
				.flexed {
					flex-direction: column-reverse;
				}	
			}
		}
	`;

	const ImgPost = styled.div`
		position: absolute;
		top: 2em;
		left: 2em;
		bottom: -2em;
		right: 0;
		background: url(${(props) => props.background}) no-repeat;
		background-position: center center;
		background-size: cover;
		transition: all 0.4s ease-in;

		  ${StyledPost}:nth-child(2n) & {
				left: 0;
				right: 2em;
			}

		/* @media only screen and (max-width: 550px) {
			width: 100vw;
			min-height: 200px;
		} */

	`;

	return (
		<StyledPost>
			<div className="head">
				<div className="title">
					<span className="date">{postProps.day}.{postProps.month}.{postProps.year}</span>
					<h2>{postProps.title}</h2>
				</div>

				<ul className="tags">
					{postProps.tags.map((tag, index) => {
						return <li key={index}>{tag}</li>;
					})}
				</ul>
			</div>

			<div className="flexed">
				<div className="text">
					<TextContent content={postProps.body} />
				</div>
				<div className="thumb">
					<ImgPost background={postProps.imgPost} />
				</div>
			</div>

			{/*<StyledLink href={postProps.target}>vai alla fonte</StyledLink> */}
		</StyledPost>
	);
};

export default SinglePostExt;
