import React from 'react';
import { Link } from 'gatsby';
import Headroom from "react-headroom";
import styled from 'styled-components';

const Navbar = styled.header`
    width: 50%;
    height: 200px;
    margin-right: 0;
    margin-left: auto;

	.info {
		text-align: right;
		padding: 0.6em;

		h1 {
			font-family: 'Italiana';
			text-transform: uppercase;
			line-height: 0.9;
			font-size: 2.7rem;
			margin: 0.2em 0 0.2em auto;
			max-width: 300px;
			
		}

		p {
			padding-top: 0;
			position: relative;
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
					<p>content <br></br>designer</p>
				</div>
			</Navbar >
		</Headroom>
	);
};

export default Header;
