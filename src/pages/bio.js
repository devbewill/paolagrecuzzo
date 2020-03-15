import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';

const BioSection = styled.div`
color: blue;

`;

const BioPage = (props) => {


    return (
        <Theme>
            <Layout>
                <Head title="Bio" />
                <BioSection>
                    ddd
                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
