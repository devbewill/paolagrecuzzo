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
        margin: 30vh 0 10vh 5rem;
        position: relative;

        .image {
            position: fixed;
            z-index: -1;
            left: 65vw;
            top: 20vw;
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
        max-width: 45vw;
        margin: 2em 0 0 5em; 

       
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
                        <p style={{ marginTop: '6em' }}>
                            Sono nata il 9 luglio, nel bel mezzo di un'estate catanese di sole e d'azzurro.<br></br>
                            <strong>Annata 1984</strong>, la stessa in cui Apple presenta il primo Mac e in cui Orwell ambienta il romanzo che proprio da quest'anno prende il nome.
                        </p>
                        <div className="image"></div>
                        <p>
                            Nei primi anni di vita non ho fatto molto, ero occupata a pettinare le bambole, cercare di prendere con una fava due piccioni e giocare coll’ego.<br></br>
                            Conseguita la maturità classica, mi sono iscritta alla facoltà di Lettere presso l'<strong>Università di Catania</strong>. Poi, assecondando la mia natura vagabonda, <strong>ho continuato la mia formazione a Milano</strong> iscrivendomi al Corso di laurea specialistica in Culture e linguaggi per la comunicazione. Il primo anno l’ho dedicato alla memorizzazione del nome dell’indirizzo accademico, nei restanti dodici mesi mi sono impegnata nel disperato tentativo di dimenticarlo. Nel 2008 ho concluso gli studi portando a casa la bellezza di <strong>110 punti di votazione e ben 41964 miglia Alitalia</strong>.

                        </p>
                        <p>La smania di conoscere il mondo mi porta in questi anni in giro per i continenti ad assorbire quante più esperienze possibili; tra queste, uno <strong>stage presso l'Ambasciata italiana in Croazia</strong> a seguito di un concorso nazionale che mi vede prima classificata.</p>

                        <p>Nella piena crisi della old economy, in economy e con molta voglia di new, approdo al mondo del lavoro come <strong>copy</strong> in Erremme Associati per Montblanc, UniCredit, Zurich, Hilton, Santander, Cesvi, De Beers e altri. Qualche anno dopo, sempre in Erremme, passo alla <strong>Direzione Creativa</strong>.<br></br>
                        Nel 2015 decido di mettere in piedi uno spazio tutto mio <strong>dando vita a Cubilia</strong>, piccola agenzia che lavora per De Beers, Ospedale Niguarda, Platinum Guild, Ente Turismo Langhe.
                        Più tardi scopro il mondo della consulenza ed entro a far parte del team di <strong>Digital Entity</strong>, studio di design di NTT DATA ITALIA. Qui progetto per Mediaset, Coop, Nexi, Brunello Cucinelli, Enel, Poste Italiane, UniCredit, Conad, Telepass.
                        </p>

                        <p>Per placare la mia anima gitana mi ritaglio, ogni qualvolta posso, weekend in giro per il mondo, visito mete lontane guidata dalle parole dei miei romanzieri preferiti e mi ostino, senza possibilità di redenzione, a compiere giornalmente <strong>voli d'immaginazione</strong>.</p>

                        <p>Sorrido spesso, disegno durante le riunioni, abuso di carboidrati e serie tv.
                        Amo le parole, le scarpe, i raggi del sole, i film francesi, la curiosità e <strong>la parmigiana di mamma</strong>.
                    </p>
                    </div>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
