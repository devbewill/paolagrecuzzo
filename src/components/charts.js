import React from 'react';
import styled from 'styled-components';


const Chart = styled.div`
    display: flex;
    margin: 1em 5em 10em 5em;
    max-height: 600px;
    align-items: flex-end;

    @media only screen and (max-width: 550px) {
        margin: 5em 1em;
        max-height: none;
        padding-bottom: 40vh;
    }

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
        flex: wrap;
        flex-flow: column;
        align-items: flex-end;
        justify-content: center;
        margin: 0 1.5em;

        
        >*{pointer-events: none} /* important for clicking on parent only */
        
        .value {
            font-weight: 800;
            font-size: 0.7rem;
            padding: 1em 0;
            text-align: center;
        }

        .bar {
            height: ${props => props.value || 0}vh;
            border-radius: 1em;
            margin: 0 auto;
            width: 30px;
            background: ${props => props.color || 'grey'};
        }

        .desc {

            font-size: 0.6rem;
            width: 70px;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                top: 5px;
                left: 50%;
                bottom: -25px;
                width: 1px;
                background-color: #000;
            }

            &:after {
                content: '${props => props.desc}';
                display: block;
                position: absolute;
                top: 3em;
                left: 0;
                right: 0;
                text-align: center;
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
    }

    @media only screen and (max-width: 550px) {

        .barContainer {
            margin: 0 auto;

            .value {
                padding: 0.5em;
            }
            .bar {
                width: 6.5vw;
                margin: 0.5em;
            }

            .desc { 
                position: absolute;
                width: 250px;
                text-transform: uppercase;
                text-align: left;
                transform: rotate(-90deg);
	            transform-origin: 0 0;
                left: 6vw;
                color: #fff;
                
                }
            .desc:before {
                display: none;
                top: -30px;
                left: 2vw;

                
            }
            .desc:after {
                font-size: 1rem;
                font-weight: 800;
                top: -3vw;
                left: 2em;
                text-align: left;
                width: 100%;
            }
        }

        .text {
            width: auto;
            position: absolute;
            left: 0;
            bottom: -22vh;
            .content {
                padding: 0 1em;
            }
        }

        &.visible {

        .text {
            width: auto;
            }
        }
    }


`;



const Charts = (props) => {

    const showCurrentItem = (event) => {
        event.preventDefault();

        let target = event.target;
        let chart = target.parentNode.parentNode;
        let chartSingle = target.parentNode;

        if (chartSingle.classList.contains('visible')) {

            chart.classList.toggle('visible');
            chartSingle.classList.toggle('visible');
        } else {

            let visibleItems = document.querySelectorAll('.visible');
            for (var i = 0; i < visibleItems.length; i++) {
                visibleItems[i].classList.remove('visible')
            }

            chart.classList.toggle('visible');
            chartSingle.classList.toggle('visible');

        }
    }

    return (

        <Chart>
            <ChartItem value="50" desc="Ux Writing" color="#30a79d">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">100%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Ux Writing</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="40" desc="Research" color="#2383a2">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">80%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Research</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="50" desc="Tone of voice" color="#061681">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">100%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Tone of voice</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="45" desc="Content strategy" color="#743a88">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">90%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Content strategy</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="50" desc="Storyframes" color="#c98e89">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">100%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Storyframes</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="40" desc="User test" color="#c12f29">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">80%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>User test</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="50" desc="Information Architecture" color="#79054f">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">100%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Information Architecture</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
            <ChartItem value="45" desc="Storyboard" color="#c12d7e">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">90%</div>
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
            <ChartItem value="50" desc="Copy" color="#2d9ec1">
                <div className="barContainer" onClick={showCurrentItem}>
                    <div className="value">100%</div>
                    <div className="bar"></div>
                    <div className="desc"></div>
                </div>
                <div className="text">
                    <div className="content">
                        <h2>Copy</h2>
                        Lorem ipsum dolor st amet consectetur, adipisicing elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.

                    </div>
                </div>
            </ChartItem>
        </Chart>

    );
};

export default Charts;
