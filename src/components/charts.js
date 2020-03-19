import React from 'react';
import styled from 'styled-components';


const Chart = styled.div`
    overflow: hidden;
    display: flex;
    position: relative;
    margin: 3em auto 0 auto;
    padding-bottom: 5em;
    max-height: 500px;
    align-items: flex-end;
    justify-content: center;

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


    &:last-child{
        flex-direction: row-reverse;
    }
    
    
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
        margin: 0 2em;

        
        >*{pointer-events: none} /* important for clicking on parent only */
        
        .value {
            display: none;
            font-weight: 800;
            font-size: 0.7rem;
            padding: 1em 0;
            text-align: center;
        }

        .bar {
            height: ${props => (props.value / 2.5) || 0}em;
            border-radius: 1em;
            margin: 0 auto;
            width: 1.5em;
            background: ${props => props.color || 'grey'};
        }

        .desc {

            font-size: 0.7rem;
            width: 80px;
                            position: absolute;
                left: -1.7em;
            letter-spacing: -1px;
            text-transform: uppercase;
            font-weight: 600;

            &:before {
                content: '';
                position: absolute;
                top: 8px;
                left: 2.85em;
                bottom: -30px;
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
            padding: 0 1em;
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
            bottom: 5.5em;
            .content {
                padding: 0 1em;
            }
        }

        &:nth-child(4),
        &:nth-child(7){
            .text {
                bottom: 2em;
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

    const skills = [
        {
            name: 'Ux Writing',
            value: '50',
            color: '#30a79d',
            title: 'Ux Writing',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'Research',
            value: '40',
            color: '#2383a2',
            title: 'Research',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'Content Strategy',
            value: '45',
            color: '#743a88',
            title: 'Ux Writing',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'Tone of voice',
            value: '50',
            color: '#061681',
            title: 'Tone of voice',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'Storyframe',
            value: '50',
            color: '#c98e89',
            title: 'Storyframe',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'User test',
            value: '40',
            color: '#c12f29',
            title: 'User test',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'I.A.',
            value: '50',
            color: '#79054f',
            title: 'Information Architecture',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },

        {
            name: 'Storyboard',
            value: '45',
            color: '#c12d7e',
            title: 'Storyboard',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        },
        {
            name: 'Copy',
            value: '50',
            color: '#2d9ec1',
            title: 'Copy',
            text: 'g elit. Laborum praesentium molestiae dignissimos ab optio. Delectus reiciendis, facere autem molestiae accusamus labore in cum ab tempora totam exercitationem. Modi, ratione nesciunt.'
        }
    ]


    return (

        <Chart>
            {skills.map((skill, index) => {
                return (
                    <ChartItem key={index} value={skill.value} desc={skill.name} color={skill.color}>
                        <div className="barContainer" onClick={showCurrentItem} >
                            <div className="bar"></div>
                            <div className="desc"></div>
                        </div>
                        <div className="text">
                            <div className="content">
                                <h2>{skill.title}</h2>
                                {skill.text}
                            </div>
                        </div>
                    </ChartItem>
                );
            })}
        </Chart>

    );
};

export default Charts;
