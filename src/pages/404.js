import React from 'react';
import { Link } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import styled from 'styled-components';

const Section404 = styled.div`
	min-height: 50vh;
	display: flex;
	flex-flow: column;
	justify-content:center;
	align-items: center;
	
	h1 {
		font-size: 15vw;
		padding: 0 0 0.5em 0;
		color: ${(props) => props.theme.colors.primary};
	}

	h2 {
		font-size: 5vw;
		text-align: center;
	}

	p {
		margin: 3em;

		a {
			font-weight: 600;
			text-decoration: underline;
		}
	}
`;

const NotFound = () => {
	return (
		<Theme>
			<Layout>
				<Section404>

					<h1>:(</h1>
					<h2>Ops! La pagina non esiste</h2>

					<p>
						<Link to="/">Torna alla home</Link>
					</p>

				</Section404>


			</Layout>
		</Theme>
	);
};

export default NotFound;
