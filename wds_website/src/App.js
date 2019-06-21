import React, { Component } from 'react';
import './stylesheets/css/main.css';
import { Layout, Button, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import logo from './images/WDS-logo.svg'
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      //Header //

      <div className="container-grid">
        <Layout>
            <Header className="header red text-white" title={<Link style={{textDecoration: 'none',
            color: 'white'}} to="/"><img src={logo} height="65px" alt="header" /></Link>} scroll>
                <Navigation className="text-white" style={{ color: 'white'}}>
                    <Link to="/why_wds">Why WDS</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/methodology">Methodology</Link>
                    <Link to="/design_solutions">Design Solutions</Link>
                    <Link to="/news_insights">News & Insights</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">
            Waterman Consulting</Link>}>
                <Navigation>
                  <Link to="/services">Services</Link>
                  <Link to="/clients">Clients</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
      <Content>
          <div className="page-content" />
            <Main/>
      </Content>
      <footer className="container-footer red padding">
      <div className="grid-footer">
      <div className="grid-footer-item-1">
          <div className="subtitle text-white">
               Why
              <ul>
                 <li> <a className="text-black" href="./why_wds">Why Waterman Design Solutions</a></li>
                 <li><a className="text-black" href="./case_studies">Success Stories (Case Studies)</a></li>
                 <li><a className="text-black" href="./clients">Clients</a></li>
                 <li><a className="text-black" href="./core_offerings">Core Offerings</a></li>
                 <li><a className="text-black" href="./history">History</a></li>
              </ul>
          </div>
        </div>
          <div className="subtitle text-white grid-footer-item-2">
              Services
              <ul className="text-black">
              <li><a className="text-black" href="./services">Overview</a></li>
              <li><a className="text-black" href="./ux_design">UX Design </a></li>
              <li><a className="text-black" href="./ui_design">UI Design</a></li>
              <li><a className="text-black" href="./css_solutions">CSS Solutions</a></li>
              <li><a className="text-black" href="./strategy_insight">Strategy & Insights</a></li>
              <li><a className="text-black" href="./style_guide">Style Guides & Design Systems</a></li>
              
              </ul>
          </div>
          <div className="grid-footer-item-3 text-white subtitle">
                Methodology
              <ul>
              <li><a className="text-black" href="./methodology">Overview</a></li>
              <li><a className="text-black" href="./finding_truth">Finding the Truth</a></li>
              <li><a className="text-black" href="./innovative_solutions">Innovative Solutions</a></li>
              <li><a className="text-black" href="./communication_insights">Communications Insights</a></li>
              </ul>
          </div>
          <div className="grid-footer-item-4 text-white subtitle"> 
                Design Solutions
              <ul>
              <li><a className="text-black" href="./design_solutions">Overview</a></li>
              <li><a className="text-black" href="./digital_design">Website Design</a></li>
               <li><a className="text-black" href="./print_design">Graphic Design</a></li>
              <li><a className="text-black" href="./marketing">Marketing</a></li>
              <li><a className="text-black" href="./video_production">Video</a></li>
              </ul>
          </div> 
          <div className="grid-footer-item-5 subtitle text-white">
                News and Insights
              <ul>
              <li><a className="text-black" href="./news_insights">Overview</a></li>
              <li><a className="text-black" href="./">Blog</a></li>
              <li><a className="text-black" href="./">News</a></li>
              <li><a className="text-black" href="./test_area">Playground</a></li>
              </ul>
        </div>
          
      <div className="grid-footer-item-6 subtitle text-white">
                Social Media Junk
              <ul>
              <li><a href="./news_insights">Overview</a></li>
              <li><a href="./">Blog</a></li>
              <li><a href="./">News</a></li>
              <li><a href="./test_area">Playground</a></li>
              </ul>
        </div>
    </div>
    </footer>
 </Layout>
</div>

    );
  }
}

export default App;
