import React from 'react';
import styled from 'styled-components';
import TextContent from '../components/textContent';

const SinglePostExt = ({ postProps }) => {
	const cleanUrl = (url) => {
		let urlCleaned = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
		return urlCleaned;
	};

	const StyledPost = styled.div`
		display: flex;
		margin: 4em 0;


		.text {
			padding: 0 3em;
		}

		.thumb {
			padding-top: 7em;
		}

		&:nth-child(2n){
			flex-direction: row-reverse;
		}
	`;

	const ImgPost = styled.div`
		right: 0;
		min-height: 500px;
		width: 40vw;
		background: url(${(props) => props.background}) no-repeat;
		background-position: center center;
		background-size: cover;
		transition: all 0.4s ease-in;

	`;

	return (
		<StyledPost>
			<div className="text">
				<span className="date">{postProps.date}</span>
				<h2>{postProps.title}</h2>
				<TextContent content={postProps.body} />
			</div>
			<div className="thumb">
				<ul className="tags">
					{postProps.tags.map((tag, index) => {
						return <li key={index}>{tag}</li>;
					})}
				</ul>
				<ImgPost background={postProps.imgPost} />
			</div>
			<hr />
			{/*<StyledLink href={postProps.target}>vai alla fonte</StyledLink> */}
		</StyledPost>
	);
};

export default SinglePostExt;
