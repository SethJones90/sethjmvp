import React, { Component } from 'react'
import rails from '../assets/icons/rails.png';
import vue from '../assets/icons/vue.png';
import node from '../assets/icons/node.png';
import react from '../assets/icons/react.svg';
import html from '../assets/icons/html5.svg';
import js from '../assets/icons/javascript.svg';
import css from '../assets/icons/css3.svg';


class Landing extends Component {

  showTech = () => {
    console.log("CLICKED")
    let accordion = this.refs.tech;
    let svg = this.refs.circle1;
    console.log(accordion);
    
    if (accordion.classList.contains("tech-visible")) {
      svg.removeAttribute('fill',"red");
      svg.setAttribute('fill',"white");
      accordion.classList.remove("tech-visible");
      accordion.classList.add("not-visible");   
    } else {
      svg.setAttribute('fill',"red");
      accordion.classList.remove("not-visible");
      accordion.classList.add("tech-visible");
      
    }
    
  }


  showServices = () => {
    let accordion = this.refs.services;
    let svg = this.refs.circle2;
    
    if (accordion.classList.contains("services-visible")) {
      svg.removeAttribute('fill',"red");
      svg.setAttribute('fill',"white");
      accordion.classList.remove("services-visible");
      accordion.classList.add("not-visible");   
    } else {
      svg.setAttribute('fill',"red");
      accordion.classList.remove("not-visible");
      accordion.classList.add("services-visible");
      
    }
    
  }

  showAbout = () => {
    let accordion = this.refs.about;
    let svg = this.refs.circle3;
    
    if (accordion.classList.contains("about-visible")) {
      svg.removeAttribute('fill',"red");
      svg.setAttribute('fill',"white");
      accordion.classList.remove("about-visible");
      accordion.classList.add("not-visible");   
    } else {
      svg.setAttribute('fill',"red");
      accordion.classList.remove("not-visible");
      accordion.classList.add("about-visible");
    
    }  
  }

  render() {
    return (
    <div>
      <div className="skills-container">
        <div className="item-container">
          <p className="item-text">TECH</p>
          <svg className="svg-circle" width="30" height="30">
            <circle id="circle1" ref="circle1" cx="15" cy="15" r="15" fill="white" onClick={this.showTech}/>
          </svg>
        </div>
        <div className="item-container">   
          <p className="item-text">SERVICES</p>
          <svg className="svg-circle" width="30" height="30">
            <circle id="circle2" ref="circle2" cx="15" cy="15" r="15" fill="white" onClick={this.showServices}/>
          </svg>
        </div>
        <div className="item-container">  
          <p className="item-text">ABOUT</p>
          <svg className="svg-circle" width="30" height="30">
            <circle id="circle3" ref="circle3" cx="15" cy="15" r="15" fill="white" onClick={this.showAbout}/>
          </svg>
        </div>
      </div>
      
      <div id="tech" ref="tech" className="not-visible">
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
      
      <div id="services" ref="services" className="not-visible">
        <p className="heading">WHAT I CAN DO FOR YOU</p>
        <p className="services-text-1">MVP:</p>
        <p className="services-text-2"></p>
        <p className="services-text-2">DEV</p>
        <p className="services-text-2">/</p>
        <p className="services-text-2">UX</p>
        <p className="services-text-2">/</p>
        <p className="services-text-2">UI</p>
      </div>
      
      <div id="about" ref="about" className="not-visible">
        <p className="heading">THE JOURNEY</p>
        <p className="about-text-1">MUSIC</p>
        <p className="about-text-2">=></p>
        <p className="about-text-1">BIZ</p>
        <p className="about-text-2">=></p>
        <p className="about-text-1">DEV</p>
        <p className="about-text-2">=></p>
        <p className="about-text-1">UX</p>
      </div>
      
    
      
      <div className="tagline-container">
        <div className="container-content">
          <h1>SETH JONES</h1>
          <h3>LET'S BUILD <span className="red">YOUR MVP.</span></h3>
              <button className="hero-button">WHY ME?</button><button className="hero-button">GET IN TOUCH</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing;