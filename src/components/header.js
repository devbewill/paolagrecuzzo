import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.header`
	width: 100%;
	position: fixed;
	padding: 0 1em;
	top: 0;
	z-index: 999;

	.info {
		text-align: right;
		float: right;

		h1 {
			font-family: 'Italiana';
			text-transform: uppercase;
			font-size: 3rem;
			margin: 0.2em 0;
			
		}

		p {
			margin: 0;
			position: relative;
			display: inline-block;
			font-size: 1.9rem;
			background: #000;
			font-weight: 100;
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
			background-repeat: no-repeat;
			transition: background 0.2s ease-out;
			white-space: nowrap;
		}

		span {
			position: relative;
			&:before {
				content: "";
				position: absolute;
				left: 10px;
				right: -1em;
				height: 16px;
				background: ${(props) => props.theme.colors.primary};
				bottom: -7px;
				transition: all 0.2s ease-out;
				}
		}
	}

	@media only screen and (max-width: 550px) {
		padding: 1rem 0;
	}
`;



const Header = () => {
	return (
		<Navbar>
			<div className="info">
				<h1>Paola <br></br>Grecuzzo</h1>
				<span><p>content designer</p></span>
			</div>

		</Navbar >
	);
};

export default Header;
