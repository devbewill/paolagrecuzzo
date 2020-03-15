import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
	const StyledFooter = styled.footer`
		min-height: 400px;
		background: ${(props) => props.theme.colors.primary};
		padding: 5em;


		h2 {
			font-size: 3rem;
			font-weight: 800;
			line-height: 1;
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

					&:hover {
						border-bottom: 2px solid #000;
					}
				}
			}
		}


		@media only screen and (max-width: 600px) {
			padding: 2em 1em;

			h2 {
				font-size: 2rem;
				letter-spacing: -2px;
			}

			ul {
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
						Linkedin
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
