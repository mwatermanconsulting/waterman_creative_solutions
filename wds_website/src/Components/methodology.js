import React, { Component } from 'react' ;
import method from '../images/backgrounds/bg-methodology.svg';
import stayinlane from '../images/graphic-stayinlane.svg';
import methodology2 from '../images/photos/photo-methodology-s2.png';
import methodology3 from '../images/photos/photo-methodology-s3.png';
import methodology4 from '../images/photos/photo-methodology-s4.png';
import methodology5 from '../images/photos/photo-methodology-s5.png';
import methodology6 from '../images/photos/photo-methodology-s6.png';
import methodology7 from '../images/photos/photo-methodology-s7.png';
import methodology8 from '../images/photos/photo-methodology-s8.png';
import methodology9 from '../images/photos/photo-methodology-s9.png';
import methodology10 from '../images/photos/photo-methodology-s10.png';
import methodology11 from '../images/photos/photo-methodology-s11.png';
import methodology12 from '../images/photos/photo-methodology-s12.png';
import methodology13 from '../images/photos/photo-methodology-s13.png';
import method1 from '../images/photos/photo-methodology-s1.png';
import featured from '../images/photos/photo-methodology-featured-motorola.png';
import uxdiagram from '../images/photos/photo-methodology-ux-diagram.png';


class methodology extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <div className="flex-section-fixed-head">
                <div className="image-background-border-tb">
                    <div className="flex-image-container flex-item-bottom">
                        <img className="flex-image-container image-size-100" src={method}  alt="Method WDS background" /> 
                    </div>
                </div> 
            </div>
            <section className="flex-layout-section-full align-items-center red border-bottom-5" >
                    <div className="container-section-1-primary flex-layout-center-center">
                        <div className="content-header flex-layout-column">    
                            <div className="content-block">
                                <div className=" text-white text-align-center">
                                What is the role of empathy in your business?
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center  width-70">
                            <p className="callout-text text-black">
                            EMPATHY and PASSION are the core of our business and the heart of our methodology.
                            </p>
                        </div>
                        <div className="grid-callout-photo grid-placeself-center">
                            <img className="flex-image-container width-100" src={method1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>


                <section className="margin-top-100 flex-layout-section-full flex-layout-column align-items-center">
                    <div className="content-header flex-layout-column content-block-75">    
                        <div className="title flex-layout-center"> 
                            WDS Goal: Uncovering the Truth
                        </div>
                        <p className="content-text-21 content-block-75 align-self-center text-align-center margin-top-25">
                            The science of understanding people has developed for centuries, but not enough has been done to integrate these approaches into the process of UI design. For more than a decade, we have refined a scalable, flexible methodology that centers on answering questions about customers by connecting and understanding people, observing their daily workflow, by interviewing and conversing with them we begin to identify people’s needs, behaviors and aspirations. This provides a perspective on customers that clients typically have never been seen. </p>

                        <p className="content-text-21 content-block-75 align-self-center text-align-center">
                            Our methodology produces answers and empathetic designs that connect and resonates with your users. Our methodology uncovers unarticulated user needs and our design solutions and strategies will drive business transformation. </p>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="flex-layout-full align-items-center flex-layout-column">
                        <div className="title flex-layout-center"> 
                            The WDS UX Methodology
                        </div>
                    
                </section>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-50">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            Design Review
                        </div>
                        <div className="subtitle margin-top-15">
                            Uncovering Design Problems
                        </div>
                        <div className="margin-top-15">
                            <p className="content-text-18">
                                <div className="float-right">
                                    <img className="container-photo-callout" style={{marginLeft:'5%'}} src={methodology2}  alt="Design Review" /> 
                                    
                                </div> A design review is a process to evaluate and critique current design work. <br/> The review looks at how specific features have been implemented and/or evaluates a prototype of a project feature or user flow. Design reviews can be modeled after the five elements of the user experience with an evaluation of the elements from abstract concepts to concrete stages.

                                <ul className="dashed content-text-18 margin-left-10 margin-top-15" style={{marginTop:'15px'}}>
                                    <li><b>Surface</b> - everything visually the <br/> "Look and Feel"  of the site or app</li>
                                    <li><b>Skeleton</b> - Make structure concrete: <br/>Do the components make sense?</li>
                                    <li><b>Structure</b> - Gives shape to the scope.<br/> How do the components fit together and behave? </li>
                                    <li><b>Scope</b> - What were the initial requirements</li>
                                    <li><b>Strategy</b> - Where it all begins. <br/>What was the reason for this site/app. What do the users want? </li> 
                                </ul></p>
                           
                            </div>  
                            </div>
                    </section> 

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                
                <section className="grid-2col-photo-content margin-top-60 flex-layout-section-full content-header">
                    <div className="grid-left-truth">
                        <div className="title">
                             Research
                        </div>
                        <div className="subtitle margin-top-15">
                             Understanding the Business
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            At the beginning of the methodology, we set the foundation for success by developing an
                            understanding of the business, the industry, the competition and relevant trends. This becomes the basis for how we approach all subsequent phases. Along with secondary research, we interview stakeholders and subject matter experts, both to gain a first-hand awareness of the company context, and also to build connections within the business which contribute to stakeholder alignment throughout the engagement. This activity begins to define hypotheses for where the company intends to play in the market, who it intends to serve and how it plans to serve them. </p>

                            <ul className="dashed">
                                <li>Kickoff Meeting</li>
                                <li>Business Requirements</li>
                                <li>Competition Research</li>
                                <li>Marketing Materials Review</li>
                                <li>Style Guides and Company Standards</li>
                                <li>Stakeholders Contact</li>
                            </ul>

                        </div>
                    </div>

                    <div className="grid-right-truth container-image-block" style={{marginTop:'75px'}}>
                        <img className="photo-container" src={methodology3}  alt="Research" /> 
                    </div>  

                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header flex-layout-center">
                    <div className="grid-left-truth flex-layout-section-full ">
                        <div className="title">
                            Observation
                        </div>

                        <div className="subtitle margin-top-15">
                            Empathizing with the User
                        </div>
                        
                        <div className="margin-top-15" >
                            <p className="content-text-18 content-block-75">
                                Observation provides insight beyond the traditional testing methods. Observation of  users while they work in a real life setting, provides invaluable insights. Our team members conduct their observations and services, in a highly unobtrusive way simply by planting themselves in their offices and video taping. Our goal in this phase is to emphasize with the user as they complete their the users work flows and pain points. Although observation is our first choice, our experience has shown this is not always feasible, as was in the case with Motorola. All of our strategies in this phase are sophisticated, empathic observers that can see solutions<br/> to unarticulated needs
                            </p>

                            <ul className="dashed content-block-75 content-text-16">
                                <li>Well chosen observers have deep knowledge of product or service</li>
                                <li>Observers rely on real actions rather than reported behavior</li>
                                <li>Understand the users feelings through body language </li>
                                <li>Use of actual product or prototype</li>
                                <li>Interview users</li>
                                <li>Discover user pain points</li>
                                <li>Empathize with users needs and expectations</li>
                                <li>Understanding of user work flows</li>

                              
                                
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right-truth container-image-block">
                        <img className="photo-container" style={{marginTop: '-15%'}} src={methodology4}  alt="Observation" /> 
                    </div>     
                </section>
                
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header flex-layout-center">
                    <div className="grid-left-truth flex-layout-section-full ">
                        <div className="title">
                            Capturing Data
                        </div>

                        <div className="subtitle margin-top-15">
                            Understanding the Research
                        </div>
                        
                        <div className="content-block-75 margin-top-15">
                            <p className="content-text-18">
                            To understand the research we need to understand the people and know how to interpret people’s actions, our observers may ask a few very open ended questions, such as; “Why are you doing that?” They often carry a list of questions to prompt their own observations, for example; “What problems is the user encountering?” Most of our data is gathered from visual, auditory, sensory cues. Presenting our empathic-design teams very  videography, interview recordings and notes as tools, to begin reflection.
                            </p>
                        </div>
                        
                    </div>
                    <div className="grid-right-truth flex-layout-column">
                        <img className="photo-container" style={{marginTop:'12%'}} src={methodology5}  alt=" Capturing Data" /> 
                       
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth content-block-65 flex-layout-section-full">
                        <div className="title">
                            Reflection and Analysis
                        </div>
                        <div className="subtitle margin-top-15">
                            Empathizing with Users 
                        </div>
                        <div className="content-block-65 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            After gathering data in many forms, the UX designers return to reflect on the user and business research and to review the data with the team. Analyzing workflows, user journeys and pain points. They will ask questions that the team members may or may not be able to answer resulting in sending them out for further observation and research. At this point the team begins to identify all of its customers’ possible problems and needs.</p>

                        </div>
                    </div>
                    <div className="grid-right-truth flex-layout-column">
                        <img className="photo-container" style={{marginTop:'11%'}} src={methodology6}  alt="Reflection and Analysis" />
                         
                    </div>     
                </section>
                
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header flex-layout-center">
                    <div className="grid-left-truth flex-layout-section-full ">
                        <div className="title">
                            Brainstorming for Solutions
                        </div>
                        <div className="subtitle margin-top-15 content-block-65">
                            Turning Ideas into Designs
                        </div>
                        <div className="content-block-75 margin-top-15" >
                            <p className="content-text-18">
                            Brainstorming is a valuable part of any methodology process; it is used specifically to transform the research into graphic, visual representations of possible solutions. Although brainstorming is generally associated with a creative process, it is not undisciplined. We tell our team to heed five rules: </p>

                            <ol style={{marginleft:'15%'}}>
                                <li>Defer judgment</li>
                                <li>Build on the ideas of others</li>
                                <li>Stay focused on the topic</li>
                                <li>Encourage wild ideas</li>

                            </ol>
                            
                        </div>
                    </div>
                    <div className="grid-right-truth container-image-block">
                            <img className="photo-container" style={{marginTop:'4%'}} src={methodology7}  alt=" Brainstorming for Solutions" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth flex-layout-section-full">
                        <div className="title">
                            Final Design Presentation
                        </div>
                        <div className="subtitle margin-top-15">
                            Design with Empathy
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                               The final design incorporates all the research findings and design solutions. WDS understands for a project to be successful it needs to be designed with the business core values and branding that includes a simplified and effective customer experience. This ensures that the project is designed with empathy and meets the users and business expectations, solving all the uncovered problems. </p>
                            <ul className="dashed">
                                <li><a href="../design_solutions">Custom Design Solution</a></li>
                                <li>High Fidelity Mockup</li>
                                <li>Explanation of design decisions </li>
                                <li>User Interactions</li>
                                <li>Problems solved</li>
                                <li>Persona Presentation</li>
                                <li>User journey</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-right-truth container-image-block">
                        <img className="photo-container" style={{marginTop: '10%'}} src={methodology8}  alt="Final Design Presentation" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth flex-layout-section-full">
                        <div className="title">
                            Front-end Development
                        </div>
                        <div className="subtitle margin-top-15">
                            CSS and HTML
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            In this phase, we work closely wih the developers. We can embed our team or work remotely handling the layout of project. Developing a CSS solution and responsive HTML. We work seamlessly with developers developing the front-end as they code the back-end working in your agile cycles. </p>
                            <ul className="dashed">
                                <li><a href="../css_solutions">CSS Solutions</a></li>
                                <li>CSS Development (SaSS and LeSS)</li>
                                <li>HTML development</li>
                                <li>Accessibility Implementation </li>
                                <li>Telemetry/Analytics Implementation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-right-truth container-image-block">
                        <img className="photo-container" style={{marginTop: '10%'}} src={methodology9}  alt="Front-end Development" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth flex-layout-section-full ">
                        <div className="title">
                            User Testing
                        </div>
                        <div className="subtitle margin-top-15">
                            Always keeping the customer in the loop
                        </div>
                        
                        <div className="content-block-75 margin-top-15" >
                            <p className="content-text-18">
                            The testing phase reveals if we answered all the questions, by reducing the users pain points and meeting their expectations. This phase will last the entire development phase and never stop.
                            </p>

                            <ul className="dashed">

                            <li>Write scalable, tailored testing plans</li>
                                <li>User Questions/Interviews</li>
                                <li><a href="./finding_truth">Observational Fieldwork</a></li>
                                <li>Establish testing relationship with vendors</li>
                                <li>Establish testing relationship with stakeholders</li>
                                <li>Continue testing relationship with users</li>
                                <li>Testing Logic and Navigation</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right-truth container-image-block">
                        <img className="photo-container" style={{marginTop: '15%'}} src={methodology10}  alt="User Testing" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth flex-layout-section-full">
                        <div className="title">
                            Launch
                        </div>
                        <div className="subtitle margin-top-15">
                            With You Until the End
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                                At the completion of the project it is important to the businesses ongoing success that we provide a design strategy road-map that will continue the business success with their users in the future.</p>

                            <ul className="dashed">
                                <li><a href="../strategy_insight">Present Findings - The Truth</a></li>
                                <li><a href="../strategy_insight">Present Strategies and Insight</a></li>
                                <li>Use Cases</li>
                                <li>Current Work Flows</li>
                                <li>Document problems</li>
                                <li>Communication Team (Product, Marketing, PM)</li>
                                <li>Business Design Discoveries</li>
                                <li>Pain Points</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-right-truth container-image-block">
                        <img className="photo-container" style={{marginTop: '15%'}} src={methodology11}  alt="Launch" /> 
                    </div>     
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth flex-layout-section-full ">
                        <div className="title">
                            Design Support
                        </div>
                        <div className="subtitle margin-top-15">
                            A Consistent Message
                        </div>
                        
                        <div className="content-block-75 margin-top-15">
                            <p className="content-text-18">
                                WDS offers customer experience strategies based off the research findings. WDS offers a full line of design services to ensure cohesion and consistency in your branding message.
                            </p>

                            <ul className="content-text-18 dashed">
                                <li><a href="../style_guide">Style Guides and Design Systems</a> </li>
                                <li><a href="../style_guide">Website Design</a></li>
                                <li><a href="../style_guide">Graphic Design</a></li>
                                <li><a href="../style_guide">Marketing</a></li>
                                <li><a href="../style_guide">Video</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="grid-right-truth flex-layout-column">
                        <img className="photo-container" style={{marginTop: '15%'}} src={methodology12}  alt="Design Support" />
                        
                    </div>     
                </section>
                
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-2col-photo-content content-header">
                    <div className="grid-left-truth flex-layout-section-full">
                    <div className="title">
                            Core Offerings
                        </div>
                        <div className="subtitle margin-top-15">
                            Business Design Strategies
                        </div>
                        <div className="content-block-75 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                                Our last part of our methodology is services to help spread design to the c-suite. It is critical to your companies survival to build a culture of empathy and design. </p>

                            <ul className="dashed">
                                <li><a href="../strategy_insight"> Strategies and Insight</a></li>
                                <li>Telemetry</li>
                                <li>Accessibility</li>
                                <li>Business Design Strategies</li>
                                <li>Design Communication </li>
                                <li>Business Design Discoveries</li>
                                <li>Pain Points</li>

                            </ul>
                        </div>
                    </div>
                    <div className="grid-right-truth container-image-block">
                        <img className="photo-container" style={{marginTop: '14%'}} src={methodology13}  alt=" Core Offerings" /> 
                    </div>     
                </section>



                <section className="flex-layout-section-full padding yellow-bg image-background-border-tb margin-top-100">
                    <div className="content-header flex-layout-center margin-tb-100 width-100">
                        <div className="callout-text text-black">
                            Our process is so efficient that it scales from start-up companies to global enterprises. 
                        </div>
                    </div> 
                </section>

                <section className="flex-layout-section-full align-items-center margin-tb-100">
                    
                    <div className="grid-2col-photo-text align-self-center width-70">
                    <div className="col2-photo width-70 grid-placeself-center">
                       <a href= "./case_study_1"><img src={featured} className="border-3px width-100" alt="Case Study Image 2"/></a> 
                    </div>
                    <div className="2col-text grid-placeself-center width-100 margin-left-75">
                    <div className="title">
                         WDS Methodology in Action
                    </div>
                    <div className="subtitle margin-top-15">
                         WDS Methodology Uncovered and Solved Motorola's Design Problems
                    </div>
                        <p className="content-text-18 margin-top-15"> 
                        A design problem with Motorola Surfboard Cable Modem product line was on the verge of losing money due to high return rate and a high spike in call center calls. After two failed attempts and years of complacency, Motorola stakeholders decided to bring in a consultant with design and UX experience with a proven methodology.  <a href= "./case_study_1"> For the full story....</a></p>
                    </div>
                </div>     
            </section>
            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-70 margin-top-50 margin-bottom-50" > 
                    <div className="2col-text grid-placeself-center ">
                        <div className="content-block">
                            <p className="content-header"> 
                                It's best to keep talent in their own lane </p>
                            <p className="content-text-18 margin-top-15 ">  
                            
                            A common design practice is having engineers and developers do the design work on apps, products and websites. Forcing them out of their untrained lane will get the most out of your employees by allowing them to concentrate on what they do best. Leave the design work to the WDS specialists.
</p> 

                        </div>
                    </div>              
                    <div className="col2-photo grid-placeself-center width-100">
                        <img className="flex-image-container " src={stayinlane}  alt="Methodology" /> 
                        <p className="caption">Stay in your lane, we all have useful talents!</p>
                    </div>
                </div>
            </section>    
            </div>
        )
    }
}

export default methodology;