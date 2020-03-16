import React, { useState } from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import Menu from '../components/menu';
import Timeline from '../components/timeline'
import styled from 'styled-components';


const StorySection = styled.div`
    margin-top: -200px;
    margin-bottom: 5em;
    min-height: 100vh;

    .content {
        margin: 30vh 0 0 5rem;
        position: relative;
    }

    h1 {
        font-size: 6.8rem;
        line-height: 0.8;
    }

    @media only screen and (max-width: 550px){
        .content {
            margin: 35vh 0 0 1rem;

        }

        h1 {
            font-size: 5.8rem;
            padding-bottom: 0.3em;
        }

    }
`;


const StoryPage = (props) => {

    return (
        <Theme>
            <Layout>
                <Head title="My story" />
                <StorySection>
                    <Menu />
                    <div className="content">
                        <h1>My story</h1>
                        <Timeline></Timeline>
                    </div>

                </StorySection>
            </Layout>
        </Theme>
    );
};

export default StoryPage;
