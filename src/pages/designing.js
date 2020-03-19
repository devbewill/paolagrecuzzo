import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import Charts from '../components/charts'
import styled from 'styled-components';

const DesigningSection = styled.div`
    margin-top: -200px;
    margin-bottom: 8em;
    min-height: 100vh;

    .sectionContent {
        margin: 30vh 0 0 5rem;
        position: relative;
    }

    h1 {
        font-size: 6.8rem;
        line-height: 0.8;
        padding-bottom: 0.3em;
    }

    p {
        max-width: 45vw;
        margin: 4em 0 0 5em; 
        font-weight: 400;
        letter-spacing: -1px;
        font-size: 1.1rem;
        line-height: 1.7;
    }

    @media only screen and (max-width: 550px){
        .sectionContent {
            margin: 35vh 1rem 0 1rem;
        }

        h1 {
            font-size: 5rem;
            padding-bottom: 0.3em;
        }

        p{
            max-width: none;
            margin: 2em 0 0 0;
        }
    }

`;

const DesigningPage = (props) => {


    return (
        <Theme>
            <Layout>
                <SEO title="Designing" />
                <Menu />
                <DesigningSection>
                    <div className="sectionContent">
                        <h1 data-sal="slide-right" data-sal-duration="600" >Designing</h1>
                        <p data-sal="slide-up" data-sal-duration="800">Il Content Design progetta esperienze (di prodotto o di servizio) iniziando dal contenuto, non dai pixel. Il vantaggio è enorme: il contenuto stesso diventa il <strong>materiale di progettazione</strong>.<br></br><br></br>
                            È così che utilizzo la scrittura come tecnologia. D’altronde, progettare un flusso è molto simile a scrivere una storia interattiva: <strong>il designer è un narratore</strong> che guida l'utente da una scena all'altra.</p>
                    </div>
                    <Charts></Charts>

                </DesigningSection>
            </Layout>
        </Theme>
    );
};

export default DesigningPage;
