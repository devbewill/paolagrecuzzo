import React from 'react';
import { Img, Link } from 'gatsby';
import avatar from '../images/avatar.jpeg'
import styled from 'styled-components';

const Intro = () => {
	const IntroSection = styled.section`
		display: flex;
		align-items: center;
		height: 96vh;
		position: relative;
		background: url(${avatar}) no-repeat;
		background-size: 75%;
		background-position: right 7vh;

		.homeMenu {
			padding-left: 5em;

			ul { margin-top: 4em;}
		}


		@media only screen and (max-width: 550px) {
			height: 95vh;
			background-size: 153%;
    		background-position: 2% bottom;
			.homeMenu {
				padding-top: 2em;
				padding-left: 1em;

				ul {margin-top: 7em}
			}
		}

	`;

	const HeroLink = styled(Link)`
		display: block;
		color: #111;
		font-family: 'Playfair Display';
		font-size: 5.6rem;
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
		display: inline-block;
		text-transform: uppercase;
		line-height: 1;
		color: #111;
		transition: all 0.3s linear;
		margin-right: 3em;
		border-bottom: 1px solid transparent;

		&:hover {
			border-bottom: 2px solid #000;
		}
		
	`;

	return (
		<IntroSection>
			<div className="homeMenu">
				<HeroLink data-sal="slide-right" data-sal-delay="200" to="/">I'm</HeroLink>
				<HeroLink data-sal="slide-right" data-sal-delay="400" to="/">Designing</HeroLink>
				<HeroLink data-sal="slide-right" data-sal-delay="600" to="/">My story</HeroLink>
				<ul>
					<li>
						<StyledLink to="">Works</StyledLink>
						<StyledLink to="/blog">Blog</StyledLink>
					</li>
				</ul>
			</div>
		</IntroSection>
	);
};

export default Intro;
