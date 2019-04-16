import React, { Component } from 'react' ;
import backgroundAboutus from '../images/background-aboutus.png';
import { Button } from 'react-mdl';
import tugofwar from '../images/tugofwar.png';
import racecar from '../images/racecar.png';
import yogabeach from '../images/yogabeach.png'; 
import mysvg from '../images/crowdgirls.svg';
import ship from '../images/titanic.svg';
import computer from '../images/photo-computer.png';
import firemen from '../images/firemen.svg';

class case_studies extends Component {
    render () {
        return(
            <div className="flex-layout-column">
                <div className="flex-layout-section flex-layout-justified-sb">
                    <div className="image-background-border-tb flex-layout-center-center">
                        <div className="flex-image-container flex-layout-center-center">
                            <img className="flex-image-container" src={mysvg}  alt="girls picture" /> 
                        </div>
                            <div className="flex-content-container-split">
                                <div className="content-header"> 
                                    <div className="title">Case Studies</div>
                                </div>
                                <div className="content-header">
                                    <div className="subtitle">Helping organizations succeed through experience-driven strategy</div>
                                </div>
                                <div className="content-block-why">
                                    <p className="content-text-18">For over 15 years, we've worked with companies ranging from small business to start-ups to some of the 
                                    biggest brands on the Fortune 500 - and everything in-between. Helping organizations succeed through experience-driven strategy, design is what we do at WDS. 
                                    We want to be your partner in improving all key customer experience and business metrics for you and your organization.
                                    <br/>
                                     </p>
                                </div>
                                    <div className="flex-container-button margin-top-50">
                                        <Button className="button"><a href="./core_offerings" className="text-black" target="_blank">Core Offerings</a></Button> 
                                        <Button className="button"><a href="./aboutus" className="text-black" target="_blank">About US</a></Button>
                                        <Button className="button"><a href="./case_studies" className="text-black" target="_blank">Why WDS</a></Button>
                                        <Button className="button"><a href="./clients" className="text-black" target="_blank">Clients</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                         <div className="flex-layout-section-full align-items-center green">
                            <div className="flex-layout-content-container margin-top-25 flex-layout-center-center">
                                <div className="content-header flex-layout-column">    
                                    <h3 className="subtitle flex-layout-center">Customer Success Spotlight</h3>
                                <div className="content-block width-100">
                                    <p className="content-text-18 text-align-center">Spotlight on design solutions for some of our favorite clients. 
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-layout-column flex-layout-section- full green flex-layout-justified-sb">
                            <div className="flex-layout-center-center flex-layout-row margin-top-50"> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">Motorola <br/> Gateway Router Product Line</h3>
                                        <div className="content-block">
                                            <p className="content-text-18 content-block-why">The home division of Motorola was set to implement ground breaking 
                                            technology for their gateway router product line. Until the decision was made to delay the effort until the problems related to the line were solved.   <br/><br/>

                                             <a href="./case_study_1" className="text-black" target="_blank">Read More....</a>   
                                            </p>
                                        </div>
                                    </div>
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">Stubhub Stuff</h3>
                                   <div className="content-block">
                                            <p className="content-text-18 content-block-why">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                managers work together to achieve success.  <br/><br/>
                                            
                                                <a href="./case_study_2" className="text-black" target="_blank">Read More....</a> 
                                            </p>
                                    </div>
                                </div>    
                            </div>       
                        </div>
                        <div className="flex-layout-column flex-layout-section- full green flex-layout-justified-sb">
                            <div className="flex-layout-center-center flex-layout-row margin-top-50 "> 
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">OSI Stuff</h3>
                                        <div className="content-block">
                                            <p className="content-text-18 content-block-why padding-bottom-50">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design 
                                            software solutions based on user needs.  Designers, strategists, marketers and program 
                                            managers work together to achieve success. <br/><br/>

                                            <a href="./case_study_3" className="text-black" target="_blank">Ream More....</a> 
                                            </p>
                                        </div>
                                </div>
                                <div className="content-header flex-layout-column flex-sh-500">
                                    <div className="container-image-block">
                                        <img className="image-container-content" src={computer}  alt="Blended Teams" /> 
                                    </div> 
                                        <h3 className="text-white">Pfizer Stuff</h3>
                                   <div className="content-block">
                                            <p className="content-text-18 content-block-why padding-bottom-50">Our <a href="./core_offerings" target="_blank">multi-disciplined teams</a> teams work collaboratively to design software solutions based on user needs.  Designers, strategists, marketers and program 
                                                managers work together to achieve success.  <br/><br/>

                                                <a href="./case_study_4" className="text-black padding-bottom-50" target="_blank">Ream More....</a> 
                                            </p>
                                    </div>
                                </div>    
                            </div>
                        </div>      
                    </div>                                   
                )
            }
        }
export default case_studies;