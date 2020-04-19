import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import rails from '../assets/icons/rails.png';
import vue from '../assets/icons/vue.png';
import node from '../assets/icons/node.png';
import react from '../assets/icons/react.svg';
import html from '../assets/icons/html5.svg';
import js from '../assets/icons/javascript.svg';
import css from '../assets/icons/css3.svg';
import GetInTouch from './GetInTouch';
import WhyMe from './WhyMe';

class Landing extends Component {

  showTech = () => {
    let accordion = this.refs.tech;
    let svg = this.refs.circle1;
    let pulse = this.refs.pulse1;
    
    if (accordion.classList.contains("tech-visible")) {
      svg.removeAttribute('fill',"red");
      svg.setAttribute('fill',"white");

      pulse.removeAttribute('stroke',"red");
      pulse.setAttribute('stroke',"white");
      pulse.setAttribute('stroke-width', "0");

      accordion.classList.remove("tech-visible");
      accordion.classList.add("not-visible");   
    } else {
      svg.setAttribute('fill',"red");

      pulse.setAttribute('stroke-width', "2");
      pulse.setAttribute('stroke',"red");

      accordion.classList.remove("not-visible");
      accordion.classList.add("tech-visible");
      
    }
    
  }


  showServices = () => {
    let accordion = this.refs.services;
    let svg = this.refs.circle2;
    let pulse = this.refs.pulse2;
    
    if (accordion.classList.contains("services-visible")) {
      svg.removeAttribute('fill',"red");
      svg.setAttribute('fill',"white");

      pulse.removeAttribute('stroke',"red");
      pulse.setAttribute('stroke',"white");
      pulse.setAttribute('stroke-width', "0");

      accordion.classList.remove("services-visible");
      accordion.classList.add("not-visible");   
    } else {
      svg.setAttribute('fill',"red");

      pulse.setAttribute('stroke-width', "2");
      pulse.setAttribute('stroke',"red");

      accordion.classList.remove("not-visible");
      accordion.classList.add("services-visible");
      
    }
    
  }

  showAbout = () => {
    let accordion = this.refs.about;
    let svg = this.refs.circle3;
    let pulse = this.refs.pulse3;
    
    if (accordion.classList.contains("about-visible")) {
      svg.removeAttribute('fill',"red");
      svg.setAttribute('fill',"white");

      pulse.removeAttribute('stroke',"red");
      pulse.setAttribute('stroke',"white");
      pulse.setAttribute('stroke-width', "0");

      accordion.classList.remove("about-visible");
      accordion.classList.add("not-visible");   
    } else {
      svg.setAttribute('fill',"red");

      pulse.setAttribute('stroke-width', "2");
      pulse.setAttribute('stroke',"red");

      accordion.classList.remove("not-visible");
      accordion.classList.add("about-visible");
    
    }  
  }

  render() {
    return (
    <div className="landing">
      <div className="flex-container">
        <div className="tagline-container">
          <div className="container-content">
            <h1 className="landing-h1">SETH JONES</h1>
            <h3 className="landing-h3">LET'S BUILD <span className="red">YOUR MVP.</span></h3>
            <Link to="/why-me">
              <button className="hero-button">WHY ME?</button>
            </Link>
            <Link to="/get-in-touch"> 
            <button className="hero-button">GET IN TOUCH</button>
            </Link>
          </div>
        </div>

        <div className="skills-container">
          <div className="item-container">
            <p className="item-text">TECH</p>
            {/* <svg className="svg-circle" width="30" height="30">
              <circle id="circle1" ref="circle1" cx="15" cy="15" r="15" fill="white" onClick={this.showTech}/>
            </svg>
          */}

            <svg className="svg-circle" width="30" height="30" viewBox="0 0 40 40">
              <circle cx="20" cy="20" fill="none" r="20" stroke="white" strokeWidth="0" ref="pulse1">
                <animate attributeName="r" from="15" to="30" dur="1.5s" begin="0s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"/>
              </circle>
              <circle cx="20" cy="20" fill="white" r="16" id="circle1" ref="circle1" onClick={this.showTech}/>
            </svg>


          </div>
          <div className="item-container">   
            <p className="item-text">SERVICES</p>
            <svg className="svg-circle" width="30" height="30" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="none" r="20" stroke="white" strokeWidth="0" ref="pulse2">
                <animate attributeName="r" from="15" to="30" dur="1.5s" begin="0s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"/>
              </circle>
              <circle cx="20" cy="20" fill="white" r="16" id="circle2" ref="circle2" onClick={this.showServices}/>
            </svg>
          </div>
          <div className="item-container">  
            <p className="item-text">ABOUT</p>
            <svg className="svg-circle" width="30" height="30" viewBox="0 0 40 40">
              <circle cx="20" cy="20" fill="none" r="20" stroke="white" strokeWidth="0" ref="pulse3">
                <animate attributeName="r" from="15" to="30" dur="1.5s" begin="0s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"/>
              </circle>
              <circle cx="20" cy="20" fill="white" r="16" id="circle3" ref="circle3" onClick={this.showAbout}/>
            </svg>
          </div>
        </div>
        
        <div id="tech-popup" ref="tech" className="not-visible">
          <p className="heading">WEAPONS AT YOUR DISPOSAL</p>
          <div className="tech-item">
            <img className="tech-icon" src={rails}/>
          </div> 
          <div className="tech-item">
            <img className="tech-icon" src={vue} />
          </div>
          <div className="tech-item">
            <img className="tech-icon" src={node} /> 
          </div>
          <div className="tech-item">
            <img className="tech-icon" src={react} />
          </div>
          <div className="tech-item">
            <img className="tech-icon" src={html} />
          </div>
          <div className="tech-item">
          <img className="tech-icon" src={js} />
          </div>
          <div className="tech-item">
            <img className="tech-icon" src={css} /> 
          </div>
        </div>
        
        <div id="services-popup" ref="services" className="not-visible">
          <p className="heading">WHAT I CAN DO FOR YOU</p>
          <p className="services-text-1">MVP:</p>
          <p className="services-text-2"></p>
          <p className="services-text-2">DEV</p>
          <p className="services-text-2">/</p>
          <p className="services-text-2">UX</p>
          <p className="services-text-2">/</p>
          <p className="services-text-2">UI</p>
        </div>
        
        <div id="about-popup" ref="about" className="not-visible">
          <p className="heading">THE JOURNEY</p>
          <p className="about-text-1">MUSIC</p>
          <p className="about-text-2">=></p>
          <p className="about-text-1">BIZ</p>
          <p className="about-text-2">=></p>
          <p className="about-text-1">DEV</p>
          <p className="about-text-2">=></p>
          <p className="about-text-1">UX</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing;


