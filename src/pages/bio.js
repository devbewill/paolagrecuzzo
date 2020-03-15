import React, { useState } from 'react';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import Head from '../components/head';
import styled from 'styled-components';

const BioSection = styled.div`
    margin-top: -200px;;
    height: 100vh;

    .openerMenu {
        position: relative;
        top: 25vh;
        left: 5em;
        width: 50px;
        height: 50px;
        background: #000;

        .menu {
            position: absolute;
            height: 0;
            width: 400px;
            background: #000;
            transition: all 0.4s ease-in;

            &.visible {
                height: 600px;
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

                        </div>
                    </div>

                </BioSection>
            </Layout>
        </Theme>
    );
};

export default BioPage;
