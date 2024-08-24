import React from 'react'
import About from './page/about.jsx'
import Service from './page/service.jsx'
import Project from './page/project.jsx'
import Testimoni from './page/testimoni.jsx'
import AutoSlide from './page/autoSlider.jsx'

function konten(){
    return(
        <>
            <div className='about' id='about'>
                <About />
            </div>
            <div className="skill-app">
                <AutoSlide />
            </div>
            <div className="service" id='service'>
                <Service />
            </div>
            <div className="project" id='project'>
                <Project />
            </div>
            <div className="testimoni" id='testimoni'>
                <Testimoni />
            </div>
        </>
    )
    }

export default konten