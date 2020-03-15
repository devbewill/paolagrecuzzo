import React from 'react';
import { Img, Link } from 'gatsby';
import avatar from '../images/avatar.jpeg'
import styled from 'styled-components';

const Intro = () => {

	const IntroSection = styled.section`
	margin-top: -200px;
		display: flex;
		align-items: center;
		height: 96vh;
		position: relative;
		/* background: url(${avatar}) no-repeat;
		background-size: 75%;
		background-position: right 7vh; */

		.homeMenu {
			padding-left: 5em;

			/* ul { margin-top: 4em;} */
		}

		.pageNavigator {
			position: absolute;
			right: 0;
			bottom: 10vh;
		}

		.overlayImg {
			position: fixed;
			z-index: -1;
			top: 0;
			bottom: 0;
			left:0;
			right: 0;
			background: url(${avatar}) no-repeat;
			background-size: 75%;
			background-position: right calc(100% - 2vh);
		}


		@media only screen and (max-width: 550px) {
			height: 95vh;

			.overlayImg {
			background-size: 153%;
    		background-position: -1vw bottom;
			}

			.homeMenu {
				padding-top: 2em;
				padding-left: 1em;
			}

			.pageNavigator {
				left: 1em;
				bottom: 6vh
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
			<div className="overlayImg">

			</div>
			<div className="homeMenu">
				<HeroLink data-sal="slide-right" data-sal-delay="200" to="/">I'm</HeroLink>
				<HeroLink data-sal="slide-right" data-sal-delay="400" to="/">Designing</HeroLink>
				<HeroLink data-sal="slide-right" data-sal-delay="600" to="/">My story</HeroLink>
			</div>
			<ul className="pageNavigator">
				<li>
					<StyledLink to="">works</StyledLink>
					<StyledLink to="/blog">blog</StyledLink>
				</li>
			</ul>
		</IntroSection>
	);
};

export default Intro;
