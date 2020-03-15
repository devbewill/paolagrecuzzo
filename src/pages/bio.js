import React, { useState } from 'react';
import { Img, Link } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import styled from 'styled-components';

const BioSection = styled.div`
    margin-top: -200px;;
    height: 100vh;

    .closerMenu {
        position: absolute;
        width: 0;
        height: 0;
        right: 10px;
        bottom: 10px;
        border-bottom: 50px solid ${(props) => props.theme.colors.primary};
        border-left: 50px solid transparent;
        cursor: pointer;
    }

    .openerMenu {
        position: relative;
        top: 10vh;
        left: 5em;
        width: 0;
        height: 0;
        border-top: 50px solid #000;
        border-right: 50px solid transparent;
        cursor: pointer;

        .menu {
            opacity: 0;
            position: absolute;
            overflow: hidden;
            top: -50px;
            height: 480px;
            width: 350px;
            background: #000;
            transition: all 0.3s ease-in-out;

            &.visible {
                opacity: 1
            }
        }

        .content {
            padding: 2em;

            .medium-wrapper {
                margin: 2em 0;
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
            line-height: 1.3;
            color: #fff;
            transition: all 0.3s linear;

            &:hover {
                text-decoration: underline;
            }

            @media only screen and (max-width: 550px) {
                text-align: left;
            }
        }

        .small {
            display: block;
            color: #fafafa;
            text-align: right;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.2;
            color: #fff;
            transition: all 0.3s linear;

            &:hover {
                text-decoration: underline;
            }

            @media only screen and (max-width: 550px) {
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
                    <div className="openerMenu" onClick={() => setMenuVisibility(!menuVisibility)}>
                        <div className={!menuVisibility ? 'menu visible' : 'menu'}>
                            <div className="content">
                                <Link className="hero" to="">I'm</Link>
                                <Link className="hero" to="">Designing</Link>
                                <Link className="hero" to="">My story</Link>
                                <div className="medium-wrapper">
                                    <Link className="medium" to="">blog</Link>
                                    <Link className="medium" to="">works</Link>
                                </div>
                                <Link className="small" to="">LinkedIn</Link>
                                <Link className="small" to="">Instagram</Link>
                                <Link className="small" to="">Facebook</Link>
                            </div>
                            <div className="closerMenu">

                            </div>
                        </div>
                    </div>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
