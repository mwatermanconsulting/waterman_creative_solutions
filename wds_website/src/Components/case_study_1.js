import React, { Component } from 'react'
import motorola_bg from '../images/bg-motorola.png';
import motorola_logo from '../images/icon-motorola-white.svg'; 
import motorola_s1 from '../images/photo-Motorola_2.png';

class case_study_1 extends Component {
    render () {
        return(
            <div className="flex-layout-column flex-layout-section-full">
                <div className="flex-layout-section-full">
                <div className="image-background-border-tb">
                    <div className="flex-layout-row width-100"> 
                        <h1 className="image-text-left text-white">Motorola</h1>
                        <img className="image-text-right" src={motorola_logo}  alt="Why WDS background" /> 
                        <img className="flex-image-container" src={motorola_bg}  alt="Why WDS background" /> 
                     </div>
                </div> 
            </div>
                <div className="flex-layout-section-full">
                    <div className="content-container margin-top-50">
                        <div className="content-header flex-layout-center-center"> 
                            <div className="content-block-half content-text-24"> The home division of Motorola was set to implement ground breaking technology for their gateway router product line, until the decision was made to delay the effort until the problems related to the line were solved.
                            </div>
                        </div>
                    </div>
                <div className="container-grid-cs">
                <div className="a content-header flex-layout-column flex-sh-500" >
                    <div className="subtitle bold">The Problem</div>
                        <div className="subtitle margin-bottom-20">Customer Disconnect</div>
                            <div className="content-block-services">
                                <p className="content-text-18">Motorola decided to outsource the UX designer position. After two failed attempts to solve these problems. The management team decided to find a vendor that was a true UX designer with a proven methodology. After an initial consultation, WDS was hired to to use their methodology to figure out what went wrong and come to a design solution.</p> 
                                    <p> One of the first issues that WDS saw was the starting page to the right. For the personas that was developed for this project, this first screen would have been confusing and led to this product being returned.</p> 
                                </div>
                        </div>
                    <div className="flex-layout-column grey-blue padding">
                        <div className="b container-image-block">
                              <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    <div className="c content-header flex-layout-column flex-sh-500" >
                        <h3 className="subtitle">Phase 2 - Findings</h3>
                            <h3 className="subtitle">Developing Personas</h3>
                                <div className="content-block-services">
                                        <p className="content-text-18">The UI design of the modem was confusing and scary for the user. Based on the data collected from the call center, a persona was developed to reflect the user experience. </p>
                                        <p>Persona (Mary): </p>
                                        <p>A mother who comes home from work after purchasing Motorola’s latest modem and wants to get it all connected before she starts dinner. 
                                        What do you think she’s thinking when looking at this screen? Does she think this is intuitive, and if this is your mother-in-law, will she be calling you?</p>                              
                                        <p>Wifi section was the greatest challenge</p>
                                        <p>Critique current UI</p>
                                        <p>Document findings</p>
                                </div>
                        </div>
                        <div className="flex-layout-column grey-blue padding">
                        <div className="b container-image-block">
                              <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    <div className="content-header flex-layout-column flex-sh-500" >
                            <h3 className="subtitle">Pain Points</h3>
                            <h3 className="subtitle">Developing the Hypothesis</h3>
                                <div className="content-block-services">
                                        <p className="content-text-18">Every consultation engagement presents its challenges. Understanding the user and the business is essential. 
                                        WDS started by doing a creative design critique on the current modem UI. The main goal of competitors research is to find out if and how they solved the same problems and issues. What were their design solutions. </p>

                                        <p>During the research phase, the objective is to use the methodology to find problems, document, research and being to develop a UX action plan. Below is the research plan for Motorola. </p>  
                                </div>
                        </div>
                        <div className="flex-layout-column grey-blue padding">
                        <div className="container-image-block">
                              <img className="photo-container" src={motorola_s1} alt="consulting"/> 
                        </div>
                    </div>
                    

                </div>
                
                    
                </div>    
            </div>                               
                            )
                        }
                    }
export default case_study_1;