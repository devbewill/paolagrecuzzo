import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FixedMenu = styled.div`
	position: fixed;
	z-index: 99999;
	top: 1.3em;
	left: ${(props) => props.leftPosition || '5em'};

	@media only screen and (max-width: 550px) {
		top: 1em;
		left: 1em;
	}

	.closerMenu {
		position: absolute;
		width: 0;
		height: 0;
		right: 10px;
		bottom: 10px;
		border-bottom: 2em solid ${(props) => props.theme.colors.primary};
		border-left: 2em solid transparent;
		cursor: pointer;

		@media only screen and (max-width: 550px) {
			opacity: 0;
		}
	}

	.close {
		display: none;
		position: absolute;
		right: 1em;
		top: 1em;
		width: 2.5em;
		height: 2.5em;
		overflow: hidden;

		&::before,
		&::after {
			content: '';
			position: absolute;
			height: 2px;
			width: 100%;
			top: 50%;
			left: 0;
			margin-top: -1px;
			background: #fff;
		}
		&::before {
			transform: rotate(45deg);
		}
		&::after {
			transform: rotate(-45deg);
		}

		@media only screen and (max-width: 550px) {
			display: inline-block;
		}
	}

	.openerMenu {
		position: relative;
		width: 0;
		height: 0;
		border-top: 2em solid #000;
		border-right: 2em solid transparent;
		cursor: pointer;
		outline: none;

		.menu {
			opacity: 0;
			position: absolute;
			overflow: hidden;
			top: -50px;
			height: 0;
			width: 330px;
			background: #000;
			transition: all 0.5s ease-in-out;

			&.visible {
				opacity: 1;
				height: 490px;
			}

			@media only screen and (max-width: 550px) {
				width: 100vw;
				left: -1em;

				&.visible {
					height: 100vh;
				}
			}
		}

		.menuContent {
			padding: 2em 1em;

			.medium-wrapper {
				margin: 2em 0 3em 0;
			}

			@media only screen and (max-width: 550px) {
				padding: 8em 2em 0 2em;

				.medium-wrapper {
					margin: 3em 0 5em 0;
				}
			}
		}
		.hero {
			display: block;
			color: #fff;
			font-family: 'Playfair Display';
			font-size: 3rem;
			line-height: 1.1;
			font-weight: 700;
			transition: all 0.3s ease-in;

			&:hover {
				color: ${(props) => props.theme.colors.primary};
			}

			@media only screen and (max-width: 550px) {
				font-size: 4.2rem;
			}
		}

		.medium {
			display: block;
			font-weight: 600;
			font-size: 1.1rem;
			line-height: 1.4;
			color: #fff;
			transition: all 0.3s linear;

			&:hover {
				text-decoration: underline;
			}

			@media only screen and (max-width: 550px) {
				text-align: left;
				font-size: 1.8rem;
			}
		}

		.small {
			display: block;
			color: #fafafa;
			text-align: right;
			font-weight: 400;
			font-size: 0.9rem;
			line-height: 1.3;
			color: #fff;
			transition: all 0.3s linear;

			&:hover {
				text-decoration: underline;
			}

			@media only screen and (max-width: 550px) {
				font-size: 1.4rem;
			}
		}
	}
`;

const Menu = (props) => {
	const [ menuVisibility, setMenuVisibility ] = useState(true);

	return (
		<FixedMenu leftPosition={props.leftPosition}>
			<div
				className="openerMenu"
				role="button"
				tabIndex={0}
				onKeyPress={() => setMenuVisibility(!menuVisibility)}
				onClick={() => setMenuVisibility(!menuVisibility)}
			>
				<div className={!menuVisibility ? 'menu visible' : 'menu'}>
					<span className="close" />
					<div className="menuContent">
						<Link className="hero" to="/bio">
							I'm
						</Link>
						<Link className="hero" to="/designing">
							Designing
						</Link>
						<Link className="hero" to="/story">
							My story
						</Link>
						<div className="medium-wrapper">
							<Link className="medium" to="/blog">
								works
							</Link>
							<Link className="medium" to="/blog">
								blog
							</Link>
						</div>
						<a
							href="https://www.linkedin.com/in/paola-grecuzzo-09071984/"
							className="small"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<a
							href="https://www.instagram.com/paol_p_etta"
							className="small"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
						<a
							href="https://www.facebook.com/paola.grecuzzo"
							className="small"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook
						</a>
					</div>
					<div className="closerMenu" />
				</div>
			</div>
		</FixedMenu>
	);
};

export default Menu;
