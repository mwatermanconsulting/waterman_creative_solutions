import React, { Component } from 'react';
import Helmet from 'react-helmet';
import practice from '../images/backgrounds/bg-services.svg';
import together from '../images/photos/photo-why-wds.png';
import services2 from '../images/photos/photo-services-s2.png';
import services3 from '../images/photos/photo-services-s3.png';
import services4 from '../images/photos/photo-services-s4.png';
import services5 from '../images/photos/photo-services-s5.png';
import services6 from '../images/photos/photo-services-s6.png';
import services7 from '../images/photos/photo-services-s7.png';
import services8 from '../images/photos/photo-services-s8.png';
import services9 from '../images/photos/photo-services-s9.png';
import casscade from '../images/photos/photo-css-s1.png';
import tugowar from '../images/graphic-tug-of-war.svg';
import icon_design_solutions from '../images/icon-why-design-solutions.svg';
import icon_design from '../images/icon-why-design.svg';
import icon_strategy from '../images/icon-why-strategy.svg';
import icon_ui from '../images/icon-why-ui.svg';
import icon_ux from '../images/icon-why-ux.svg';
import icon_marketing from '../images/icon-why-marketing.svg';

class services extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="The role of a UX consultant is to listen and connect to the customers. WDS services are a testament to the belief in old fashioned customer service. Services include UX Design, UI Design, Design Solutions, Strategy and Insight, CSS Solutions, Marketing, Core offerings and Website Design" />
                <meta charSet="utf-8" />
            <title>Services</title>
            <link rel="canonical" href="http://watermandesignsolutions.com/services" />
            </Helmet>
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head image-background-border-tb">
                <div className="flex-image-container-master flex-item-bottom grey">
                    <img className="flex-image-container-master image-size-100" src={practice}  alt="Services image" /> 
                </div> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 red padding-15sm">
                    <div className="callout-text-lg"> 
                “The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” – Charles Eames

                </div>
            </section>
            <section className="grid-callout yellow-bg"> 
                <div className="grid-callout-text grid-placeself-center content-block-65 margin-top-15sm">
                    <p className="callout-text">
                    The role of a UX consultant is to listen and connect to the customers. WDS services are a testament to the belief in old-fashioned customer service </p>
                </div>
                    <div className="grid-callout-photo grid-placeself-center margin-top-15sm">
                        <img className="flex-image-container width-100" src={together}  alt="Customer Service" /> 
                    </div>
            </section>
       
            <section className="flex-layout-section-full flex-layout-column align-items-center">
                <div className="header-title margin-top-75">
                    WDS Services</div>
                <p className="subtitle-center margin-top-15 content-block-35">
                     Design always determines success, and understanding the user is paramount to that success. The team of WDS UX designers design with empathy that connects with people, meeting their needs and expectations. 
                </p>
            </section>

            <div className="hr-line"></div>

            <section className="flex-layout-section-full flex-layout-column align-items-center flex-layout-center-center">
                    <div className="float-left flex-layout-center-center flex-layout-column align-items-center">
                        <div className="title content-block-60">
                            User Experience Design
                        </div>
                        <div className="subtitle margin-top-10 content-block-60">
                           Understanding the User
                        </div>
                        <div className="margin-top-15 content-block-60">
                        
                            <p className="content-text-18"> 
                                <div className="float-right callout-photo">
                                    <img src={services3} className="photo-container"  alt="UX Design" /> 
                                </div>    
                                WDS design experts use research, empathy and insight to define how software functions and build workflows for the ways that people will use and experience it. From inception to launch, the users' voice is always heard, leaving no detail missed.</p> 
                            <p className="content-text-18">
                                Visual elements establish your brand as a design leader in your space. By understanding your business, users and competition, WDS will ensure that you have a unique presence that include familiar use of fonts, icons and design solutions with an elegance that resonates with your users' emotions. </p>
                            <p className="content-text-18">
                                For example, when asked about a user input for a security setting during WI-FI installation, one customer had no complaints until she sat down to use the program in front of the observer. She was confused when the program did not automatically select a security option. Not accustomed to the problem, she consistently made the incorrect decision. During the interview process this was never talked about. Observing this issue and providing a simple solution, like recommending security settings, saved time and empowered her. All these little issues add up as big time wasters and ALWAYS need to be eliminated.</p>
                        </div>  
                    </div>
                </section>

                <div className="hr-line"></div>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className="float-left flex-layout-center-center content-block-60">
                        <div className="title">
                            UI Design and Development
                        </div>
                        <div className="subtitle margin-top-10">
                            Websites, Products and Applications
                        </div> 
                        
                        <div className="margin-top-15">  
                            <p className="content-text-18">
                                <div className="float-right callout-photo grid-placeself-center margin-top-15sm">
                            <img className="photo-container margin-top-2 padding-sm-10-20" src={services2}  alt="UI Design" /> 
                        </div> 
                            
                            WDS honed its UI design skills creating websites back in 1998. Over the years they have designed and developed large complex websites to solve difficult UI problems on critical applications. Their current data visualization designs are being used on oil rigs, nuclear reactors and pharmaceutical drug plants.  
                            </p>
                            <p className="content-text-18">
                            WDS can take care of front-end development, including CSS and HTML, by working on-site with your team or creating GIT build-packages with custom CSS solutions, patterns libraries, style guides, best of practice documentation and design strategies, ensuring and enforcing the original design.
                            </p>      
                            
                            </div>  
                        </div>
                    </section>

                <div className="hr-line"></div>

                <section className="float-left flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className=" title content-block-60">
                         Design Solutions
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                         Empathetic Design
                    </div>
                        <div className="margin-top-15 content-block-60"> 
                       
                        <p className="content-text-18 ">
                            <div className="float-right callout-photo grid-placeself-center">
                                <img className="photo-container" src={services7}  alt="Design Solutions" /> 
                            </div>  
                            WDS design solutions include software design, websites, marketing and print. WDS design solutions provide our clients consistency across all their consumer touchpoints. </p> 
                            <p className="content-text-18 ">
                            All design solutions are done with empathy, keeping the focus on users and business needs.  </p>
                            <p className="content-text-18">
                             For over twenty years WDS design solutions have made a difference by helping businesses with difficult design problems and turning them into success stories.  </p>
                            <p className="content-text-18">
                             Many times WDS are hired following failed attempts by previous consultants. The methodology uncovers problems and gets to the truth of deeper issues. WDS understands the value of business design and how to get results.</p>
                        </div>
                </section>

                <div className="hr-line"></div>

                <section className="float-left flex-layout-column flex-layout-section-full  flex-layout-center-center">
                    <div className="title content-block-60">
                         Strategy and Insight
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                         Insight Through Observations
                    </div>
                        <div className="margin-top-15 content-block-60"> 
                        
                        <p className="content-text-18">
                            <div className="float-right callout-photo grid-placeself-center">
                                <img className="photo-container" src={services5}  alt="Strategy and Insight" /> 
                            </div>  
                            The most meaningful insights for design strategy are developed with behavior-based understanding of users. WDS experience strategists observe people in context - where they work, play or live - to understand their goals, needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve.</p> 
                        <p className="content-text-18 margin-top-15">
                            By directly observing people, WDS can get to the heart of their needs. Discovering what drives, inspires and connects with them on an emotional level, WDS enlightens its clients with insights and strategies of where to invest resources.
                        </p>
                            <p className="content-text-24 ">
                            Today, the user’s experience is more important than brand loyalty. A successful strategy is needed to keep the users involved in all business decisions.</p>
                            
                          
                        </div>
                </section>

               
                <div className="hr-line"></div>

                <section className="float-left flex-layout-column flex-layout-section-full  flex-layout-center-center">
                    <div className="title content-block-60">
                            CSS Solutions
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                            Scalable Enterprise Solutions
                    </div>
                    <div className="margin-top-15 content-block-60"> 
                    <div className="float-right callout-photo grid-placeself-center">
                                <img className="photo-container" src={casscade}  alt="Strategy and Insight" /> 
                        </div>  
                        <p className="content-text-18 content-block-60">
                            WDS provides CSS services that include CSS development, strategy, CSS system implementation, mentoring, and best of practice documentation.</p> 
                        <p className="content-text-18 margin-top-15">
                            Solutions are inspired by empathy and experiences working with developers. The CSS solutions are scalable and customizable to your business requirements.
                        </p>
                        <p className="content-text-18">
                            WDS develops lean, scalable solutions, CSS solutions saving your business money and time. Your developers are taken care of which makes them happy and focused on what they do best.</p>
                        </div>
                </section>


                <div className="hr-line"></div>

                <section className="float-left flex-layout-section-full flex-layout-column flex-layout-center-center">
                    <div className=" title content-block-60">
                         Marketing 
                    </div>
                    <div className="subtitle content-block-60 margin-top-10">
                        Social Media Marketing Done Right 
                    </div>
                    <div className="margin-top-15 content-block-60"> 
                         
                        <p className="content-text-18 "> 
                        <div className="float-right callout-photo grid-placeself-center">
                            <img className="photo-container" src={services4}  alt="Social Media" /> 
                        </div>
                        Social Media marketing and all other forms of media marketing will make your customers feel uniquely valued when done right. WDS understands people on a deep level. The UX methodology gives a voice to users. Your marketing campaign should be a reflection of the vision of who you are as a business and tell that story.  Marketing strategies are based on research with data that reveals a clear vision which reflects and embraces real human values.</p> 

                        <p className="content-text-18 ">
                        WDS's main goal is to identify the right approach for your unique target audiences on social media. It plans, develops, and executes innovative social media marketing strategies that build a meaningful experience across all marketing material touchpoints.</p> 
                        </div>
                </section>
            
            <div className="flex-layout-section-full margin-top-50 grey-blue padding-bottom-50 ">
                <div className="padding header-title-sm-center">
                            Services
                    </div>

        <section className="flex-layout-row flex-layout-justified-sb width-60 align-self-center padding-bottom-50">
                    
                <div className="flex-layout-center-center flex-items-align-top width-280px">
                        
                        <div className="subtitle-center margin-top-10"><img  className="padding-20 margin-bottom-10"  src={icon_strategy}  alt="Strategy and Insights " /> <br></br>
                            <a href="./strategy_insight" className="no-decoration ">
                                Strategy and Insights</a>
                        </div>
                    <ul className="dashed content-text-18 margin-top-15 margin-left-10per">
                        <li>Digital Transformation</li>
                        <li>SaaS Transition</li>
                        <li><a href="./core_offerings" className="no-decoration" style={{color:"#000"}}>Strategic Ideation</a></li>
                        <li><a href="./css_solutions" className="no-decoration">CSS Solutions</a></li>
                        <li>Design Strategies</li>
                        <li><a href="./core_offerings" className="no-decoration">Design C-Suite Mentoring</a></li>
                        <li><a href="./core_offerings" className="no-decoration">Empathy Workshops</a></li>
                        <li><a href="./core_offerings" className="no-decoration">Communication Workshops</a></li>
                              
                    </ul>  
                </div>
                <div className="flex-layout-center-center flex-items-align-top width-280px margin-top-10persm">
                        
                        <div className="subtitle-center margin-top-10 "><img className="padding-20 margin-bottom-10" src={icon_ux}  alt="UX" /> <br></br>
                           <a href="./ux_design" className="no-decoration">
                               UX Design</a> 
                        </div>
                    <ul className="dashed content-text-18 list1">
                        <li>Interaction Design</li>
                        <li>Visual Design</li>
                        <li>Personas</li>
                        <li>Prototyping</li>
                        <li>Journey Maps</li>
                        <li><a href="./design_systems" className="no-decoration">Design Systems</a></li>
                        <li><a href="./design_systems" className="no-decoration">Style Guides</a></li>
                        <li>Information Architecture</li>
                    </ul>
                </div>

                <div className="flex-layout-center-center flex-items-align-top width-280px margin-top-10persm">
                    <div className="subtitle-center margin-top-10 "><img className="padding-20 margin-bottom-10"  src={icon_ui}  alt="UI" /><br>
                    </br>
                            <a href="./ui_design" className="no-decoration"> 
                            UI Design </a>
                    </div>
                        <ul className="dashed content-text-18 list1">
                            <li>Hi-Fidelity Designs</li>
                            <li>Design Build Kits</li>
                            <li>Concept Validation</li> 
                            <li>Wireframe Workflows</li>
                            <li>Mock-ups</li>
                            <li>Protyping</li>
                            <li><a href="./css_solutions" className="no-decoration">CSS Solutions</a></li>  
                            </ul>
                    </div>

           
                    <div className="flex-layout-center-center flex-items-align-top margin-top-10persm width-280px">
                        <div className="subtitle-center margin-top-10"><img  className="padding-20 margin-bottom-10"  src={icon_marketing}  alt="Marketing and Analysis" /><br></br>
                           <a href="./marketing" className="no-decoration"> 
                           Marketing/Analytics</a>
                        </div>
                        <ul className="dashed content-text-18 margin-left-10per margin-top-15">
                            <li>Marketing Strategy</li>
                            <li>Content Science and Design</li>
                            <li>Experience Data and Analytics</li>
                            <li>Social and Influence Strategy</li>
                            <li>Marketing Technology Design</li>
                            <li>Innovation as a Brand</li>       
                        </ul>  
                    </div>

                    <div className="flex-layout-center-center flex-items-align-top margin-top-10persm width-280px">
                        
                        <div className="subtitle-center margin-top-10 margin-top-10sm">
                            <img  className="padding-20 margin-bottom-10" src={icon_design_solutions}  alt="Design Solutions" /><br></br>
                            <a href="./design_solutions" className="no-decoration ">
                                Core Offerings</a>
                        </div>
                            <ul className="dashed content-text-18 list1">
                                <li>Business Design Strategies</li>
                                <li>Empathy Workshops</li>
                                <li>Communication Strategies</li>
                                <li>Design Solutions</li> 
                                <li>C-Suite Workshops</li> 
                                <li>Customer Experience Strategies</li>
                                <li>Telemetry/Analytics Strategies</li>
                                <li>Accessibility Strategies</li>

                            </ul>
                    </div>

                    <div className="flex-layout-center-center m flex-items-align-top margin-top-10persm width-280px">
                       
                        <div className="subtitle-center margin-top-15"> <img className="padding-20 margin-bottom-10" src={icon_design}  alt="Design" /><br></br>
                                <a href="./design_solutions" className="no-decoration margin-left-10per">
                                    Design Solutions</a></div>
                            <ul className="dashed content-text-18 list1">
                                <li>User Interface Design</li>
                                <li>Visual Design</li>
                                <li>Design Metrics</li>
                                <li>Protyping</li> 
                                <li>Concept Validation</li> 
                                <li>Wireframe Key Workflows</li>
                                <li>Design Systems</li>
                                <li>Style Guides</li>
                            </ul>
                    </div>
                </section>
            </div>

            <section className="flex-layout-section-full align-items-center yellow-bg border-top-5">
                <div className="grid-2col-text-photo align-self-center width-70  margin-top-50 margin-top-50sm margin-bottom-50" > 
                    <div className="2col-text grid-placeself-center margin-left-75">
                        <div className="content-block">
                            <p className="callout-text"> 
                                Many design issues stem from difficult relationships between programmers and designers. </p>
                            <p className="content-text-18 margin-top-15">  
                            
                                WDS has connected with programmers and developers using a methodology of empathy. This includes fitting designers into agile systems so that the project runs things smoothly.</p> 

                        </div>
                    </div>              
                    <div className="col2-photo grid-placeself-center">
                        <img className="flex-image-container" src={tugowar}  alt="tug of war" /> 
                        <p className="caption">Issues, issues! Help us fix our designer-programmer relationships!</p>
                    </div>
                </div>
            </section>
                
            </div>
        </div>
        )
    }
}

export default services;