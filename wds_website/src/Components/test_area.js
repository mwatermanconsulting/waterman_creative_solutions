import React, { Component } from 'react' ;
import chee from '../images/backgrounds/chee.gif';
import wee from '../images/backgrounds/wee.gif';
import jf from '../images/backgrounds/jf.gif'
import pp from '../images/backgrounds/pp.gif'
import goog from '../images/backgrounds/goog.gif'
import pissnug from '../images/backgrounds/pissnug.gif'
class test_area extends Component {
    render () {
        return(
        <div className="flex-layout-section-full" style={{height:'1000px'}}>
            <div className="flex-layout-column-full">
                <p className="choo">peepoo agree or disagree<br/><br/>
            </p>
              </div>
              <div>
               <p className="chooch">here some choccy milk becuz your ebic</p>   
              </div>
              <div className="flex-layout-justified-sb"> 
              <div>
               <p className="content-text-48 margin-top-75per choo">these emjois r ebic!</p>    
                   </div>
              <div>
              <img className="flex-image-container image-size-30" src={chee}  alt=" User Interface Design" />  
              </div>
              <div>
              <img className="flex-image-container image-size-30" src={wee}  alt=" User Interface Design" />  
              </div>
               
              <div>
              <img className="flex-image-container image-size-30" src={pissnug}  alt=" User Interface Design" />  
              </div>
               <div>
              <img className="flex-image-container image-size-50" src={chee}  alt=" User Interface Design" /> 
               </div>
              
               <div>
              <img className="flex-image-container image-size-50" src={goog}  alt=" User Interface Design" />
              </div>
              <div>
              <img className="flex-image-container image-size-100" src={jf}  alt=" User Interface Design" />  
              </div>
              </div>
              <div>
              <img className="flex-image-container image-size-100" src={pp}  alt=" User Interface Design" />  
              </div>
  

              <div>
               <p className="woo">i'm the ed sheeran of lacrosse  
              
              <div>

              </div></p> 
            </div>
                 
        </div>  
                                     
                            )
                        }
                    }
export default test_area;