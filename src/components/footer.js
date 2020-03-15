import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
	const StyledFooter = styled.footer`
		min-height: 400px;
		background: ${(props) => props.theme.colors.primary};
		padding: 6em 5em 5em 5em;


		h2 {
			font-family: "Gothic A1", sans-serif;
			font-size: 3rem;
			font-weight: 900;
			line-height: 1;
			letter-spacing: -1px;
		}

		ul {
			margin: 0;
			margin-top: 6em;
			list-style-type: none;
			font-weight: 300;
			font-size: 1rem;

			li {
				display: inline-block;
				padding-right: 5em;

				a {
					color: inherit;
					text-decoration: none;
					transition: all 0.3s linear;
					border-bottom: 1px solid transparent;
					font-size: 1.1rem;
					font-weight: 400;
					letter-spacing: -1px;

					&:hover {
						border-bottom: 2px solid #000;
					}
				}
			}
		}


		@media only screen and (max-width: 600px) {
			padding: 6em 1em;

			h2 {
				font-size: 2rem;
				letter-spacing: -2px;
			}

			ul {
				margin-top: 4em;
				font-size: 1.3rem;

				li {display: block;}
			}
		}
	`;
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
				}
			}
		}
	`);

	return (
		<StyledFooter>
			<h2>
				Say hello!
			</h2>
			<ul className="contatcs">
				<li>
					<a href="mailto:paolagrecuzzo@gmail.com" target="_blank" rel="noopener noreferrer">
						Mail
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/paola-grecuzzo-09071984/" target="_blank" rel="noopener noreferrer">
						LinkedIn
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/paol_p_etta" target="_blank" rel="noopener noreferrer">
						Instagram
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/paola.grecuzzo" target="_blank" rel="noopener noreferrer">
						Facebook
					</a>
				</li>

			</ul>
		</StyledFooter>
	);
};

export default Footer;
