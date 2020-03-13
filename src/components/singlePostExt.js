import React from 'react';
import styled from 'styled-components';
import TextContent from '../components/textContent';

const SinglePostExt = ({ postProps }) => {
	const cleanUrl = (url) => {
		let urlCleaned = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
		return urlCleaned;
	};

	const StyledLink = styled.a`

	`;

	// const ImgPost = styled.div`
	// 	opacity: 0;
	// 	top: -120px;
	// 	right: -2vw;
	// 	position: absolute;
	// 	height: 150px;
	// 	width: 200px;
	// 	background: url(${(props) => props.background});
	// 	background-position: center center;
	// 	background-size: cover;
	// 	transition: all 0.4s ease-in;
	// 	border: 0.3em solid #fff;

	// 	${StyledLink}:hover & {
	// 		opacity: 1;
	// 	}
	// `;

	const ImgPost = styled.div`
		right: 0;
		height: 300px;
		width: 500px;
		background: url(${(props) => props.background});
		background-position: center center;
		background-size: cover;
		transition: all 0.4s ease-in;

	`;

	return (
		<>
			{/* <StyledLink href={postProps.target}> */}
			<ImgPost background={postProps.imgPost} />
			<ul className="tags">
				{postProps.tags.map((tag, index) => {
					return <li key={index}>{tag}</li>;
				})}
			</ul>
			<div className="flexed">
				<h2>{postProps.title}</h2>
				<span className="date">{postProps.date}</span>
				{/* <p className="by">
					by <span>{cleanUrl(postProps.target)}</span>
				</p> */}
			</div>
			<TextContent content={postProps.body} />
			{/* </StyledLink> */}
		</>
	);
};

export default SinglePostExt;
