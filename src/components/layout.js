import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';

const StyledLayout = styled.div`
	overflow: hidden;
	h1 {
		font-size: 4rem;
		margin: 0;

	}

	h2 {

		font-size: 3.5rem;

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
