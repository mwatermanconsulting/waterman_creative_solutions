import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import why from '../images/backgrounds/bg-why-wds.svg';
import whys1 from '../images/photos/photo-why-s1.png';
import whys2 from '../images/photos/photo-why-s2.png';
import whys3 from '../images/photos/photo-why-s3.png';
import why_business from '../images/photos/photo-why-business-solutions.png';
import why_design from '../images/photos/photo-why-design-solutions.png';
import why_enterprise from '../images/photos/photo-why-enterprise-solutions.png'; 
import why_handshake from '../images/graphic-why-s2.svg';
import icon_design_solutions from '../images/icon-why-design-solutions.svg';
import icon_design from '../images/icon-why-design.svg';
import icon_ux from '../images/icon-why-ux.svg';
import youcandoit from '../images/you-can-do-it.svg';
import data_analyst from '../images/graphic-data-analyst.svg';
import advocate from '../images/graphic-advocate.svg';



class why_wds extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content=" WDS offers empathetic design solutions for websites, applications, mobile apps, and social media. Its core offerings help your business understand the value of design on a core level, providing training, workshops and mentorship programs.
                With over 15 years of perfecting our design and business strategies, we have the experience, designers, strategists, skills and scale to deliver sophisticated design solutions. WDS services include application design, website design and marketing. Our client list includes, Motorola, StubHub, OsiSoft, and Pfizer " />
                <meta charSet="utf-8" />
                <title>Why WDS</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/why_wds" />
            </Helmet>
            <div className="flex-layout-column">
                <section className="flex-section-fixed-head">
                    <div className="image-background-border-tb">
                        <div className="flex-image-container flex-item-bottom">
                            <img className="flex-image-container image-size-100" src={why}  alt="Why WDS" /> 
                         </div>
                    </div> 
                </section>
                <div className="container-section-1-primary flex-layout-center-center border-bottom-5 red">
                    <div className="callout-text-lg"> 
                        WDS knows how to solve complex design problems.
                        
                    </div>
                </div>
                <section className="flex-layout-section-full align-items-center" >
                    <div className="grid-callout yellow-bg "> 
                        <div className="grid-callout-text grid-placeself-center padding width-70">
                            <p className="callout-text text-black">
                            WDS is a full service UX/UI design agency that specializes in creating elegant user experiences on applications, websites and all consumer touchpoints.</p>
                        </div>
                        <div className="grid-callout-photo">
                            <img className="flex-image-container width-100" src={whys1}  alt="Customer Service" /> 
                        </div>
                    </div>
                </section>
                <section className="flex-layout-section-full flex-layout-column align-items-center">
                    <p className="title margin-top-75">

                        WDS Relieves Your Design Fears </p>

                        <p className="content-text-21 content-block-60 margin-top-25 flex-layout-column align-items-center">
                        WDS understands the fear many companies have with contracting a design firm. They have heard all the stories about designers not paying attention to business requirements and/or direction, designing for design sake with little thought of the user. These design fail and frustrate companies making them  apprehensive about contracting another UX design firm. WDS approaches every project with empathy for the user and the business. They have followed failed designs for large enterprise projects with Motorola and StubHub turning failure into success and frustration to joy.</p>
                        
                        <p className="content-text-21 content-block-60 margin-top-25 flex-layout-column align-items-center">
                        WDS offers empathetic design solutions for websites, applications, mobile apps, and social media. Its core offerings help your business understand the value of design on a core level, providing training, workshops and mentorship programs.
                        With over 15 years of perfecting their design and business strategies, WDS has the experience, designers, strategists and expertise to deliver sophisticated design solutions. </p>
                        <p className="subtitle margin-top-50 flex-layout-column align-items-center">
                        Our client roster includes Motorola, Pfizer, Stubhub, SmithKline, Google...</p>
                </section>

                <div className="flex-layout-section-full margin-top-25 grey-blue padding-bottom-50 padding-top-50">
                <div className="title align-self-center margin-top-50" >
                        Your Complete Design Resource
                </div>
                    <div className="grid-services-list padding-20 align-self-center margin-top-25 margin-left-15per">
                        <section className="grid-services-3">
                        <a href="./ux_design" ><img className="width-icon margin-left-8" src={icon_ux}  alt="UX" /> </a>
                        <div className="subtitle margin-top-25">
                            <a href="./ux_design" className="no-decoration greenlink margin-left-6" style={{marginTop:'2%'}}>
                                UX Design</a>
                        </div>
                            <ul className="dashed content-text-18 margin-bottom-25 margin-top-15">
                                <li>Interaction Design</li>
                                <li>UX Business Strategies</li>
                                <li>Personas</li>
                                <li>Prototyping</li> 
                                <li>Concept Validation</li> 
                                <li>Consolidated Workflows</li>
                                <li>Pattern Libraries</li>
                            </ul>
                        </section>
                        <section className="grid-services-1 margin-bottom-25">
                            <a href="./design_solutions"> <img className="width-icon margin-left-8" src={icon_design_solutions}  alt="Design Solutions"/></a>
                        <div className="subtitle margin-top-25">
                            <a href="./design_solutions" className="no-decoration greenlink"> Design Solutions</a>
                        </div>
                            <ul className="dashed content-text-18 margin-top-15">
                                <li>Website Design</li>
                                <li>Branding</li>
                                <li>Marketing</li> 
                                <li>Print Design</li> 
                                <li>Video Production</li>
                                <li>Design Systems</li>
                                <li>Style Guides</li>
                            </ul>
                    </section>
                    <section className="grid-services-2 margin-bottom-25">
                    <a href="./core_offerings"><img className="width-icon margin-left-8" src={icon_design}  alt="Core Offerings" /></a>
                        <div className="subtitle margin-top-25">
                        <a href="./core_offerings" className="no-decoration greenlink margin-left-5">Core Offerings</a></div>
                            <ul className="dashed content-text-18 margin-top-15">
                                <li>Telemetry Strategies</li>
                                <li>Design Support</li>
                                <li>Design Workshops</li>
                                <li>Empathy Workshops</li> 

                                <li>Data Monitoring</li>
                                <li>UX Agile Integration </li>
                                <li>Accessibility Strategies</li>
                            </ul>
                    </section>
                </div>
            </div>
                <section className="float-left align-items-center flex-layout-column margin-top-75">
                    <div className="title content-block-60">
                            Elegant solutions for difficult problems
                    </div>
                        <div className="subtitle content-block-60 margin-top-15">
                            The Value of Simplicity
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-15"><div className="float-right">
                        <img className="photo-container" src={whys2}  alt="Elegant solutions for difficult problems" /> 
                    </div>  
                            <p className="content-text-18"> WDS specializes in uncovering complex problems on sophisticated applications. Their design solutions are being used on incredibly complex applications for the energy sectors monitoring energy grids, oil rigs and nuclear plants. To deliver a seamless intuitive experience that reduces the chance for human error takes focus empathy, experience and talent. </p>
                            <p className="content-text-18">WDS understands how easy it is for human error to cause a catastrophe. Their UX designers not only connect with your users on a deep level, but understands the human mind by studying cognitive psychology. Most mistakes arise out of unconscious human mistakes, our brains are far from perfect. Understanding the human subconscious mind helps them simplify complex interfaces so that those mistakes are avoided at all costs. </p>           
                        </div> 
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                  <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Our Core Offerings
                    </div>
                        <div className="subtitle content-block-60 margin-top-15">
                            The Business Value of Design
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-15">
                        <div className="float-right margin margin-top-1">
                        <img className="photo-container" src={whys3}  alt="Our Core Offerings" /> 
                    </div>  
                            <p className="content-text-18"> 
                            Empathetic design is critical to your to your future success. WDS has been successfully communicated the value of design to businesses for close to 25 years. Their Design strategies and < a href="core_offerings">core offerings</a> increase revenues and customer loyalty. A recent study on the value of design, by Mckinsey, reported that the companies that value design and focus on their users  have increased their business by 30% compared to the same businesses that do not have the same focus. WDS core offerings are services that provide training, strategies and workshops to align the value of design to the core of your business.</p>         
                        </div> 
                    </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full align-items-center">
                    <p className="title "> 
                        Design Services</p>
                    <p className="subtitle"> 
                         Most Popular Design Offerings</p>
                </section>    

                <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60">
                        UX Design
                    </div>
                        <p className="subtitle content-block-60 margin-top-15"> 
                        Understanding the Users </p>
                        <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right margin-right-5">
                        <img className="border-3px" src={why_design}  alt="UX Design" /> 
                </div>  

                    <p>The best customer experience starts with the Golden Rule — treat customers how you would like to be treated. At the foundation of WDS methodology is observation, watching customers use the clients' products or services. But unlike focus groups or usability laboratories, WDS conducts observation and interviews in the customer’s own environment during the course of their everyday routines. In such a context,  researchers gain insight to a host of information that is not accessible through other UX research methods. </p>


                    

                 
                <div className="float-left">
                    <NavLink className='button-area no-decoration' type="button" value="learn more" to='/ux_design'>
                    Learn More 
                    </NavLink>
                </div></div>  
                </section> 
                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60">
                        UI Design and Development
                    </div>
                        <p className="subtitle content-block-60 margin-top-15"> 
                        Application, Website and Mobile Design </p>
                    <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right margin-right-5">

                        <img className="border-3px" src={why_business}  alt="UI Design" /> 

                    </div>  
                     <p className="content-text-18"> 
                        WDS honed its UI design skills by designing websites in 1998. Over the years they have designed and developed complicated healthcare websites to solving difficult UI problems on critical applications. Currently their data visualization designs are being used on oil rigs, nuclear reactors and pharmaceutical drug facilities.  
                    </p>
                    <p className="content-text-18">
                        WDS takes care of the front-end development, CSS and HTML, working on-site with your team or creating GIT build-packages complete with custom CSS solutions, pattern libraries, style guides, best of practice documentation and design strategies. This ensures and enforces original design and solutions. They also offer UI design kits complete with custom CSS, images, icons and HTML.
                    </p>    

                


                    <div className="float-left">
                        <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ui_design'}>
                        Learn More 
                        </NavLink>
                    </div>  
                </div>

                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="float-left align-items-center flex-layout-column ">
                    <div className="title content-block-60">
                        Design Systems
                    </div>
                        <p className="subtitle content-block-60 margin-top-15"> 
                        Establishing Consistency Across all Mediums </p>
                    <div className="content-block-60 content-text-18 margin-top-15">
                    <div className="float-right margin-right-5 margin-top-1">

                        <img className="border-3px" src={why_enterprise}  alt=" Design" /> 

                    </div>  
                     <p className="content-text-18"> 
                     A design system is a continuously evolving single source of truth that establishes rules of visual narration and interaction. It must be comprehensive while combining components, behaviors, and branding. It also comes with a complete set of design standards, documentation, and strategies to achieve those standards. It must also be flexible and scalable.
                    </p>
                    <div className="float-left">
                    <NavLink Link to={'/design_systems'} className='button-area no-decoration' type="button" value="learn more" >
                    Learn More 
                    </NavLink>
               </div>  
                    </div>  
                </section>

                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full align-items-center" >
                       
                    <p className="subtitle text-align-center content-block-60">
                        WDS builds emotionally rich, resonant digital solutions that enable users to fully realize technology’s complete potential, by simplifying everything your customers touch and feel.</p>
               
                    <div className="flex-layout-column  margin-top-25">    
                        <img src={advocate} className="align-self-center container-image-500 margin-bottom-20" alt="Advocates for the User"/>
                        <p className=" text-align-center">
                        Advocating and Designing for the User</p>
                    </div>
                

                <div className="align-content-center margin-top-15">
                    <NavLink className='button-area no-decoration' type="button" value="learn more" to={'/ui_design'}>
                    Learn More 
                    </NavLink>
               </div>  
           </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="flex-layout-section-full align-items-center width-100 ">
                <div className="grid-2col-text width-75">
                    <div> 
                    <div className="subtitle layout-center-justified">
                        We'll Get There Together
                    </div>
                    <div className="layout-center-justified "><img src={youcandoit} className="float-right width-50 align-self-center margin-bottom-20" alt="You can do it"/>
                        <p className="content-text-18 content-block-75 margin-top-10">
                            WDS can embed employees within your teams as contractors (on-site or remote). It has flexibility, experience and knowledge to provide not only successful design solutions, but guidance every step of the way. </p> 
                    </div>
                    <div className="subtitle margin-top-25">Your users will love you.</div>
                    <div className="layout-center-justified ">
                            <p className="content-text-18 content-block-75 margin-top-10">In workplace and at home, users know when someone understands their needs and make them feel like experts. 
                            They know when there's attention to details. They know when it's intuitive and visually pleasing.
                            With consumers, if you miss the mark, you'll fail fast.</p>
                            </div>
                    </div>
                    <div> 
                    <div className="subtitle margin-top-70 width-75">Measurable Results</div>
                        <div className="layout-center-justified ">
                            <p className="content-text-18 content-block-85 margin-top-10">WDS believes in agile and iterative deployments as experiments, but with longer enterprise launches and  consumer software, there's still valuable data to be collected even before that first MVP. It is critical to measure and track any design to collect data about your users' journeys.  WDS insights and strategies will get you moving in the right direction, and possibly uncover rewarding new opportunities. WDS is not afraid to track and measure their design results, they have been designing successful UI solutions for the last 20 years and are confident in their abilities.  </p>
                        </div>
                       
                        <div className="subtitle margin-top-25">Lasting Results</div>
                        <div className="layout-center-justified"> <img src={data_analyst} className="float-right width-70" alt="Data Analyst"/>
                            <p className="content-text-18 content-block-85 margin-top-10 ">
                                WDS is here to build and launch great technology solutions, and help your team improve your business in tangible ways. 
                                WDS <a href ="./core_offerings">core offerings </a> 
                            have helped businesses understand the value of design and increase conversion by 200%, reduced operations time by 15%, and increased channel utilization by 75%. It all leads to millions in revenue and cost savings.</p> 
                        </div> 
                    </div> 
                </div>
            </section>

            <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
               
                        <div className="subtitle">
                           WDS Testimonials
                        </div>
              

                        <div className="subtitle">
                          StubHub
                        </div>
                        
                        <div className="content-text-18 margin-top-25 align- content-block-60">
                        “(WDS) are thoughtful designers who helped transform our reporting project from a technical tool for pulling data into a place where users at all levels of our organization can find insights about our business.”<br/>
                            <i>-Michael Johnston Stubhub, Impact-Focused Technologist Specializing in Data</i>
                        </div>

                        <div className="content-text-18 margin-top-25 content-block-60">
                        “I had the pleasure of working with Michael for 9 months while he worked in our Philadelphia office on UI/UX development for an internal business intelligence platform. He was a joy to have on our team and always delivered high quality work on time and on point. We came to rely on Michael to work through all the messy front-end details that we couldn't figure out! Just an overall great person and wonderful colleague, I can't say enough good things about him.” <br/>
                            <i>-David Schmittdiel, Manager, Business Intelligence Development at StubHub</i>
                        </div>

                       <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                       <div className="subtitle">
                          David Newman, CSP
                        </div>

                        <div className="content-text-18 margin-top-25 content-block-60">
                        “Michael Waterman is a business guy in creative disguise. I first hired Michael and his firm more than 5 years ago, and from the very first meeting, I could tell that he "gets" the way business works. Being able to translate that into "sticky" marketing that works and lasts is icing on the cake. If you have the chance to work with Michael or hire him onto your team - RUN don't walk. His mindset and skill set are all too rare in today's world of "me too" advertising and creative professionals. He's truly one of a kind! <br/> - David Newman CSP
                        </div> 

                        <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                        
                        <div className="subtitle">
                          Pfizer
                        </div>

                        <p className="content-text-18 margin-top-25 content-block-60">
                        “Michael was a pleasure to work with his knowledge of UX design, web development and implementation of Omniture Tags across a variety of platforms was highly valuable to the analytics group at Cadient. He worked with me on a full migration of HBX tags into Omniture for a complex web portal for PfizerPro.com. 

                        He was also very personable and I enjoyed working with him to meet day to day deliverables."" -John Gautreau </p>
 
                        
                        
                   
                   
                </section> 
                
                <div className="thin-hr width-70 align-self-center hrline-spacing"></div>

                <section className="flex-layout-section-full align-items-center width-100">
                    <div className="subtitle layout-center-justified">
                        Top Ten Reasons to Choose WDS
                    </div>
                    <div className="layout-center-justified margin-left-10per margin-top-15">
                        <ul className="content-text-18  margin-top-10">
                        
                            <li>1. WDS knows UX and how to connect with people</li>

                            <li>2. WDS knows the value of design</li>

                            <li>3. WDS knows how to communicate, <a href ="./contact.jsp"> call us today</a></li>

                            <li>4. WDS knows business</li>

                            <li>5. WDS knows SaaS and digital transformation</li>
                                
                            <li>6. WDS knows design strategies to support  long term design success</li>

                            <li>7. WDS knows front-end development</li>

                            <li>8. WDS knows how to spread empathy</li>

                            <li>9. WDS knows how simplify complex problems</li>

                            <li>10. WDS knows how to produce results</li>

                        </ul>
                    </div>
            </section>

            
           
            <section className="flex-layout-section-full align-items-center margin-top-100 yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-100  margin-top-50 " > 
                    <div className="2col-text grid-placeself-center width-70 margin-left-75">
                        <div className="content-block">
                            <p className="content-header"> 
                                WDS understands the uncertainty and fear involved with contracting design consultants </p>
                            <p className="content-text-18 margin-top-15">  
                            
                                WDS has had the honour of being the third option on a few projects, including the StubHub project. Most failed designs are due to the designers not fully understanding the users, or the solutions were uninspired and  business needs were not met. It's not easy to follow unsuccessful design projects. There is a certain disdain of designers at this point and the developers and stakeholders are on edge. WDS succeeds by having empathy and curiosity. Its methodology provides answers and a deep understanding of the users. This understanding is used to begin connecting with the developers and stakeholders. <br></br>WDS make the experience not only enjoyable, but profitable. Amazing things begin happen when everyone is one the same page.</p> 

                        </div>
                    </div>              
                    <div className="col2-photo width-50 grid-placeself-center">
                        <img className="flex-image-container" src={why_handshake}  alt="Thank you WDS!" /> 
                        <p className="caption">Thank you WDS!</p>
                    </div>
                </div>
            </section>     
        </div>
    </div>                                   
                            )
                        }
                    }
export default why_wds;