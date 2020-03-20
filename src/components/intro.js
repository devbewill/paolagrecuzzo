import React from 'react';
import { Link } from 'gatsby';
import face from '../images/face.jpg';
import styled from 'styled-components';

const Intro = () => {
	const IntroSection = styled.section`
		margin-top: -200px;
		display: flex;
		align-items: center;
		height: 96vh;
		position: relative;

		.homeMenu {
			padding-left: 5em;
		}

		.pageNavigator {
			position: absolute;
			right: 0;
			bottom: 10vh;
		}

		.overlayImg {
			display: block;
			opacity: 0.3;
			position: fixed;
			z-index: -1;
			top: 20vh;
			bottom: 0;
			left: 65vw;
			right: 0;
			background: url(${face}) no-repeat;
			background-size: cover;
		}

		.fixedImg {
			display: none;
			z-index: -1;
			position: fixed;
			max-width: 280px;
			right: -40px;
			bottom: -20px;
		}

		@media only screen and (max-width: 550px) {
			height: 95vh;

			.overlayImg {
				display: none;
				opacity: 1;
				bottom: -30px;
				right: -55px;
				left: 0;
				background-position: right bottom;
				background-size: 285px;
			}

			.fixedImg {
				display: block;
				z-index: -1;
				position: fixed;
				max-width: 280px;
				right: -40px;
				bottom: -20px;
			}

			.homeMenu {
				margin-top: -6vh;
				padding-top: 0;
				padding-left: 1em;
			}

			.pageNavigator {
				left: 1em;
				bottom: 6vh;
			}
		}
	`;

	const HeroLink = styled(Link)`
		display: block;
		color: #111;
		font-family: 'Playfair Display';
		font-size: 6.8rem;
		line-height: 1.1;
		font-weight: 700;
		transition: all 0.3s ease-in;

		&:hover {
			color: ${(props) => props.theme.colors.primary};
		}


		@media only screen and (max-width: 550px) {
			font-size: 4.2rem;
			text-decoration: underline;
		}

		
	`;

	const StyledLink = styled(Link)`
		display: block;
		text-align: right;
		font-weight: 600;
		font-size: 1.3rem;
		line-height: 1;
		margin-bottom: 0.7em;
		color: #111;
		transition: all 0.3s linear;

		&:hover {
			text-decoration: underline;
		}

		@media only screen and (max-width: 550px) {
			text-align: left;
		}
		
	`;

	return (
		<IntroSection>
			<div data-sal="slide-left" data-sal-duration="700" className="overlayImg" />
			<div className="homeMenu">
				<HeroLink data-sal="slide-right" data-sal-delay="200" to="/bio">
					I'm
				</HeroLink>
				<HeroLink data-sal="slide-right" data-sal-delay="400" to="/designing">
					Designing
				</HeroLink>
				<HeroLink data-sal="slide-right" data-sal-delay="600" to="/story">
					My story
				</HeroLink>
			</div>
			<ul className="pageNavigator">
				<li>
					<StyledLink to="">works</StyledLink>
					<StyledLink to="/blog">blog</StyledLink>
				</li>
			</ul>
			<img className="fixedImg" src={face} alt="" />
		</IntroSection>
	);
};

export default Intro;
