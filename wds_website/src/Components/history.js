import React, { Component } from 'react' ;
import history from '../images/backgrounds/bg-ourhistory.png'
import photo_history from '../images/photos/photo-history-s1.png'
import history_3 from '../images/photos/photo-history-s3.png'
import time from '../images/WDS-timeline.png'
import mike from '../images/mike.png';
import terri from '../images/terri.png';

class about extends Component {
    render () {
        return(
            <div className="flex-layout-column"> 
                <section className="flex-layout-section-fixed yellow flex-layout-center-center image-background-border-tb">
                    <div className="header-text-center header-title text-white">Our History</div>
                        <img className="flex-image-container width-100" src={history}  alt="Why WDS background" /> 
                </section>
                <section className="container-section-1-primary flex-layout-center-center border-bottom-5 callout-color-dark">
                    <div className="callout-text-lg"> 
                    20 years of creating amazing design solutions and experiences

                    </div>
                </section>
                <section className="grid-callout photo-content-color border-bottom-5" style={{height:'670px'}}> 
                    <div className="grid-callout-text grid-placeself-center content-block-75 content-header flex-layout-column">
                        <div className="callout-title text-white margin-top-15">
                             Surreal Beginnings
                        </div>
                        <div className="callout-text text-align-left text-white margin-top-15" >
                        Since 1997 WDS has been evangelizing design under its original name, Surreal Concepts. Started by the husband and wife team, Terri and Michael Waterman, we began with a simple premise and small list of design services. The mission was always to provide professional design services and marketing for a reasonable cost to small and mid-size companies. 
                        </div>
                    </div>
                    <div className="grid-callout-photo grid-placeself-center">
                        <img className="container-photo-callout" src={photo_history}  alt="UX" /> 
                    </div>
                </section>
                <section className="flex-layout-section-full align-items-center">
                    <div className="title content-block-55 margin-top-75">
                        Who is WDS?
                    </div>
                    <div className="subtitle content-block-55 margin-top-15">
                        The Power of Two
                    </div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15"> 
                        WDS is a UX/UI design consultancy agency lead by the husband and wife team Terri and Michael Waterman. They have built the business and have been advocates for design for over twenty years. Growing the business from a small design agency servicing small business to the business today that serves global brands offering a full range of design solutions and services. </p>
                    </div>
                </section>
                    <image className="flex-layout-section-fixed flex-layout-center-center">
                        <img className="width-60" src={time} alt="Time Line"/>
                    </image>
                <section className="flex-layout-section-full align-items-center">
                    <div className="subtitle content-block-55">
                        It started with video</div>
                    <div className="content-block-55">
                        <p className="content-text-18 margin-top-15">
                        Our first creative tool in the digital world goes back to the Amiga 500 and the first digital video solution NewTek video toaster. Michael would set up systems to support the dinosaur age of graphic software. Amiga was one of the great forerunners of user design with Kai’s Power Tools, Bryce. Animation and video production was something we spent a lot of time doing.</p>
                    </div>
                </section>

                <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            Publishing Venture</div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-15"> 
                            In the mid-90s Terri did onsite consulting and published New Drug Applications for the FDA at Zeneca Pharmaceuticals using Interleaf software. Web design was in its infancy, and she joined a web team by 1998, creating intranet websites for different divisions to improve group communication. Knowledge of code was crucial to digital design, and she fostered relationships with other software engineers to learn about their craft in order to assimilate design to their products.</p>
                            <p className="content-text-18">
                            The first big client Surreal Concepts landed after incorporating as a C corporation was a label manufacturer Apogee Industries. They printed flexographic labels for Smithkline Beecham, Roos Foods, SmithKline, and Boiron Homeopathics. </p>
                        </div>
                    
                     </section> 

                     <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                     <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            Investing in Digital Design Skills</div>
                            <p className="content-text-18 content-block-55 margin-top-15"> 
                            Terri then worked for InvestorForce, provider of investment analytics and reporting solutions for institutional consultants. She redesigned the entire website, meeting aggressive deadlines, and established a successful working relationship with CEO. She initiated a project for the redesign of an acquired company, Altvest. Traveling to NYC, she managed, directed and implemented the site architecture and design, working with a 9-person team of web developers and product managers. Designing and developing different prototypes for different products throughout the site, improving the design and introducing better user experience. This project increased knowledge of programming code and quality assurance systems to quickly work effectively with all groups involved.</p>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            UX Offerings</div>
                        <div className="content-block-55">
                            <p className="content-text-18 margin-top-25"> 
                            By 2001 Surreal Concepts was focused on building websites and marketing campaigns for small to mid-size companies, ranging from B2Bs to consumer products.</p>
                            <p className="content-text-18">
                            In early 2002, a UX informational site called Web First Aid was created for website design, which included studies done at Stanford University and the Neilson Norman Group, two credible resources in usability, backed with data to support their research.</p>
                            <p className="content-text-18">
                            This site along with the Surreal Concepts website led to a contract with a Pfizer agency to design and organize the largest HCP site at the time. They realized that the same principles of design for small companies were scalable to enterprise levels. Consulting with Pfizer was an opportunity to show that simplicity and efficient communication with strong teamwork helped save Pfizer a half a million dollars
                            </p>
                        </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="subtitle content-block-55">
                            Our First Youtube Video</div>
                        <span className="content-block-55 margin-top-25" style={{backgroundColor: 'black'}}>
                        <iframe width="70%" height="450px" style={{marginLeft: '100px'}} src="https://www.youtube.com/embed/BHQSXijoCVY?controls=0&amp;start=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </span>
                    </section>
                    
                        
                    <section className="flex-layout-section-full align-items-center margin-top-75">
                        <div className="subtitle content-block-55">
                            Business Design Solutions - Pfizer
                        </div>
                        <div className="content-block-55">
                                <p className="content-text-18 margin-top-25"> An unexpected change for WDS happened during the Pfizer job. Michael has innate knowledge of not only customers, but businesses. It was noticed that the application being used by the developers was extremely buggy. It causes an unacceptable amount of lost man hours, full story here. Issues were documented and saved Pfizer a lot of money.</p>
                                <p className="content-text-18">This is one of the many stories that has describes how Surreal Concepts evolved into what WDS is today. The changes and evolution of our services is due to our clients needs.</p>
                                <p className="content-text-18">This was prevalent when tackling design problems and issues with content management systems that didn’t work. Complaints and documentation by Michael  on lost man-hours helped Pfizer to understand the issue and take appropriate action. They replaced the vender, saving and recouping a half a million dollars. Michael has always had an innate sense of business which he applies to his research. Solving business communication issues can solve many of the design issues.</p>

                                <p className="content-text-18"><a href="../case_study_4">Read full case study</a></p>
                            </div>
                    </section>

                    <div className="flex-layout-section-full width-100 grey margin-top-50 border-tb-5 flex-layout-center-center" 
                          style={{minHeight: '275px'}}>
                            <p className="callout-text-lg">Need a quote and an image for a user break</p>
                    </div>
                    
                   <section className="flex-layout-section-full align-items-center  margin-top-100">
                        <div className="title content-block-55">
                            Empathic Designers - Motorola
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            UX Methodology is Tested
                        </div>
                    <div className="content-block-55 margin-top-25">
                        <p className="content-text-18"> 
                            WDS has a basic understanding Empathy is critical for true change to take place. Finding that connection between user, developers and stakeholders, is the key for success. </p>

                        <p className="content-text-18">
                            WDS was contracted to figure out the issues facing their high end modem line. By following the golden rule and walking in the shoes of the human being using this product. WDS was able to provide design solution for a complex set of problems and issues.WDS running the whole UX design project for its high end modems, and communication development.</p>

                        <p className="content-text-18">
                            It was the first time we applied our methodology on an enterprise level. Before we were providing design solution for websites and we were not finding website to be a UX challenge. The move to applications allowed us to grow our UX and design knowledge.
                        </p>

                        <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p>
                    </div>
                    </section>

                    <div className="thin-hr width-70 align-self-center margin-top-75 margin-bottom-75"></div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Big Data 
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Data Visualization Applications- StubHub
                        </div>
                        <div className="content-block-55 margin-top-15">
                            <p className="content-text-18"> 
                            As in the case with Motorola, WDS followed UX consultants that were not true designers and could not meet the clients or the business needs. Data visualization happened with StubHub and solving their dilemma with user traction. User retention went from 1% to 96% in 6 months under the pressure of losing the reporting tool project team. </p>
                        
                            <p className="content-text-18"><a href="../case_study_3">Read full case study</a></p> 
                        </div>    
                    </section>
                            <div className="subtitle margin-top-50">
                    </div>

                    <section className="flex-layout-section-full align-items-center">
                        <div className="title content-block-55">
                            Design Matters Always Matters
                        </div>
                        <div className="subtitle content-block-55 margin-top-15">
                            Our Accomplishments
                        </div>   
                 </section>       
                    
                <div className="margin-top-50">
                    <img className="width-100" src={history_3} ></img>
                </div>
                <div className="flex-layout-section-full flex-layout-center-center margin-top-100"> 
                    <div className="title">Our Leaders</div>
                    <div className="container-grid-2col-full margin-top-100 margin-bottom-100 flex-layout-center-center" style={{width: '75%'}}> 
                   
                    <div className="grid-item-2a">
                        <div className="content-block-services flex-layout-row ">
                        <img className="photo-container-xsm" src={mike} alt="Michael Photos"/> 
                        <div className="flex-layout-column">
                            <p className="subtitle margin-left-15">Michael Waterman</p>
                            <p className="margin-left-15"><i>President, Business Consultant, UX/UI designer, Genius</i></p>
                        </div>
                    </div>
                    <div className="content-block-services margin-top-25">
                            <p className="content-text-18"> Michael was raised in a creative family and spent his childhood creating, designing and drawing. As Michael matured he began a career in retail. His friendly and caring nature made him a natural at customer service and he quickly climbed the corporate ladder becoming a regional manager in his early twenties. </p>

                            <p className="content-text-18">
                            Life changed after he married Terri. She thought Michael’s talents were being wasted in retail and being an artist herself she inspired him to revisit his creativity.</p>

                            <p className="content-text-18">
                            In the early nineties, Michael left retail and took a year off to learn computers and digital design and video editing. Michael learned Photoshop, version 3.5, Illustrator and video editing. Michael having the entrepreneurial spirit and wanted to start his own design company. Along with Terri they choose a name that was very fitting for them at the time, Surreal Concepts. The name was chosen to portray the message that our designs are different and will help you stand out. </p>

                            <p className="content-text-18">We needed a portfolio. He decided to create a series of coupons, like those of in penny savers we all got in the mail. He made up names, logos and designed a dozen coupons and developed a portfolio. At his first interview he got a job as a contractor under Surreal Concepts. This was the start of Surreal Concepts and his design career.
                            </p>

                            <p className="content-text-18">As soon as the internet boom happened, Michael learned how to code in HTML, CSS and Flash and Surreal Concepts shifted focus to website design. While designing sites a thought occurred to Michael; Do the users of websites we design and develop have an enjoyable experience? He began researching what people expected from the website experience. He took his research and new found knowledge and designed, wrote and developed a website call web first aid.</p> 

                            <p className="content-text-18">Web First Aid was an information site written for the average user. This site was developed before UX was a thing. The only other proponent of the user experience was Nielson, who’s idea of a website back then was just text on a white background. The creation of web first aid opened new opportunities for Surreal Concepts and lead to a contract with Pfizer. </p>

                            <p className="content-text-18">The Pfizer name gave Michael and Surreal Concepts the credibility needed to land the other big names such as Motorola and StubHub. In 2014 Michael left the company to pursue a full time position with OsiSoft as the lead UX/UI designer. </p>

                            <p className="content-text-18">Michael entrepreneurial spirit got the best of him and he left early last year rebrand Surreal Concepts to WDS and apply his newfound business design knowledge. Michael believes that now is the best time for the business because empathic design are more critical to business survival than ever before. Michael has a vision and renewed passion that will make WDS the design leader. </p>



                            
                    </div>
                    </div>
                    <div className="grid-b">
                        <div className="content-block-services flex-layout-row">
                        <img className="photo-container-xsm " src={terri} alt="Terri Photos"/> 
                        <div className="flex-layout-column">
                            <p className="subtitle margin-left-15">Terri Waterman</p>
                            <p className="margin-left-15"><i>Art and Creative Director, UX/UI designer, Humorist</i></p>
                        </div>
                    </div>
                    <div className="content-block-services">
                            <p className="content-text-18 margin-top-25"> An artist’s strength comes from their perspective of life, the inner dialogue. Her perspective is greatly influenced by her hearing loss as a child. Since her outer life became quiet, observations and interpretations were always unique and different.
                            Terri is the heart of WDS, her design sense from fine and graphic art training, humor and design talents has guided and evolved unique design solutions. Her intuitive design skills come from 25+ years of experience in traditional and modern art. Serving as a creative advisory to Michael has enabled both to stay ahead of the design trends and competition. There’s always a way, she says, to make every business unique.
                            Her personal work has intertwined with her professional work as a designer. Creating designs for businesses requires research, empathy and most of all, consistency in their branding. It gave her creativity a powerful purpose.
                            Evolving into a disciplined UX designer created amazing opportunities as a unique visual communicator. 
                            Her greatest joy is when there is a balance of creative flow along with the discipline of design that creates simplicity and inspiration. 
                            BFA, Associates in Visual Communication
                            </p>
                    </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
                       
        )
    }
}

export default about;