import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import Timeline from '../components/timeline'
import styled from 'styled-components';


const StorySection = styled.div`
    margin-top: -200px;
    margin-bottom: 8em;
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
            font-size: 5rem;
            padding-bottom: 0.3em;
        }

    }
`;


const StoryPage = (props) => {

    return (
        <Theme>
            <Layout>
                <SEO title="my story" />
                <StorySection>
                    <Menu />
                    <div className="content">
                        <h1 data-sal="slide-right" data-sal-duration="600">My story</h1>
                        <Timeline></Timeline>
                    </div>

                </StorySection>
            </Layout>
        </Theme>
    );
};

export default StoryPage;
