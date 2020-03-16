import React from 'react';
import styled from 'styled-components';

const Timeline = () => {

	const history = [
		{
			year: '2017',
			role: 'Senior Content Designer',
			company: 'Digital Entity (Ntt Data Design Studio)'
		},
		{
			year: '2015',
			role: 'Co-founder e Creative Director',
			company: 'Cubilia'
		},
		{
			year: '2013',
			role: 'Creative Director',
			company: 'Erremme Associati'
		},
		{
			year: '2009',
			role: 'Copywriter',
			company: 'Erremme Associati'
		},
		{
			year: '2008',
			role: 'Laurea in Comunicazione Editoriale',
			company: ''
		},
		{
			year: '2007',
			role: 'Stage all’Istituto Italiano di Cultura',
			company: 'Ambasciata italiana in Croazia'
		},
		{
			year: '2006',
			role: 'Laurea in Lettere moderne',
			company: ''
		},
		{
			year: '1984',
			role: 'Buongiorno mondo!',
			company: ''
		}
	];

	const TimelineSection = styled.section`
		margin-top: 5em;

		.entriesWrapper {
			padding-top: 5em;
			position: relative;
			min-height: 90vh;
			margin: 0;
			overflow: hidden;
			
			&:before {
				content: " ";
				bottom: 0;
				top: 19px;
				left: 20px;
				border: 1px solid transparent;
				height: 0;
				width: 0;
				position: absolute;
				pointer-events: none;
				border: 3px solid #fff;
				border-width: 0 0 2px 2px;
				width: 16px;
				height: 16px;
				line-height: 0;
				font-size: 0;
				transform: rotate(135deg);
				margin-left: -7px;

				@media only screen and (min-width: 900px) {
					lefT: 50%;
					border: 3px solid #000;
					border-width: 0 0 2px 2px;
				}
			}

			&:after { 
				content: '';
				position: absolute;
				top: 20px;
				left: 20px;
				bottom: 0px;
				width: 2px;
				background-color: #fff;
				@media only screen and (min-width: 900px) {
					left: 50%;
					background-color: #000;
				}
			} 

			.entries {
				width: calc(100% - 80px);
				max-width: 800px;
				margin: auto;
				position: relative;
				left: -5px;

				.entry {
					position: relative;
					width: 100%;
					float: right;
					padding: 50px 20px;
					clear: both;
					text-align: left;
					margin-top: -50px;

					&.visible {
						.body {
							opacity: 1;
						}
					}
					
					&:hover {
						.body {
							opacity: 1;
						}
					}

					@media only screen and (min-width: 900px) {
						width: calc(50% - 80px);
						padding: 80px 20px;
					}

					.title {
						font-family: 'Gothic A1', sans-serif;
						font-weight: 900;
						letter-spacing: -1px;
						font-size: 1.7rem;
						line-height: 0.8;
						padding-left: 0;
						position: relative;
						cursor: pointer;
						transition: all 0.2s ease-in-out;
						
						&:hover {
							color: ${(props) => props.theme.colors.primary};
							&:before {
								background-color: ${(props) => props.theme.colors.primary};
							}
						}

						&:before {
							content: '';
							position: absolute;
							width: 18px;
							height: 18px;
							background-color: #000;
							border-radius: 100%;
							top: 5px;
							right: calc(100% + 25px);
							z-index: 1000;

							@media only screen and (min-width: 900px) {
								right: calc(100% + 85px);
							}
						}
					}
					.body {
						transition: all 0.3s linear;
						p {
							font-size: 1.3rem;
							font-weight: 800;
							margin: 0.8em 0 1em;
							text-transform: uppercase;
							letter-spacing: -1px;
							line-height: 1.2;

							span {
								display: block;
								font-size: 1.2rem;
								font-weight: 400;
								line-height: 1.5;
								text-transform: none;
								letter-spacing: initial;
							}
						}
					}

					.body {
						@media only screen and (min-width: 900px) {
							position: absolute;
							opacity: 0;
							top: 55px;
							right: 27em;
							min-width: 330px;
							text-align: right;
							.title {
								&:before {
									left: calc(100% + 98px);
								}
								&.big:before {
									transform: translate(-8px, -50%);
								}
							}
						}
					}

/* 
					&:nth-child(2n) {
						@media only screen and (min-width: 900px) {
							text-align: right;
							float: left;
							.title {
								&:before {
									left: calc(100% + 98px);
								}
								&.big:before {
									transform: translate(-8px, -50%);
								}
							}
						}
					} */
				}
			}
		}
	`;

	const showCurrentItem = (event) => {
		event.preventDefault();
		let target = event.target;
		let parent = target.parentElement;
		parent.classList.toggle('visible');


	}

	return (
		<TimelineSection>
			<div className="entriesWrapper">
				<div className="entries">
					{history.map((job, index) => {
						return (
							<div key={index} className="entry" onClick={showCurrentItem}>
								<a className="title" >{job.year} </a>
								<div className="body">
									<p>
										{job.role}
										<span>{job.company}</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</TimelineSection>
	);
};

export default Timeline;
