import React, { Component } from 'react' ;
import ux_bg from '../images/backgrounds/bg-ux.png';
import ux_s1 from '../images/photos/photo-ux-s1.png';
import services from '../images/graphic-services.svg';
import spotlight1 from '../images/photos/photo-ux-spotlight-stubhub.png';
import spotlight2 from '../images/photos/photo-ux-uncover-truth.png';

class ux_design extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <section className="flex-section-fixed-head flex-layout-center-center  image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                            UX Design
                    </div>
                        <img className="flex-image-container" src={ux_bg}  alt="Why WDS background" /> 
                </section> 
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text"> 
                            The best customer experience starts with the Golden Rule — Treat customers how you would like to be treated.
                    </div>
                </section>
                <section className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                    <div className="item-a-nb content-block-60 content-header flex-layout-column">
                        <div className="subtitle margin-top-15 text-align-left">
                             We put ourselves in their shoes
                        </div>
                        <div className="callout-text text-align-left text-white margin-top-15" style={{marginLeft:'3%'}}>
                            We imagine your users are our best friends — we listen to their concerns, being a shoulder to lean on, we observe them and then shift the focus from what went wrong to how you can help make it right.
                        </div>
                    </div>
                    <div className="grid-item-b container-image-block">
                        <img className="container-photo-callout" src={ux_s1}  alt="shaking hands" /> 
                    </div>
                </section>
            <main>
                <section className="flex-layout-section-full flex-layout-center-center margin-top-100 border-2 grey-blue" style={{marginLeft:'25%'}}>
                    <div className="subtitle margin-top-25">
                        Real UX is Old School Customer Service 
                    </div>
                    <div className="content-block-60 margin-top-25">
                        <p className="content-text-18"> 
                        The vision for the WDS is old meets new. Our vision for the WDS site was to convey the message of old school business values and old school customer service to UX. WDS method for UX mixes traditional customer service. Having UX designs on staff that knows and understand customer service has helped define our methodology. Understanding real world customer service of talking and observing people. Emphasizing with them when they struggle or fail. Keeping in mind that every customer, has a goal or task to complete helps to empathize with them through their journey, using that knowledge of the customers to systematically make that experience better across all customers touchpoints.</p>
                    </div>         
                    <div className="grid-2col-text margin-top-25" >
                        <div className="grid-title subtitle margin-bottom-20">
                            Connection between old school customer service and <br/> UX Design</div>
                        <div className="item content-text-24">
                            <b>Old School CS</b></div>
                        <div className="item content-text-24">
                            <b>UX Design</b> </div>
                        <div className="item content-text-18">
                             Connection with customers</div>
                        <div className="item content-text-18">
                            Empathy </div>
                        <div className="item- content-text-18">
                            Follow up promptly</div>
                        <div className="item content-text-18">
                            User Testing </div>
                        <div className="item content-text-18">
                            Show your appreciation</div>
                        <div className="item content-text-18">
                            Design enjoyable experiences</div>
                        <div className="item content-text-18">
                            Meet Customers expectations</div>
                        <div className="item content-text-18 margin-bottom-25">
                            Find out the Truth</div>
                    </div>
                </section>

                <section className="content-header flex-layout-center-center flex-layout-column">
                
                <div className="thin-hr width-70 align-self-center margin-top-100 margin-bottom-100"></div>
                    <div className="flex-layout-center-center title content-block-60">
                        Empathy Sparks Innovations 
                    </div>
                    <div className="content-block-55 margin-top-50">
                        <p className="content-text-18">Empathy is a very powerful selling tool. These days, it’s the new buzz word used by companies. But empathy has always been at the heart of User Experience and Customer Service. We are trained to use empathy in our work: “Walk in the user’s shoes.” “See the problem as if you were experiencing it yourself.“Observe their daily routines.” All of these mantras and behaviors are empathetic techniques that UX designers have honed by creating amazing, innovative products and services. In reality this is old school custom service. </p>

                        <p className="content-text-18">WDS method for UX is old school customer service. Understanding real world customer service of talking and observing people. Emphasizing with them when they struggle or fail. Keeping in mind that every customer, has a goal or task to complete helps to understand their journey, use that knowledge of the customers to systematically make that experience better?</p>
                    </div>
                </section>
                <section className="content-header flex-layout-column flex-layout-center-center border-tb-5 margin-top-100 grey padding">
                    <p className="title text-white flex-layout-center-center">
                        UX Design is the study of people</p>
                    <div className="content-block-55 margin-top-15">
                        <p className="content-text-18 text-white">Understanding and empathizing with them as they go about completing a task. Every action of that task provides an experience for the customer, sometimes unconscious  for the UX is all about user experience. The experience they have with your product service. The experience can be positive or negative depending how much of the user went into the design of the product, system and user interface. User expectations have changed over the years. Simplicity is expected. Just look at the changes that have happened in the last decade with Retail.  Amazon, simplified the shopping experience down to one click.  </p>
                        <p className="content-text-18 text-white">The user experience takes many shapes and forms. From retail, products, websites, to applications. The user has a goal to achieve and it's up to you to make it enjoyable. Its critical to your customer success to have a company that not only understand and empathizes with people, but understands cognitive psychology. Knowing how the unconscious brain makes decisions, reveals solutions on a deep level. </p>
                    </div>
                </section>

                <section className="content-header flex-layout-center-center flex-layout-column margin-top-100 ">
                    <div className="flex-layout-center-center title content-block-60">
                    An effective customer experience is one built with intention that takes into account all of the various touchpoints and tasks that a customer Journey.
                    </div>
                </section>
                <section className=" content-header flex-layout-center-center flex-layout-column margin-top-100 ">
                    <div className="grid-2col-callout flex-layout-center-center title content-block-60">
                   
                    <div className="callout1">
                    <img className="container-spotlight"  src={spotlight1}  alt="Spotlight" />
                    </div> 
                    <div className="grid-right">
                    <img className="" src={spotlight2}  alt="Spotlight" />
                   </div> 
                   
                </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-100"></div>
        </main>
            <section className="flex-layout-section-full flex-section-align-center margin-top-50">
                <div className="grid-2col-text-center margin-top-25" >
                    <div className="grid-title subtitle content-text-24 margin-bottom-20">
                        Full List of UX Design Services</div>
                    <div className="item content-text-18">
                        Interaction Design</div>
                    <div className="item content-text-18">
                        User Interface Design</div>
                    <div className="item content-text-18">
                       Visual Design</div>
                    <div className="item content-text-18">
                        Journey Maps</div>
                    <div className="item- content-text-18">
                        Personas and User Stories </div>
                    <div className="item content-text-18">
                        Concept Validation</div>
                    <div className="item content-text-18">
                        Wireframes</div>
                    <div className="item content-text-18">
                        User Workflows</div>
                    <div className="item content-text-18">
                       Design Systems and Style Guides</div>
                    <div className="item content-text-18">
                       Prototyping</div>
                    <div className="item content-text-18">
                       Information Architecture</div>
                    <div className="item content-text-18">
                        Usability studies</div>
                    <div className="item content-text-18">
                        Research</div>
                    <div className="item content-text-18">
                        Design Thinking </div>
                </div>
            </section>
                <div className="container-grid-2col-full width-100 flex-layout-justified-sb border-3px bottom-border margin-top-100 yellow-bg "> 
                <div className="item-a-nb content-block-50 flex-layout-column">
                    <div className="content-block">
                        <p className="callout-text"> Looking for a larger Agile Transformation Program? </p>
                        <p className="callout-text">  WDS is the leader in applying design solutions, experience strategy and observational insights to the development of applications, websites, SaaS, products and mobile.</p> 
                    </div>
                </div>
            <div className="item-b container-image-block">
                <img className="flex-image-container" src={services}  alt="Your Business is Our Joy" /> 
            </div>
            </div> 
            </div>
        )
    }
}

export default ux_design;