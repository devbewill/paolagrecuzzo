import React from 'react';
import styled from 'styled-components';


const Chart = styled.div`
    display: flex;
    margin: 1em 5em;
    max-height: 500px;
    align-items: flex-end;

    cursor: pointer;

        &.visible {
            .barContainer {
                opacity: 0.2;
            }
    }
`;

const ChartItem = styled.div`
    display: flex;
    align-items: flex-end;

    &.visible {
        .barContainer {
            opacity: 1;
        }
        .text {
            width: 500px;

            .content {
                color: inherit;
                opacity: 1;
            }
        }
    }

    .barContainer {
        position: relative;
        align-items: flex-end;
        flex-flow: column;
        padding: 0.5em;
        
        >*{pointer-events: none} /* important for clicking on parent only */
        
        .value {
            font-weight: 800;
            font-size: 0.8rem;
            padding: 1em 0;
        }

        .bar {
            height: ${props => props.value || 0}vh;
            border-radius: 1em;
            width: 2vw;
            background: ${props => props.color || 'grey'};
        }

        .desc {
            font-size: 0.8rem;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                top: -35px;
                left: 50%;
                bottom: 25px;
                width: 1px;
                background-color: #000;
            }

            &:after {
                content: '${props => props.desc}';
                display: block;
                margin-top: 3em;
                text-align:center;
            }
        }
    }

    .text {
        width: 0;
        overflow: hidden;
        align-self: center;
        transition: width 0.3s linear;
        
        .content {
            opacity: 0;
            padding: 0 2em;
            color: transparent;
            transition: opacity 0.3s linear;
            transition-delay: 0.3s;
        }
    
        @media only screen and (max-width: 550px) {
          
        }
    }

`;



const Charts = (props) => {

    const showCurrentItem = (event) => {
        event.preventDefault();
        let visibleItems = document.querySelectorAll('.visible');
        for (var i = 0; i < visibleItems.length; i++) {
            visibleItems[i].classList.remove('visible')
        }

        let target = event.target;
        let chart = target.parentNode.parentNode;
        let chartSingle = target.parentNode;
        chart.classList.toggle('visible');
        chartSingle.classList.toggle('visible');
    }

    return (

        <Chart>
            <ChartItem value="12" desc="aaa" color="orangered">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">12%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>titolo</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="34" desc="bbb" color="deeppink">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">34%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>titolo</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="22" desc="ccc" color="springgreen">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">22%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>titolo</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
        </Chart>

    );
};

export default Charts;
