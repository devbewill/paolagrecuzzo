import React from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';
import styled from 'styled-components';
import avatar from '../images/avatar.jpeg'


const BioSection = styled.div`
    margin-top: -200px;
    min-height: 100vh;

    .content {
        margin: 30vh 0 10vh 5rem;
        position: relative;

        .image {
            position: fixed;
            z-index: -1;
            top: 10vw;
            bottom: 0;
            left: 40vw;
            right: 0;
            background: url(${avatar}) no-repeat;
            background-size: cover;
        }
    }

    h1 {
        font-size: 6.8rem;
        line-height: 0.8;
    }

    p {
        max-width: 45vw;
        margin: 2em 0 0 5em; 
        font-weight: 400;
        letter-spacing: -1px;
        font-size: 1.1rem;
        line-height: 1.7;
    }

    p:nth-child(4) {
        margin-top: 4em;

        max-width: 450px;
    }

    p:nth-child(5) {
        margin-top: 4em;
        margin-left: 15vw;
    }

    p:nth-child(6) {
        margin-top: 4em;

    }

    p:nth-child(7) {
        margin-top: 4em;
        margin-bottom: 10em;
    }

    p:nth-child(8) {
        margin-top: 4em;

    }




    @media only screen and (max-width: 550px){
        .content {
            margin: 35vh 1rem 0 1rem;

            .image {
                position: relative;
                margin: 0;
                width: auto;
                min-height: 58vh;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin-top: -10vh;
                background: url(${avatar}) no-repeat;
                background-size: 187%;
                background-position: -25vw bottom;
            }
        }

        h1 {
            font-size: 5rem;
            padding-bottom: 0.3em;
        }

        p,
        p:nth-child(4),
        p:nth-child(5),
        p:nth-child(6),
        p:nth-child(7),
        p:nth-child(8) {
            max-width: none;
            margin: 3em 0;
        }
    }

`;


const BioPage = (props) => {

    return (
        <Theme>
            <Layout>
                <SEO title="Bio" />
                <BioSection>
                    <Menu />
                    <div className="content">
                        <h1 data-sal="slide-right" data-sal-duration="600" data-sal-delay="300">I'm</h1>
                        <p data-sal="slide-up" data-sal-duration="800" style={{ marginTop: '6em' }}>
                            Sono nata il 9 luglio, nel bel mezzo di un'estate catanese di sole e d'azzurro.<br></br>
                            <strong>Annata 1984</strong>, la stessa in cui Apple presenta il primo Mac e in cui Orwell ambienta il romanzo che proprio da quest'anno prende il nome.
                        </p>
                        <p data-sal="slide-up" data-sal-duration="800">
                            Nei primi anni di vita non ho fatto molto, ero occupata a pettinare le bambole, cercare di prendere con una fava due piccioni e giocare coll’ego.<br></br>
                            Dopo il liceo mi sono iscritta alla facoltà di Lettere. Poi, assecondando la mia natura vagabonda, <strong>ho continuato la mia formazione a Milano</strong> iscrivendomi al Corso di laurea specialistica in Culture e linguaggi per la comunicazione. Il primo anno l’ho dedicato alla memorizzazione del nome dell’indirizzo accademico, nei restanti dodici mesi mi sono impegnata nel disperato tentativo di dimenticarlo. Nel 2008 ho concluso gli studi portando a casa la bellezza di <strong>110 punti di votazione e ben 41964 miglia Alitalia</strong>.

                        </p>
                        <p data-sal="slide-up" data-sal-duration="800">La smania di conoscere il mondo mi porta in questi anni in giro per i continenti ad assorbire quante più esperienze possibili; tra queste, uno <strong>stage presso l'Ambasciata italiana in Croazia</strong>.</p>

                        <p data-sal="slide-up" data-sal-duration="800">Nella piena crisi della old economy, in economy e con molta voglia di new, approdo al mondo del lavoro come <strong>copy</strong> in Erremme Associati per Montblanc, UniCredit, Zurich, Hilton, Santander, Cesvi, De Beers e altri. <br></br>Qualche anno dopo, sempre in Erremme, passo alla <strong>Direzione Creativa</strong>.<br></br>
                        Nel 2015 decido di mettere in piedi uno spazio tutto mio <strong>dando vita a Cubilia</strong>, piccola agenzia che lavora per De Beers, Ospedale Niguarda, Platinum Guild, Ente Turismo Langhe.<br></br>
                        Più tardi scopro il mondo della consulenza ed entro a far parte del team di <strong>Digital Entity</strong>, studio di design di NTT DATA ITALIA. Qui progetto per Mediaset, Coop, Nexi, Brunello Cucinelli, Enel, Poste Italiane, UniCredit, Conad, Telepass.
                        </p>

                        <p data-sal="slide-up" data-sal-duration="800">Per placare la mia anima gitana mi ritaglio, ogni qualvolta posso, weekend in giro per il mondo, visito mete lontane guidata dalle parole dei miei romanzieri preferiti e mi ostino, senza possibilità di redenzione, a compiere giornalmente <strong>voli d'immaginazione</strong>.</p>

                        <p data-sal="slide-up" data-sal-duration="800">Sorrido spesso, disegno durante le riunioni, abuso di carboidrati e serie tv.
                        Amo le parole, le scarpe, i raggi del sole, i film francesi, la curiosità e <strong>la parmigiana di mamma</strong>.
                    </p>
                        <div data-sal="zoom-in" data-sal-duration="800" className="image"></div>
                    </div>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
