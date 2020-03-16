import React, { useState } from 'react';
import { Img, Link } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import styled from 'styled-components';

const BioSection = styled.div`
    margin-top: -200px;;
    height: 100vh;

    .fixedMenu {
        position: fixed;
        z-index: 99999;
        top: 1.3em;
        left: 5em;
    
        @media only screen and (max-width: 550px) {
            top: 0;
            left: 0;
        }
    }

    .closerMenu {
        position: absolute;
        width: 0;
        height: 0;
        right: 10px;
        bottom: 10px;
        border-bottom: 2em solid ${(props) => props.theme.colors.primary};
        border-left: 2em solid transparent;
        cursor: pointer;
    }

    .openerMenu {
        position: relative;
        width: 0;
        height: 0;
        border-top: 2em solid #000;
        border-right: 2em solid transparent;
        cursor: pointer;

        .menu {
            opacity: 0;
            position: absolute;
            overflow: hidden;
            top: -50px;
            height: 0;
            width: 330px;
            background: #000;
            transition: all 0.5s ease-in-out;

            &.visible {
                opacity: 1;
                height: 490px;
            }

            @media only screen and (max-width: 550px) {
                width: 100vw;
                left: 0;

                &.visible {
                    height: 100vh;
                }
            }
        }

        .content {
            padding: 2em 1em;

            .medium-wrapper {
                margin: 2em 0 3em 0;
            }

            @media only screen and (max-width: 550px) {
                padding: 5em 2em;

                .medium-wrapper {
                    margin: 3em 0 5em 0;
                }
            }
        }
        .hero {
            display: block;
            color: #fff;
            font-family: 'Playfair Display';
            font-size: 3rem;
            line-height: 1.1;
            font-weight: 700;
            transition: all 0.3s ease-in;

            &:hover {
                color: ${(props) => props.theme.colors.primary};
            }


            @media only screen and (max-width: 550px) {
                font-size: 4.2rem;
            }
        }

        .medium {
            display: block;
            font-weight: 600;
            font-size: 1.1rem;
            line-height: 1.4;
            color: #fff;
            transition: all 0.3s linear;

            &:hover {
                text-decoration: underline;
            }

            @media only screen and (max-width: 550px) {
                text-align: left;
                font-size: 1.8rem;

            }
        }

        .small {
            display: block;
            color: #fafafa;
            text-align: right;
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 1.3;
            color: #fff;
            transition: all 0.3s linear;

            &:hover {
                text-decoration: underline;
            }

            @media only screen and (max-width: 550px) {
                font-size: 1.4rem;
            }
        }
    }

`;


const BioPage = (props) => {
    const [menuVisibility, setMenuVisibility] = useState(true);


    return (
        <Theme>
            <Layout>
                <Head title="Bio" />
                <BioSection>
                    <div className="fixedMenu">
                        <div className="openerMenu" onClick={() => setMenuVisibility(!menuVisibility)}>
                            <div className={!menuVisibility ? 'menu visible' : 'menu'}>
                                <div className="content">
                                    <Link className="hero" to="">I'm</Link>
                                    <Link className="hero" to="">Designing</Link>
                                    <Link className="hero" to="">My story</Link>
                                    <div className="medium-wrapper">
                                        <Link className="medium" to="/blog">blog</Link>
                                        <Link className="medium" to="">works</Link>
                                    </div>
                                    <a href="https://www.linkedin.com/in/paola-grecuzzo-09071984/" className="small" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <a href="https://www.instagram.com/paol_p_etta" className="small" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <a href="https://www.facebook.com/paola.grecuzzo" className="small" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </div>
                                <div className="closerMenu">

                                </div>
                            </div>
                        </div>
                    </div>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
