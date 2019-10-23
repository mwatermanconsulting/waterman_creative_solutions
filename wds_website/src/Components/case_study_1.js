import React, { Component } from 'react'
import Helmet from 'react-helmet';
import motorola_bg from '../images/backgrounds/bg-motorola.png';
import motorola_s1 from '../images/photos/photo-motorola-s1.png';
import motorola_s4 from '../images/photos/photo-motorola-s4.png';
import motorola_s6 from '../images/photos/photo-motorola-s6.png';
import motorola_s2 from '../images/photos/photo-Motorola_2.png';
import motorola_s3 from '../images/photos/photo-motorola-s3.png';
import motorola_s5 from '../images/photos/photo-motorola-s5.png';
import motorola_cnet from '../images/photos/photo-motorola-cnet.png';
import motorola_google from '../images/photos/photo-motorola-google.png';
import mary from '../images/photos/photo_mary.jpg';
import motorola_beforeafter from '../images/photos/photo-motorola-before-after-900.png';
import motorola_before_basic from '../images/photos//photo-motorola-before-basic.png';
import callcenter from '../images/photos/photo-motorola-s2.png';


class case_study_1 extends Component {
    render () {
        return(

            <div>
            <Helmet>
                <meta name="description" content="case studies for motorola, pfizer, osisoft, stubhub. Describes " />
                <meta name="keywords" cpntent="case studies, WDS, stubhub, motorola" />
                <meta charSet="utf-8" />
                <title>Case Study - Motorola</title>
                <link rel="canonical" href="http://watermandesignsolutions.com/case_study_1" />
            </Helmet>

            
            <div className="flex-layout-column flex-layout-section-full">
                <section className="flex-layout-row height-60-mobile width-100"> 
                    <div className="header-text-left header-title-cs align-self-center text-white">
                        Case Study - Motorola
                    </div>
                    
                    <img className="flex-image-container" src={motorola_bg}  alt="Motorola background" /> 
                </section>
                <section className="container-section padding-20  border-top-5 border-bottom- callout-color-dark">
                <div className="callout-text-lg">
                    Goal: To solve the UI problems that were plaguing Motorola's SurfBoard product line. 
                </div>
                </section>
            
                <section className="flex-layout-column align-items-center border-top-5">
                    <div className="margin-top-25sm margin-top-50cs content-block-65 title">
                            Case Study - Motorola
                    </div>
                    <div className="content-block-65 margin-top-25">
                        <p className="content-text-18">
                            WDS was contracted to find solutions to the ongoing problems that Motorola faced with their high-end modem. After two failed attempts they were desperate to find solutions. WDS was hired to design a modern user-centric interface for the the high-end Cable modem the MOTOROLA DOCSIS 3.1, Model MB8600. WDS used their UX methodology to uncover the previously unknown problems. The solutions simplified the interface and  user workflows. The redesign exceeded the stakeholders expectations, surviving two company buyouts. When Google purchased Motorola, WDS and Motorola were required to present to the Google stakeholders to justify the endeavor mid-development. In the end, WDS's design solutions were adopted by both companies and became industry standards.</p>
                             
                        <p className="content-text-18"> 
                            The design solutions have been adopted and are still in use since 2013. Many of the solutions are now standard across the Arris product line and have been adopted by the competitors. The WDS goal of establishing Motorola as the industry leader was accomplished. Below is the story on how WDS accomplished this feat.</p>
                    </div>
                </section>
                <section className="flex-layout-section-full margin-top-50">
                     <div className="container-image-block flex-layout-center-center">
                        <img className="photo-container-cs-sb1 width-100" src={motorola_s1} alt="Motorola's confusing interface "/>
                    </div>
                </section>

                <div className="hr-line-cs"></div>
                
                <section className="flex-layout-section-full align-items-center">
                    <div className="content-block-65"> 
                        <div className="title">
                            Backstory
                        </div>
                        <div className="subtitle margin-top-10">
                            High return rate, losing customer loyalty
                        </div>
                            <div className="content-block-100 margin-top-15"> 
                            <p className="content-text-18">
                            Motorola was facing a high return rate on a modem product line and their call center costs were out of control. 
                            The home division of Motorola was facing pressure from the stakeholders to release the new DOCSIS 3.1 tech on the SurfBoard product line. The product managers understood that if they released the new tech without solving the current problems with the interface, the product line would lose money. Motorola attempted to solve their UI problems by contracting two different UX designers over an 18 month period. Unhappy with the results from both UX designers, the pressure was high on the home division to release the product before their competitors. WDS was hired to  detail its UX methodology and embedded in the Motorola team to work closely with the engineers, product, marketing and stakeholders.
                            
                            </p>
                            </div>
                        </div>
                    </section>
                    <section className="flex-layout-column flex-layout-center-center margin-top-50">
                            <div className="container-image-block flex-layout-center-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_before_basic} alt="Questions"/> 
                            </div>
                    </section>

                    <div className="hr-line-cs"></div>

                    <section className="flex-layout-column align-items-center margin-bottom-50">
                        <div className="title content-block-65">
                                Methodology Begins</div>
                        <div className="subtitle content-block-65 margin-top-15">
                                Finding the Truth - Business Perspective</div>
                        <div className="content-block-65">
                            <p className="content-text-18 margin-top-15">
                                Understanding the business perspective was the first half of the WDS UX methodology, setting a foundation for the entire project. The goal was to come to a deep understanding of the project by researching the business and the competition. Part of the process is understanding the requirements, interviewing stakeholders and gathering design elements such as marketing materials and style guides. This research formed the foundation for the project. </p>
                            
                            <p className="content-text-18">
                                WDS first requested that Motorola  purchase all their competitors' modems. This was the first time Motorola was presented with a competitor comparison study. This is a common business problem with  clients - ignoring their competition. The competitor comparison study is one of the highlights of the methodology because it enlightens the stakeholders. WDS revisited competition analysis as solutions began to materialize.</p>
                        </div>
                    </section>
                    <section className="grid-callout grey margin-top-50 border-tb-5">
                        <div className="callout-text align-self-center justify-self-center content-block-75 text-white padding" >
                            For the average user, the interface on the Motorola modems was very intimidating. The UI was outdated and unbranded, leaving the user confused and frustrated, keeping the call center very busy.
                        </div>
                        
                        <div >
                              <img className=" width-100" src={callcenter} alt="Case Study 2"/> 
                        </div>
                    </section>
                    <section className="flex-layout-section-full align-items-center flex-layout-column margin-top-75">
                        <div className="title content-block-65 ">
                            UX Plan
                        </div>
                        <div className="subtitle content-block-65 margin-top-15">
                            Finding the Truth - Customer Perspective
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                                Typically, The WDS methodology begins with observing the users in their working environments. Observing users was a problem with Motorola because the user base for their modems was broad. The WDS methodology knows that unhappy customers are the greatest source of learning. The stakeholders were shocked when WDS requested three months of the call center logs, exclaiming "why didn't we think of that". Going through the call center logs began to uncover patterns. A numeric-based scoring system was used to clearly document the problems on a priority scale. Time was spent "ghosting" the call center callers, listening and empathizing with them as they struggled with simple tasks. </p> 
                            
                            <p className="content-text-18">
                                As WDS uncovered the truth about users, a connection developed and personality traits began to take shape and take form into personas and journey maps. A customer/user persona would be needed for this project to be a success. A bridge of empathy between the user and Motorola's developers formed, and the persona labelled "Mary" was created.  
                            </p>
                            </div>
                        </section>

                        <div className="hr-line-cs"></div>
                        
                        <section className="content-header align-items-center flex-layout-column margin-bottom-25sm margin-top-15sm">
                            <div className="title content-block-65">
                                Master Plan
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                                Solving the Problems
                            </div>
                            <div className="content-block-65">
                                <p className="content-text-18 margin-top-15 margin-bottom-25sm">
                                    WDS noticed early in the project that the organization of required user inputs did not make sense. When Michael reviewed the interface and made suggested changes, he learned that there was an issue - two distinct set of users. One set was the consumer market,  purchasers the product. The other set was cable operators, such as Comcast, providing home installation. WDS would not be allowed to move ANY input, due to the cable operator familiarity with the interface. Originally, WDS thought this requirement was limiting. Instead, it forced them to adapt and reevaluate their design solutions. This caused them to change course, which opened new possibilities. It also helped the success of final product design, a solution beyond the scope and expectations of the customers and stakeholders.</p> 
                                
                        <p className="subtitle-center text-align-center margin-top-50 margin-top-25sm">The Design Solutions Roadmap</p>

                        <section className="flex-layout-row flex-layout-justified-sb content-block-75 flex-layout-center-center margin-left-20per">
                            <div className="flex-layout-center-center flex-items-align-top margin-top-25">
                                <ul className="dashed content-text-18 align-self-center">
                                    <p className="subtitle">User Pain Points:</p>
                                    <li><a href="#solution1">Interface Intimidating</a></li>
                                    <li><a href="#solution10">Lack of Guidance and Support</a></li>
                                    <li><a href="#solution1">Design Outdated</a></li>
                                    <li><a href="#solution2">Starting Point Confusing</a></li>
                                    <li><a href="#solution3">WiFi Section Main Issue</a></li> 
                                    <li><a href="#solution10">Terms and Acronyms Confusing</a></li> 
                                    <li><a href="#solution1">Responsive Design Solutions Lacking</a></li> 
                                    <li><a href="#solution10">Cognitive Overload</a></li>

                                </ul> 
                            </div>
                            <div className="flex-layout-center-center flex-items-align-top margin-top-25">

                                <ul className="dashed  content-text-18 ">
                                    <p className="subtitle content-text-18">Business Pain Points:</p>
                                    <li><a href="#solution7">Communication Issues Between Teams </a></li>
                                    <li><a href="#solution9">No Mobile Presence </a></li>
                                    <li><a href="#solution1">UI Not Branded</a> </li>
                                    <li><a href="#solution8">Google Buyout</a></li> 
                                    <li><a href="#user">Disconnection with the User</a></li>
                                    <li><a href="#deploy">Need CSS Solution</a></li> 
                                    
                                    <li><a href="#results">Entire project file size needed to be under 1mb</a></li>
                                </ul> 
                            </div>
                        </section>
                    </div>
                </section>

                        <div className="hr-line-cs"></div>

                        <section className="content-header align-items-center flex-layout-column">
                            <div className="header-title-sm content-block-65">
                                Design Solutions
                            </div>
                            <div className="title content-block-65 margin-top-50 margin-top-50sm">
                                Updated Design
                            </div>
                        <div className="subtitle content-block-65 margin-top-10">
                                Branded and Simplified UI
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18"> 
                            WDS presented a responsive empathetic design that was modern, simple and branded. The design included solutions that would simplify the interface, reduce customer complaints and return consumer loyalty.</p>

                            <p className="content-text-18"> 
                            The redesign was designed with empathy and created for the user. It was welcoming with an intuitive guided user experience, featuring a new homepage, a new UI, a simplified quick start section and a footer that allowed the user to jump to any section. WDS solved all the business and user problems. </p>
             
                        </div>
                    </section>

                    <section className="flex-layout-column  margin-top-50">
                        <div className="container-image-block flex-layout-column align-items-center">
                        <a id="solution1"></a> 
                            <img className="photo-container-cs-sb1 width-100" src={motorola_s2} alt="Case Study Image 3"/> 
                            <div className="margin-top-15 caption width-70"><i> Approved Design for the new SURFboard SB8200 DOCSIS 3.1 modem</i>
                           
                        </div>
                        </div>
                    </section>

                    <div className="hr-line-cs"></div>

                    <section className="flex-layout-section-full align-items-center"> 
                            <div className="title content-block-65">
                                <a id="solution2"></a> 
                                    Introduction of "Mary"
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                                <a id="solution2"></a> 
                                  Using Personas to Bridge the Communication Gap 
                            </div>
                            <div className="float-left content-block-65 margin-top-15"> 
                            <div className="float-right ">
                                    <img className="photo-container margin-left-min10per" src={mary} alt="the persona of Mary"/>
                                </div>
                                <p className="content-text-18">
                                    One of the toughest aspects of being a contractor is communication and acceptance, especially on an established team. These were the developers that originally designed the application and many were not happy that another UX designer was hired. They had already been through two failed attempts and fully expected to have the same results with WDS.</p>
                               

                                <p className="content-text-18">
                                To open the lines of communication, a persona named "Mary" was introduced. During the research phase it was surprising to discover that a large majority of complaints to the call center were women. The developers were asked if they get phones calls from their mother-in-laws for tech help. Over 75% responded that they do receive those type of phone calls.</p>

                                
                                <p className="content-text-18">The persona of "Mary" was a mother of three who worked a full time job. Her user journey: On the way home from work Mary needed to stop at Best Buy to replace her broken modem. After her purchase, she comes home to make dinner for the kids. Her plan is to get dinner started and set up the modem, giving her twenty minutes before dinner was ready. This was the first time Mary ever connected a modem, she was not very computer literate and computers intimated her. The challenge to the team was to simplify and guide Mary so she could complete her task. </p>
                            </div>
                            <div className="content-text-18 content-block-65 margin-top-25">
                                Mary was well received by Motorola and her persona helped the developers understand the design solution that was being presented to them. Many times during meetings and development of the design solutions, the developers and stakeholders would push back, questioning the project direction. WDS would only need to reply, "if we implement this solution, will you get a phone call from Mary?" This caused the developer to stop and think about how the solution solves the problem and to understand that they are developing this redesigned interface for real people, solving the original problem of disconnect between those building the product and those using the product. 
                        </div>
                        </section>

                    <div className="hr-line-cs"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="title content-block-65">
                            <a id="solution3"></a> 
                              Visual Settings Display  
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                             Start/Home Page
                        </div>
                        <div className="content-block-65">
                            <p className="content-text-18 margin-top-15">
                             A new landing/home page was designed to comfort the users and provide a visual display of their custom settings. The redesign guided the user on a section with global icons portraying the task they wanted to complete. Previously, the customer was dropped into the basic settings page, causing confusion and hesitation. The redesign relieved the confusion, making the user feel comfortable. Once the user had finished setting up the modem, the home screen became a data display. </p>
                        </div>
                    </section>
                    <section className="flex-layout-column flex-layout-center-center margin-top-50">
                            <div className="container-image-block flex-layout-column align-items-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_s5} alt="Case Study Image 5"/> 
                              
                            <div className="margin-top-15 caption width-70"><i> New home screen and data KPI dashboard.</i>
                            </div>
                            </div>
                    </section>

                    <div className="hr-line-cs display-none"></div>

                    <section className="content-header align-items-center flex-layout-column">
                        <div className="title content-block-65">
                            <a id="solution3"></a> 
                            WiFi Solution
                            </div>
                        <div className="subtitle content-block-65 margin-top-10">
                        <a id="solution3"></a> 
                            WiFi Quick Start
                        </div>
                    <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                            One of the biggest challenges WDS faced was simplifying the WiFi section. Work flows could not be simplified by organizing inputs in a logical order, due to the limitation of two unique users, cable operators and consumers. An approach  needed to be different, with a "WiFi Quick Start" solution. </p>
                            
                            <p className="content-text-18">Working closely with developers, WDS attempted to reduce the number of questions to set up their WI-FI. Currently the user needed to fill out nine inputs to complete the task. The goal was to reduce the user inputs from 9 to 5 and eliminate the need to input a 12 digit mac number (losing this number was a common issue). WDS solved this issue by challenging the developers to create an algorithm that automated the mac number and reduce the number of WI-FI user inputs down to 5.</p>

                            <p className="content-text-18">The quick start idea was game changing, and  the industry adopted this approach within a year.</p>  
                    </div>
                    </section>
                    
                    <section className="flex-layout-column margin-top-50">
                            <div className="container-image-block flex-layout-column align-items-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_s4} alt="Case Study Image 4"/> 
                                <div className="margin-top-15 caption width-70"><i> Quick start section semi-automated the process for WiFi connection, reducing the user inputs from 9 to 5.</i>
                            </div>
                            </div>
                    </section>

                    <div className="hr-line-cs display-none"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="title content-block-65">
                                <a id="solution4"></a> 
                                    Guiding the Users
                        </div>
                        <div className="subtitle content-block-65 margin-top-10">
                        <a id="solution4"></a>In Context Help
                    </div>
                    <div className="content-block-65">
                        <p className="content-text-18 margin-top-15">
                             The most effective design solutions are created from empathy, walking in the users' shoes. WDS knew for this project to be a success, the customer needed to feel supported and guided. A new approach to the help treatment needed to be developed. Competitor research revealed that  no one had a good help section solution that guided the user, especially in-context help. WDS solved this problem elegantly, allowing the user to click on the help link in any user input to reveal the answers. This solution tested very well.</p>
                    </div>
                    </section>

                    <section className="flex-layout-column margin-top-50">
                            <div className="container-image-block flex-layout-column align-items-center">
                                <img className="photo-container-cs-sb1 width-100" src={motorola_s6} alt="One Click Solution"/> 
                                <div className="margin-top-15 caption width-70"><i> A one click help solution, guiding the user has never been so eloquent!</i>
                            </div>
                            </div>
                    </section>

                    <div className="hr-line-cs display-none"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="title content-block-65">
                                <a id="solution10"></a> 
                                Meeting Users Expectations
                        </div>
                        <div className="subtitle margin-top-10 content-block-65">
                        <a id="solution10"></a>Guidance and Support
                    </div>
                    <div className="content-block-65">
                        <p className="content-text-18 margin-top-15">
                            WDS solutions for guidance and support was  simplifying and understanding any question the user may have while on the interface.  Unfamiliar terms and the use of acronyms  added to the cognitive overload and frustration as they tried to complete their tasks.</p>
                        
                            <p className="content-text-18 margin-top-15">
                            WDS solutions for the guidance and support started with the help section. Next, page introductions were placed to each section presenting to the users an overview and instructions. The issues of terms and acronyms were solved with rollovers.  </p>
                    </div>
                    </section>

                    <section className="flex-layout-column margin-top-50">
                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-100" src={motorola_s3} alt="Page introductions and rollovers for tech terms"/> 
                        <div className="margin-top-15 caption width-70"><i> Page introductions and rollovers for tech terms and acronyms provided the users guidance and support </i>
                        </div>
                        </div>
                    </section>

                    <div className="hr-line-cs display-none"></div>

                    <section className="content-header flex-layout-column align-items-center">
                        <div className="title content-block-65">
                                <a id="solution4"></a> 
                                IOS Application
                        </div>
                        <div className="subtitle content-block-65">
                        <a id="solution3"> </a> 
                                Mobile Application Solution
                        </div>
                        <div className="content-block-65">
                            <p className="content-text-18 margin-top-15">
                                WDS worked closely with the engineers and challenged them to develop an algorithm to automate part of the users work flow, specifically the WiFi section. WDS presented the simplified user work flow to the engineers and during the meeting it was  discovered that the proposed algorithm could also be used as a separate application to test the WiFi signal strength. WDS suggested a companion IOS application. The stakeholders were thrilled with the idea of including a free IOS application with the modem. WDS designed and developed the IOS companion application.</p> 
                        </div>
                    </section>
                   
                    <section className="flex-layout-column  margin-top-50">
                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-100" src={motorola_beforeafter} alt="Mobile Design"/> 
                            <div className="margin-top-15 caption width-70"><i> 
                                A mobile companion application for modem placement and interference  </i>
                        </div>
                        </div>
                    </section>

                    <div className="hr-line-cs display-none"></div>

                    <section className="content-header flex-layout-column align-items-center">
                            <div className="header-title-sm content-block-65">
                                Business Design Solutions
                            </div>
                        <div className="content-header flex-layout-column align-items-center">
                        <div className="title margin-top-50 margin-top-25sm content-block-65">
                            Communication Issues</div> 
                            <a id="solution3" className="subtitle no-decoration content-block-65">
                                 </a>
                            <div className="subtitle content-block-65 margin-top-10">
                            <a id="solution3" className="subtitle margin-top-75 content-block-65">
                                Establishing Transparency </a>
                                
                            </div>
                            <div className="content-block-65">
                                <p className="content-text-18 margin-top-15">
                                WDS was confused by how a brand name like Motorola would allow such a poorly designed, non-branded user interface on a consumer product go to market. That was their first question to the stakeholders, "how did this product UI fall through the cracks?" This issue exposed a large communication issue between the product, marketing and home division teams. WDS solution to this problem was to hold meetings at the end of each sprint. The meetings ran the course of the project and established a strong relationship between the teams that was previously non-existent. These meetings helped establish  transparency, allowing the product and marketing teams to understand the business case for the product redesign. </p> 
                            </div>
                       
                        </div>
                        </section>

                        <div className="hr-line-cs"></div>
                       
                        <section className="content-header flex-layout-column align-items-center margin-top-15sm">
                        <div className="title content-block-65">
                                Google Buyout
                            </div>
                            <div className="subtitle content-block-65 margin-top-10">
                             <a id="solution7"></a> Presenting to the Google Executives
                            </div>
                                <div className="content-block-65">
                                <p className="content-text-18 margin-top-15">
                                In the middle of the project, Google purchased Motorola. WDS and stakeholders were notified that the project was under review. Google stakeholders set up a meeting to present the project. The presentation was a success and the marketing/product teams attributed the results to  meetings organized by WDS. 
                                </p> 
                                </div>
                           
                        </section>
                        <section className="flex-layout-column margin-top-50">
                        <div className="container-image-block flex-layout-center-center flex-layout-column">
                            <img className="photo-container-cs-sb1 width-50" src={motorola_google} alt="Personas"/> 
                        
                        </div>
                    </section>

                    <div className="hr-line-cs display-none"></div>

                      <section className="content-header flex-layout-column align-items-center margin-top-50sm">
                         <div className="title content-block-65">
                            Deployment
                        </div>
                        <a id="deploy"></a>
                        <div className="subtitle content-block-65 margin-top-10">
                            Preparing for the Handoff
                        </div>
                        <div className="content-block-65 margin-top-15">
                            <p className="content-text-18">
                            WDS always uses the golden rule when a project is handed over to the business, to package the project in a way that would be understandable if the client's team didn't look at it for three months. This is done by developing journey maps, use cases and personas.  </p>
                            
                            <p className="content-text-18">
                            The final handoff for Motorola consisted of a CSS and HTML package  and implementing .asp tags for the final build. A pattern library and documentation, including best of practices, was created for the CSS files. Most importantly, the final build size was 985kb, (the standard was that it had to be less than 1Mb to work) phew! 
                            </p>
                        </div>
                    </section>

                    <div className="hr-line-cs"></div>

                    <section className="content-header flex-layout-column align-items-center margin-top-15sm"> 
                        <div className="header-title-sm text-align-left content-block-65">
                                Results
                        </div>
                        <a id="results"></a>
                            <div className="content-block-65 margin-top-50 margin-top-25sm">
                                <p className="content-text-18">
                                    One of the issues that surprised WDS the most was the old outdated user interface design. WDS just assumed a global brand such as Motorola would be professional and branded. The problem of product consistency is common and WDS wanted to ensure the problem was solved  by correcting the communication issues between the marketing, product and home division teams.  At the start of the project, WDS organized monthly and milestone meetings. Product, marketing, and home division communication were still strong, well after WDS was finished with the project. The approved design was adapted to the rest of the product line. The design today may look different since it is branded under the Arris name, but many of the design solution  implemented are still in use today.
                                </p>
                                <p className="content-text-18"> 
                                 WDS design solutions reduced returns by a staggering 40% and call center complaints were reduced by 70%. The new design was well received by  social media, tech magazines, and blogs. CNet reviewed the interface and stated "The Surfboard eXtreme has a robust and self-explanatory Web interface". Self explanatory for a complex setup process was the highest praise for any UX design. 
                                </p>
                </div>
                </section>

                <section className="flex-layout-row flex-layout-justified-sb content-block-65 flex-layout-center-center ">
                    <div className="flex-layout-center-center flex-items-align-top margin-top-10">
                        <ul className="dashed content-text-18 align-self-center">   
                               
                                <li>Lowered return rate by <b>40%</b></li>
                                <li>Reduced Customer Service calls by <b>70%</b></li>
                                <li>Reviewed positively by <a href="https://www.cnet.com/reviews/motorola-sbg6782-ac-surfboard-extreme-cable-modem-review/" >Cnet</a> and <a href="https://www.youtube.com/watch?v=cqTHxAN6cRwYouTube">YouTube</a> </li> 
                                <li>Improved communication between teams </li>
                                <li>Developed Style Guide and documentation </li>
                                <li>Created entire project under 1mb</li>
                                <li>Created first CSS style sheet in Motorola Products </li>
                               
                            </ul>      
                        </div>
                    </section>
                   
            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-65 margin-bottom-50 text-align-center "> 
                            <p className="callout-text-white text-align-center">
                                "The Surfboard eXtreme has a robust and self-explanatory Web interface with lots of features, including showing level of interference for its Wi-Fi networks." - CNET review</p><img  src={motorola_cnet} alt="CNET review"/>
                        </div>
                        
                        </section>
                    </div>
                </div>
          
                                          
                            )
                        }
                    }
export default case_study_1;