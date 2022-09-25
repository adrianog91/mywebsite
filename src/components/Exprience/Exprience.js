import React from 'react'
import { Link } from 'react-router-dom'
import nexusLogo from '../../images/work/logo-nexusat.jpg'
import orangedevLogo from '../../images/work/orangedev-logo.png'
import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
    {
        date: '2017 - 2019',
        logo: nexusLogo,
        position: '.NET & Mobile hybrid developer',
        companyName: 'Nexus Advanced Technologies',
        workFrom: '',
        url: 'https://www.nexusat.it'
    },
    {
        date: '2019 - Present',
        logo: orangedevLogo,
        position: 'Azure cloud .Net & React.js Developer',
        companyName: 'Orangedev',
        workFrom: '',
        url: 'https://www.orangedev.it'
    }
]


const Exprience = (props) => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
                <SectionTitle Title={'My Work Experience'}/>
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                <li className="logo"><img src={exprience.logo} alt="" width="100"/></li>
                                <li className="position">{exprience.position} <span>{exprience.companyName}
                                    <span>{exprience.workFrom}</span></span></li>
                                <li className="link">
                                    <Link
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        to={{ pathname: '../' + exprience.url }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(exprience.url)
                                        }}>
                                        Go to website
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Exprience;
