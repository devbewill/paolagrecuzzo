import React, { useState } from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';


const BioSection = styled.div`
    margin-top: -200px;;
    height: 100vh;

`;


const BioPage = (props) => {

    return (
        <Theme>
            <Layout>
                <Head title="Bio" />
                <BioSection>
                    <Menu></Menu>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
