import React, { Component } from 'react' ;
import bg_ui from '../images/backgrounds/bg-ui.png';
import finding from '../images/photos/photo-documentation-s1.png';
import didyouknow from '../images/graphic-didyouknow.png';
import finding_truth2 from '../images/photos/photo-finding-truth-s2.png';
import ui_s1 from '../images/photos/photo-ui-s1.png';


class ui_design extends Component {
    render () {
        return(
        <div className="flex-layout-column"> 
            <section className="flex-section-fixed-head-child flex-layout-center-center image-background-border-tb">
                <div className="header-text-center header-title text-white">
                    User Interface Design</div>
                <img className="flex-image-container" src={bg_ui}  alt="User Interface" /> 
            </section>
            <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                <div className="callout-text-lg"> 
                    “Simplicity is the ultimate sophistication.” –Leonardo da Vinci

                </div>
            </section>
            <section className="grid-2col-photo-content photo-content-color border-bottom-5" style={{height:'670px'}}> 
                <div className="grid-item-b content-block-60 content-header flex-layout-column">
                    <div className="callout-text text-align-left text-white">
                       We live for the comment "why didn't we think of that" usually expressed by stakeholders and managers during our design reveal. Our for passion for the last 20 years is solving problems on complex user interfaces and creating simple solutions. 
                </div>
                             
                </div>
                <div className="item-a-nb container-image-block">
                    <img className="container-photo-callout" src={ui_s1}  alt="shaking hands" /> 
                </div>Image by Avi Chomotovski from Pixabay 
            </section>
    
            <section className="content-header flex-layout-center-center flex-layout-column margin-top-200 ">
                <div className="flex-layout-center-center title text-align-center content-block-60">
                    WDS UI Designs are all about the user. We do not begin the design until research has been completed and the users needs and expectations are understood.

                </div>
                <div className="content-block-60 margin-top-50">
                    <p className="content-text-24 text-align-center">
                     Our work has simplified interfaces for applications used by critical industries such as the energy sector, who are currently using our designed software to monitor oil rigs. Or for the pharmaceutical industries using our designed software for monitoring drug manufacturing facilities.</p>
                </div>
            </section>
            <div className="flex-layout-section-full flex-layout-center-center flex-layout-column">
                
                <div className="flex-layout-section thin-hr margin-top-200 margin-bottom-100" style={{ width: '75%' }}></div>

                <section className="flex-layout-section-full margin-bottom-75">
                    <div className="flex-layout-section-full flex-layout-center-center">
                        <div className="title flex-layout-center-center">
                            Design is not about being pretty or aesthetically pleasing it has to do with simplicity.
                        </div>
                        <div className="subtitle content-block-75 margin-top-25">
                        WDS has been designing User Interfaces for over twenty years. We originally designed user interfaces for websites, but that changed with our first complicated industrial user interface we designed for Motorola. Since then our UI design services expanded to software, mobile,  SaaS and Kiosk. 

                        </div> 
                   
                    </div>
                </section> 
    
                
            </div>
            <div className="flex-layout-section-full align-items-center grey border-top-5">
                    <div className="grid-2col-text-photo align-self-center width-100  margin-top-50       margin-bottom-50"> 
                    <div className="col2-text grid-placeself-center width-70 margin-left-75">
                        <div className="col2-photo width-100 grid-placeself-center">
                            <img className="flex-image-container width-100" src={didyouknow}  alt="Ux is the best therapy!"/> 
                        </div>
                    </div>
                    <div className="content-block">
                        <p className="content-header"> WDS specialty is creating success from failure </p>
                    </div>
                    </div>
                </div>  
        </div>
        )
    }
}

export default ui_design;