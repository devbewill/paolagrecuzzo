import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';

const StyledLayout = styled.div`
	h1 {
		font-size: 4rem;
		margin: 0;
		font-weight: 800;
		text-transform: uppercase;
	}

	h2 {

		font-size: 3.5rem;
		font-weight: 800;
		padding: 0;
	}

	p {
		font-size: 1rem;
		line-height: 1.4;
		font-weight: 300;
	}
`;

const Layout = (props) => {
	return (
		<StyledLayout>
			<Header />
			{props.children}
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
