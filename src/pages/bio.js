import React, { useState } from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import Menu from '../components/menu';
import styled from 'styled-components';
import face from '../images/face.jpg';


const BioSection = styled.div`
    margin-top: -200px;
    min-height: 100vh;

    .content {
        margin: 30vh 0 0 5rem;
        position: relative;

        .image {
            position: absolute;
            z-index: -1;
            left: 48vw;
            top: 25vw;
            width: 30vw;
            height: 30vw;
            background: url(${face}) no-repeat;
            background-size: contain;
        }
    }

    h1 {
        font-size: 6.8rem;
        line-height: 0.8;
    }

    p {
        max-width: 40vw;
        margin: 5vw 0 0 12vw;
    }

    p:nth-child(4){
        margin: 22vw 0 15vw 18vw
    }

    @media only screen and (max-width: 550px){
        .content {
            margin: 35vh 0 0 1rem;

            .image {
                position: relative;
                z-index: -1;
                left: 0;
                right: 0;
                margin: 0 auto;
                top: 0vw;
                width: 75vw;
                height: 75vw;
            }
        }

        h1 {
            padding-bottom: 0.3em;
        }

        p { max-width: 80vw; margin-left: 5vw}
        p:nth-child(4) {max-width: 80vw; margin: 10vw 0 10vw 5vw;}
}

`;


const BioPage = (props) => {

    return (
        <Theme>
            <Layout>
                <Head title="Bio" />
                <BioSection>
                    <Menu />
                    <div className="content">
                        <h1>I'm</h1>
                        <p>
                            Dagli anni 80, nel tentativo di capire l’ostilità verso tecnologie come il nucleare o l’ingegneria genetica, si è sviluppato un corpus di studi sulla  <strong>percezione del rischio</strong>.<br></br>
                            I fattori che ci influenzano sono molti. La famigliarità ad es. spiega perché, nonostante il numero di vittime, non temiamo rischi a cui siamo assuefatti: incidenti d’auto, inquinamento. Certo, azzardare paragoni fra i rischi è scivoloso. Come mostra la teoria socioculturale, le valutazioni sono influenzate da valori etici e sociali. E poi ogni giorno conviviamo con fonti di rischio che accettiamo in virtù dei benefici che riteniamo di ottenere: no alla produzione di energia elettrica nelle centrali atomiche, sì all’impiego di radiazioni in ospedale.
                        </p>
                        <div className="image"></div>
                        <p>
                            Dagli anni 80, nel tentativo di capire l’ostilità verso tecnologie come il nucleare o l’ingegneria genetica, si è sviluppato un corpus di studi sulla  <strong>percezione del rischio</strong>.<br></br>
                            I fattori che ci influenzano sono molti. La famigliarità ad es. spiega perché, nonostante il numero di vittime, non temiamo rischi a cui siamo assuefatti: incidenti d’auto, inquinamento. Certo, azzardare paragoni fra i rischi è scivoloso. Come mostra la teoria socioculturale, le valutazioni sono influenzate da valori etici e sociali. E poi ogni giorno conviviamo con fonti di rischio che accettiamo in virtù dei benefici che riteniamo di ottenere: no alla produzione di energia elettrica nelle centrali atomiche, sì all’impiego di radiazioni in ospedale.
                        </p>
                    </div>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
