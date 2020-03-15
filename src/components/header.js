import React from 'react';
import { Link } from 'gatsby';
import Headroom from "react-headroom";
import styled from 'styled-components';

const Navbar = styled.header`
	width: 100%;
	height: 200px;

	.info {
		text-align: right;
		padding: 0.6em;

		h1 {
			font-family: 'Italiana';
			text-transform: uppercase;
			line-height: 0.9;
			font-size: 2.7rem;
			margin: 0.2em 0;
			
		}

		p {
			margin: 0;
			padding-top: 0.5em;
			position: relative;
			display: inline-block;
			font-size: 1.6rem;
			font-weight: 600;
			line-height: 1.2;	

		}
	}

`;



const Header = () => {
	return (
		<Headroom disableInlineStyles>
			<Navbar>
				<div className="info">
					<Link to="/"><h1>Paola <br></br>Grecuzzo</h1></Link>
					<span><p>content <br></br>designer</p></span>
				</div>
			</Navbar >
		</Headroom>
	);
};

export default Header;
