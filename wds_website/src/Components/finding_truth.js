import React, { Component } from 'react' ;
import finding_truth from '../images/backgrounds/bg-finding-truth.png';
import finding from '../images/photos/photo-documentation-s1.png';
import finding_truth1 from '../images/photos/photo-finding-truth-s1.png';
import finding_truth2 from '../images/photos/photo-finding-truth-s2.png';
import finding_truth3 from '../images/photos/photo-finding-truth-s3.png';
import finding_truth4 from '../images/photos/photo-finding-truth-s4.png';
import finding_truth5 from '../images/photos/photo-finding-truth-s5.png';
import finding_truth6 from '../images/photos/photo-finding-truth-s6.png';
import finding_truth7 from '../images/photos/photo-finding-truth-s7.png';
import finding_truth8 from '../images/photos/photo-finding-truth-s8.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class innovative_solutions extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                        Finding the Truth</div>
                <img className="flex-image-container width-100" src={finding_truth}  alt="Why WDS background" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    "Truth is the torch that gleams through the fog without dispelling it." Claude Adrien
                </div>
            </section>
            <section className="grid-2col-photo-content photo-content-color border-bottom-5 height-670" > 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left">
                        Our methodology allows us to connect with users. Our UX designers connect with users by empathizing by observing and interviewing. People will always open up and confide in you if they feel you are on their side and you care about their needs. This is how WDS uncover truths that were unknown. </div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={finding_truth2}  alt="Finding Truth" /> 
                </div>
            </section>
    
            <div className="content-header flex-layout-center-center flex-layout-column margin-top-75">
                <div className="flex-layout-center-center title text-align-center margin-top-75 width-100 content-block-60">
                    It's the people behind our methodology that makes the difference. 
                </div>
                <div className="content-block-55 margin-top-50">
                    <p className="content-text-24 text-align-center">
                    WDS discovers the patterns and themes that provide actionable, deeper and more valuable perspectives on your customers' wants, needs and motivations.</p>
                    <p className="content-text-24 text-align-center">
                    The most meaningful insights for experience strategy are developed with a behavior-based understanding of users. Our experience strategists observe people in context - where they work, play or live - to understand their goals, needs and aspirations as they go about their daily lives. If a product does not yet exist, this firsthand look helps to identify unmet needs that a product may solve.</p>
                </div>
            </div>
            
            <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

            <section className="float-left align-items-center flex-layout-column">
                <div className="title content-block-60">
                        Establish Business Context
                </div>
                <div className="subtitle content-block-60 margin-top-15">
                        Defining the Challenge
                </div>
                <div className="content-block-60 content-text-18 margin-top-15"> 
                <div className="float-right">
                        <img className="photo-container" style={{marginTop: '-5px'}} src={finding}  alt="Establish Business Context" /> 
                    </div>  
                    <p className="content-text-18"> 
                        At the beginning of an engagement, we set the foundation for success by developing an understanding of the business, the industry, the competition and relevant trends. This becomes the basis for how we approach all subsequent phases. Along with secondary research, we interview stakeholders and subject matter experts. This helps us gain a first-hand awareness of the company context, allowing us to build connections within the business, that contributes to stakeholder alignment. This activity begins to define hypotheses for where the company intends to play in the market, who it intends to serve and how it plans to serve them.
                    </p>
                </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Field Observation and Interviews
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            Developing insights from observations
                    </div>
                        <div className="content-block-60 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            Great strategies for design solutions are built on rich insight. The most meaningful insights for experience strategy are developed with a deep, behavior-based understanding of users or customers. 
                            <div className="float-right">
                        <img className="photo-container" src={finding_truth3} style={{marginRight:'12%'}} alt=" Field Observation and Interviews" /> 
                            </div> Our experience strategists observe people in context - where they work, play or live - to understand their goals, needs and aspirations as they go about their daily lives. If a product does not yet exist, this first-hand look helps to identify unmet needs that a product may solve.</p>

                            <p className="content-text-18">
                            Using techniques from the fields of anthropology, psychology, product development and design, we use methods such as “contextual inquiry” to observe and record a rich variety of data, including body language, how people interact with their tools and how they construct their environments to be successful in their worlds. 
                            
                              <br></br> The value here is seeing and finding unexpected elements which lead to surprising insights.</p>

                            <p className="content-text-18">
                            To get to the core of what they care about, we also open authentic dialogues with customers to hear the stories that define their experiences.</p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Developing a Persona
                    </div>
                        <div className="subtitle content-block-60 margin-top-15">
                            Introducing the voice of the user
                        </div>
                        <div className="content-block-60 content-text-18 margin-top-15"><div className="float-right">
                        <img className="photo-container" src={finding_truth4}  alt="Developing a Persona" /> 
                    </div>  
                            <p className="content-text-18"> Because specific targets are better than vague ones, we create personas - single archetypes that represent a group of people with similar behaviors, attitudes and motivations. Personas keep us focused on real people who exhibit unique sets of characteristics. These behavior-based personas assist us throughout ideation, design and marketing to help teams develop appropriate solutions and messages.</p>
                            <p className="content-text-18">While personas are a popular technique used by many companies, especially to argue user cases,  WDS personas are far more robust than those created from market research data alone. We develop well-crafted personas grounded in user observations around REAL users instead of simple demographic data. </p>           
                        </div> 
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                           Visualize the experience touchpoints
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            The User Journey
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                       <div className="float-right">
                        <img className="photo-container" src={finding_truth5}  alt=" Visualize the experience touchpoints" /> 
                        </div>      
                        <p className="content-text-18"> Data is only as valuable as the meaning we derive
                            from it. We have tried-and-true methods for moving
                            from observations to insights. These meaningful
                            insights are the next building block in the process of
                            building an experience strategy.</p>

                        <p className="content-text-18"> We take a comprehensive, rigorous approach to
                            process data from the field and use it to spark
                            explanations of what is behind the observations.
                            Getting to the deeper understanding that insights
                            provide beyond the raw data is a key step that sets
                            professionals apart from amateurs.</p>   
                    </div>
                </section>
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Simplified workflow diagram
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            Understanding the Cognitive State of the Users
                    </div>
                        <div className="content-block-60 content-text-18 margin-top-25">
                            <p className="content-text-18"> 
                            When an engagement centers on a complex tool for enterprise business, the simplified workflow diagram captures activity across organizational roles and provides stakeholders a single view of all of the work accomplished in and around a tool. This diagram gives stakeholders an “aha!” moment as, for the first time,  <div className="float-right">
                                <img className="photo-container" src={finding_truth6}  alt="Simplified workflow diagram" /> 
                            </div>they have a picture of the duties employees or customers accomplish in their work lives. </p> 

                            <p className="content-text-18"> 
                            Through the use of a simplified workflow diagram, we see how a user moves through tasks and we extrapolate from here to the various cognitive states a user inhabits while engaged with the solution or process.
                            These cognitive states represent a model of what is in people’s minds as they do their work: their mental model. This understanding has implications for both design and marketing.</p>

                            <p className="content-text-18"> 
                            The cognitive states can help to inform the interface for a new way to navigate and complete tasks in a software tool. By aligning with how people think about their work, we produce tools that feel intuitive and easy to use. This understanding also provides an input to marketing, providing marketers with key information for creating a communication plan that resonates with customers. </p>
                        </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="grid-gallery-2col flex-layout-column">
                    <div className="gallery-2col-1 flex-layout-section-full margin-left-325">
                        <div className="title">
                            Develop frameworks                        
                        </div>
                        <div className="subtitle  margin-top-15">
                            Principles for design strategies
                        </div>
                        <div className="content-text-18 content-block-75 margin-top-15">
                            <p className="content-text-18"> A solid design strategy provides a decision-making framework to drive customer-centered initiatives across the company. After the investment in deep customer understanding, the results can be shared among many departments to increase their value to the company.
                            The framework is a set of principles or questions that guide the development of ideas for solutions as well as the subsequent work performed by multiple teams in developing and marketing those solutions: architects, marketers, designers, branders, etc. This decision-making framework is valuable because it puts to work the understanding of the needs and concerns of the customer group, captured in the field observations. It persists beyond a specific project, providing value long after an engagement.</p>
                        </div>
                    </div>
                    <div className="gallery-2col-2t">
                        <div className="title">
                            Design and evaluate                        
                        </div>
                        <div className="subtitle  margin-top-15">
                            Envision, prioritize and rank opportunity concepts
                        </div>
                        <div className=" content-text-18 content-block-50 margin-top-15">
                            <p className="content-text-18"> 
                            A key value that an experience strategy delivers 
                            is a set of new ideas for serving customers. The information distilled from the previous techniques and the company’s strategic requirements comes together in an Opportunities Matrix that clearly lays out a set of options for improving the experience of the user base to increase their engagement and satisfaction. </p>

                            <p className="content-text-18">
                            To generate the ideas, WDS teams collaborate with product and executive teams to brainstorm concepts for innovation and improvement. Together, the combined team prioritizes the opportunities based on the difficulty of implementation, the feasibility for the business to deliver and the impact that each solution concept may have on users.</p>
                        </div>
                    </div> 
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Establish an design-driven product roadmap
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            A way forward, with customers in mind
                    </div>
                    <div className="content-block-60 content-text-18 margin-top-15">
                        <p className="content-text-18"> 
                         Design-driven product roadmaps give the needs of customers a seat at the table, helping to ensure that what is released is what customers will value.
                         
                    <div className="float-right">
                    <img className="photo-container" src={finding_truth7}  alt="Establish an design-driven product roadmap" /> 
                    </div> We collaborate with product teams to incorporate the understanding and strategy developed in the revealing truth phase into the plan for how to group and sequence capabilities in an application. This includes the selection of features for the minimum viable product – an MVP that users and customers will be eager to adopt because it is developed with their needs in mind.</p>
                            
                            <p className="content-text-18"> 
                            An design-driven product roadmap provides a way forward to head in the direction established by the experience strategy. Having deep user understanding enables the cadence of releases to be structured to appeal to users, providing a built-in incentive to update an application. This is how we build a holistic experience that addresses customers’ and business’ goals and positively impacts the company’s value.</p>    
                        </div>
                </section>
                    
                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                <section className="float-left align-items-center flex-layout-column">
                    <div className="title content-block-60">
                            Start Early and establish your project plan                      
                    </div>
                    <div className="subtitle content-block-60 margin-top-15">
                            Identify how to drive engagement with the design solutions
                    </div>
                        <div className="content-block-60 content-text-18 margin-top-15">
                            <p className="content-text-18"> 
                            <div className="float-right">
                        <img className="photo-container" src={finding_truth8}  alt="Start Early and establish your project plan " /> 
                    </div>
                            The revealing truth phase is an investment in understanding how to create an experience that resonates with customers. 
                            One dividend of the investment is that these insights can now feed directly into the strategy for enabling customers to become aware of and engage with the planned experiences, and the organization as a whole.</p>

                            <p className="content-text-18"> 
                            This plan uses user insights, as well as market data, to determine the channels, content, messages and cadences that are right for specific personas at specific points in their journeys. This enables companies to build relationships with their customers that extend beyond transactions to build value. It ensures that great experiences find an audience in a world full of offerings. </p>
                        </div>
                    </section>
                
                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className=" margin-top-50 content-block-55 margin-bottom-50 text-align-center "> 
                       <img className="content-block-55 margin-bottom-50 " src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div >
                          <p className="callout-text-white text-align-center">WDS offers Empathy Workshops.<p className="text-align-center margin-top-25" ></p>  </p>
                    </div>
                </div>
            </section>    
            </div>
        )
    }
}

export default innovative_solutions;