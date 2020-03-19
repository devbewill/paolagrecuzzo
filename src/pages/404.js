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

p {
	margin: 3em;
}
`;

const NotFound = () => {
	return (
		<Theme>
			<Layout>
				<Section404>

					<h1>Ops :(</h1>

					<p>
						<Link to="/">vai in home</Link>
					</p>

				</Section404>


			</Layout>
		</Theme>
	);
};

export default NotFound;
