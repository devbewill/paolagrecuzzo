import React from 'react';
import { graphql } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import Charts from '../components/charts'
import styled from 'styled-components';

const DesigningSection = styled.div`


`;

const DesigningPage = (props) => {


    return (
        <Theme>
            <Layout>
                <SEO title="designing" />
                <Menu />
                <DesigningSection>
                    <Charts></Charts>

                </DesigningSection>
            </Layout>
        </Theme>
    );
};

export default DesigningPage;
