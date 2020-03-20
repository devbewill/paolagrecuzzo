import React from 'react';
import styled from 'styled-components';
import { getRandomColor } from '../styles/styledComponent';

const Chart = styled.div`
	display: flex;
	position: relative;
	margin: 3em auto 0 auto;
	padding-bottom: 5em;
	max-height: 500px;
	align-items: flex-end;
	justify-content: center;
	transition: padding 0.2s linear;

	@media only screen and (max-width: 550px) {
		margin: 5em 1em;
		max-height: none;
		padding-bottom: 0;

		&.visible {
			padding-bottom: 11em;
		}
	}
`;
const ChartItem = styled.div`
	display: flex;
	align-items: flex-end;

	&:last-child {
		flex-direction: row-reverse;
	}
`;
const BarContainer = styled.div`
	position: relative;
	flex: wrap;
	flex-flow: column;
	align-items: flex-end;
	justify-content: center;
	margin: 0 2em;
	cursor: pointer;

	> * {
		pointer-events: none;
	} /* important for clicking on parent only */

	${Chart}.visible & {
		opacity: 0.2;
	}

	${ChartItem}.visible & {
		opacity: 1;
	}

	@media only screen and (max-width: 550px) {
		margin: 0 auto;
	}
`;
const Bar = styled.div`
    height: ${(props) => props.value / 2.5 || 0}em;
    border-radius: 1em;
    margin: 0 auto;
    width: 1.5em;
    background: ${(props) => props.color || 'grey'};
    /* background: ${getRandomColor}; */

    @media only screen and (max-width: 550px) {
        width: 6.5vw;
        margin: 0.5em;
    }
`;
const Description = styled.div`
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
        content: '${(props) => props.desc}';
        display: block;
        position: absolute;
        top: 3em;
        left: 0;
        right: 0;
        text-align: center;
    }

    @media only screen and (max-width: 550px) {
        position: absolute;
        width: 250px;
        text-transform: uppercase;
        text-align: left;
        transform: rotate(-90deg);
        transform-origin: 0 0;
        left: 6vw;
        color: #fff;

        &:before {
            display: none;
            top: -30px;
            left: 2vw;
        }
        &:after {
            font-size: 1rem;
            font-weight: 800;
            top: -3vw;
            left: 2em;
            text-align: left;
            width: 100%;
        }
    }
`;
const Text = styled.div`
	width: 0;
	overflow: hidden;
	align-self: center;
	transition: width 0.3s linear;
	letter-spacing: -1px;
	font-weight: 400;
	line-height: 1.3;

	.content {
		opacity: 0;
		padding: 0 1em;
		color: transparent;
		transition: opacity 0.3s linear;
		transition-delay: 0.3s;
	}

	${ChartItem}.visible & {
		width: 400px;

		.content {
			color: inherit;
			opacity: 1;
		}
	}

	@media only screen and (max-width: 550px) {
		width: auto;
		position: absolute;
		left: 0;
		top: 21em;

		.content {
			padding: 0;

			h2 {
				font-size: 3rem;
			}
		}

		${ChartItem}.visible & {
			width: auto;
		}
	}
`;

const Charts = (props) => {
	const skills = [
		{
			name: 'Ux Writing',
			value: '50',
			color: '#30a79d',
			title: 'Ux Writing',
			text:
				'I microtesti sono contenuti brevi che aiutano a muoversi in un’interfaccia, la scrittura si fonde con gli elementi visivi e con le funzionalità per guidare le persone a compiere attività. L’obiettivo è semplificare, trovare parole facili per spiegare azioni, etichette, pulsanti.'
		},
		{
			name: 'Research',
			value: '40',
			color: '#2383a2',
			title: 'Research',
			text:
				'Ogni nuovo progetto inizia con un’attività di ricerca in 2 tempi: un momento divergente in cui raccogliere input e spunti variegati e un momento convergente in cui selezionare insight utili da mettere a frutto come driver di progettazione.'
		},
		{
			name: 'Content Strategy',
			value: '45',
			color: '#743a88',
			title: 'Content Strategy',
			text:
				'Lo studio di una strategia passa attraverso la pianificazione e la progettazione dei contenuti in linea con gli obiettivi di business. Si compone di iniziative specifiche che si susseguono in un lasso di tempo medio/lungo.'
		},
		{
			name: 'Tone of voice',
			value: '50',
			color: '#061681',
			title: 'Tone of voice',
			text:
				'Non è ciò che dici, ma come lo dici. Ogni testo ha una personalità; definirla prima di iniziare a scrivere è l’unica maniera per dare vita a contenuti con un’identità specifica e capaci di attivare una conversazione con gli utenti.'
		},
		{
			name: 'Storyframe',
			value: '50',
			color: '#c98e89',
			title: 'Storyframe',
			text:
				"Costruire esperienze non basta, il vero terreno di sfida \u00E8 progettare abitudini: questo metodo di progettazione mette al centro del processo il comportamento dell'utente e contribuisce a far s\u00EC che il servizio/ prodotto progettato entri nella quotidianit\u00E0 d'uso delle persone."
		},
		{
			name: 'User test',
			value: '40',
			color: '#c12f29',
			title: 'User test',
			text:
				'Il content design mira non solo alla chiarezza delle informazioni e all\u2019efficacia della comunicazione ma anche all\u2019usabilt\u00E0. Per questo \u00E8 bene effettuare test utente che diano visibilit\u00E0 all\u2019efficacia reale delle scelte di design in modo da tarare la progettazione su indicatori specifici.'
		},
		{
			name: 'I.A.',
			value: '50',
			color: '#79054f',
			title: 'Information Architecture',
			text:
				'Prima di pensare alle parole \u00E8 bene definire una struttura, un\u2019architettura organizzativa logica e semantica delle informazioni, dei contenuti, dei processi e delle funzionalit\u00E0 di un sistema. Questa attivit\u00E0 permette poi di organizzare i contenuti in maniera razionale.'
		},

		{
			name: 'Storyboard',
			value: '45',
			color: '#c12d7e',
			title: 'Storyboard',
			text:
				'Ogni video parte da una sceneggiatura: lo storyboard guida, sequenza dopo sequenza, raccontando la storia che verr\u00E0 poi resa anche visivamente offrendo una rappresentazione semplificata dei momenti'
		},
		{
			name: 'Copy',
			value: '50',
			color: '#2d9ec1',
			title: 'Copy',
			text:
				'Informare non basta: l\u2019attivit\u00E0 di copywriting mira a scrivere testi accattivanti e persuasivi. Il fine ultimo infatti non \u00E8 solo comunicativo ma commerciale, i testi quindi sono specificamente orientati alla conversione.'
		}
	];

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
				visibleItems[i].classList.remove('visible');
			}

			chart.classList.toggle('visible');
			chartSingle.classList.toggle('visible');
		}
	};

	return (
		<Chart>
			{skills.map((skill, index) => {
				return (
					<ChartItem key={index}>
						<BarContainer onClick={showCurrentItem}>
							<Bar value={skill.value} color={skill.color} />
							<Description desc={skill.name} />
						</BarContainer>
						<Text>
							<div className="content">
								<h2>{skill.title}</h2>
								{skill.text}
							</div>
						</Text>
					</ChartItem>
				);
			})}
		</Chart>
	);
};

export default Charts;
