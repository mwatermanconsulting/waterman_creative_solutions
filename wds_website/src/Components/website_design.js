import React, { Component } from 'react' ;
import Helmet from 'react-helmet';
import design from '../images/backgrounds/bg-digital-design.png';
import web1 from '../images/photos/photo-web-s1.png';
import web2 from '../images/photos/photo-web-s2.png';
import web4 from '../images/photos/photo-web-acd.png';
import web5 from '../images/photos/photo-web-ww.png';
import titanic from '../images/graphic-titanic.svg';
import web6 from '../images/photos/photo-web-kinetix.png';
import web7 from '../images/photos/photo-web-norwood.png';
import web8 from '../images/photos/photo-web-pc.png';
import didyouknow from '../images/graphic-didyouknow.svg';

class digital_design extends Component {
    render () {
        return(
            <div>
            <Helmet>
                <meta name="description" content="  WDS has been creating design solutions for websites for over 20 years. All of the design solutions are derived from UX research and user personas. WDS websites designs are as unique as your business. " />
                <meta charSet="utf-8" />
            <title>Website Design</title>
            <link rel="canonical" href="http://watermandesignsolutions.com/website_design" />
            </Helmet>
        <div id="#top" className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">
                        Website Design
                    </div>
                        <img className="flex-image-container width-100" src={design}  alt="Case Studies" />     
                </section>

            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    “Getting a quality website is not an expense but rather an investment.” <br></br> - Dr. Christopher Dayagdag

                </div>
            </section>

            <section className="grid-callout photo-content-color border-bottom-5" > 
                <div className="grid-placeself-center content-block-75 flex-layout-column">
                    <div className="callout-text padding-20 text-align-left margin-top-15 margin-left-2" >
                    WDS has been creating design solutions for websites for over 20 years. All of the design solutions are derived from UX research and user personas.  WDS websites designs are as unique as your business.  </div>        
                    </div>
                    <div className="grid-callout-photo grid-placeself-center content-block-75 margin-tb-100">
                        <img className="container-photo-callout margin-left-15per margin-top-15sm" src={web1}  alt="Finding Truth" /> 
                    </div>
            </section>

            <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-75">
                <div className="float-left flex-layout-center-center content-block-65">
                    <div className="header-title-sm-center">
                            Custom Designed Websites that Meet Users Expectations
                    </div>
                    <div className=" margin-top-50">
                        <p className="content-text-21 margin-top-15sm">
                            It is easier today than ever for a business to get a website. There are countless template sites that are easy to use for people with limited experience. Your business and customers are unique and your website should reflect that uniqueness, your business deserves to stand out.</p> 
                            
                            <p className="content-text-21">   
                            The typical user has a good design eye and can tell the difference between a template website and a custom website. They will notice when a business cares enough about them to create a design that is based on UX research. Customers will always choose the better experience every time. Your business wasn't born from a template and your users deserve more. Don't settle for good enough!</p>
                    
                    <div className="flex-layout-column flex-layout-center-center margin-top-50 align-self-center">    
                        <img src={titanic} className="photo-container" alt="Good Enough is not good enough"/>
                    </div>
                    </div>
                </div>
            </section>
            
            <div className="hr-line"></div>

            <section className="flex-layout-section-full flex-layout-center-center">
                <div className="header-title-sm">
                    A Small Sample of Our Custom Websites 
                </div>
                <div className="align-center justify-content-center align-items-center margin-top-50 margin-top-50sm">
                    <ul className="grid-clients-wrapper align-items-center  width-70">
                    
                    <li  className="grid-clients-box image subtitle text-white"  data-content="ACD">
                        <img className="width-100 height-100"  src={web4}  alt="ACD" />
                    </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="White Wolf Consulting"> 
                        <img className="width-100 height-100" src={web5}  alt="White Wolf Consulting" />
                    </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Kinetix">
                        <img className="width-100 height-100" src={web6}  alt="Kinetix" />
                    </li>
                    
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Norwood Company">
                        <img className="width-100 height-100" src={web7}  alt="Norwood Company" />
                    </li>
                    <li  className="grid-clients-box image subtitle text-white"  data-content="Pierre and Carlo">
                        <img className="width-100 height-100" src={web8}  alt="Pierre and Carlo" />
                    </li>
                </ul>
                </div>
            </section>

            <div className="hr-line"></div>

            <section className="flex-layout-section-full">
                <div className="grid-2col-text-center width-75 align-self-center">
                    <div className="grid-title header-title-sm-center content-text-24 margin-bottom-20 ">
                            Website Design Services: 
                    </div>
                    <div className="item-web content-text-18">
                            - Responsive Design
                    </div>
                    <div className="item content-text-18">
                        <a href ="./core_offerings" className="no-decoration greenlink">
                            - Accessibility</a>
                    </div>
                    <div className="item-web content-text-18">
                        <a href ="./core_offerings" className="no-decoration greenlink">
                            - Telemetry</a>
                        </div>
                        <div className="item content-text-18">
                            - Content Creation
                        </div>
                        <div className="item-web content-text-18">
                            - Typography 
                        </div>
                        <div className="item content-text-18">
                            - Front-End Development
                        </div>
                        <div className="item-web content-text-18">
                            - Custom Images
                        </div>
                        <div className="item content-text-18">
                            - Mobile Design
                        </div>
                        <div className="item-web content-text-18 width-100 ">
                        <a href ="./core_offerings" className="no-decoration greenlink">
                            - Analytic Data Reporting</a>
                        </div>
                        <div className="item content-text-18">
                            <a href="./design_systems" className="no-decoration greenlink">
                            - Pattern Libraries</a>
                        </div>
                    </div>
                </section>

                <section className="flex-layout-section-full flex-layout-column flex-layout-center-center margin-top-100  grey border-top-5">
                <div className="content-block-55  text-align-center "> 
                       <img className="photo-container" src={didyouknow}  alt="Did You Know?" /> 
                      
                      <div>
                          <p className="callout-text text-white text-align-center">  WDS does not use templates - custom design only!</p>
                    </div>
                </div>
            </section>     
            </div>
            </div>
        )
    }
}

export default digital_design;