import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() { 
        return ( 
            <div>
                <div className="container row">
                    <div className="col-12 col-md-6 col-lg-4 left-section">
                        <img src="./logo.jpg" className="logo"/>
                        <div className="row icons-container">
		                    <div className="span10 offset1">
			                    <div className="social-icons">
                                    <ul>
                                        <li><a href="https://twitter.com"><i className="icon-twitter"></i></a></li>
                                        <li><a href="https://facebook.com"><i className="icon-facebook"></i></a></li>
                                        <li><a href="https://instagram.com"><i className="icon-instagram"></i></a></li>
                                        <li><a href="https://pinterest.com"><i className="icon-pinterest"></i></a></li>
                                        <li><a href="https://twitter.com"><i className="icon-twitter"></i></a></li>
                                        <li><a href="https://facebook.com"><i className="icon-facebook"></i></a></li>
                                        <li><a href="https://instagram.com"><i className="icon-instagram"></i></a></li>
                                        
                                    </ul>
                                </div>
                            </div> 
                        </div>           
                    </div>

                    <div className="col-12 col-md-6 col-lg-4  second-section">
                            <div className="links-container "style={{width:'40%',display:'inline-block'}}>
                                <h6 style={{fontWeight:'bold'}}>GENERAL</h6>
                                <ul className="working-text">
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Sign up</li>
                                    <li>Help center</li>
                                    <li>From Zero to Hero</li>
                                </ul>
                            </div>
                            <div className="links-container " style={{width:'40%',display:'inline-block',position:"relative",bottom :"3em",right:'2em'}}>
                                <h6 style={{fontWeight:'bold'}}>QUICK LINKS</h6>
                                <ul className="working-text">
                                    <li>jobs</li>
                                    <li>Companies</li>
                                    <li>People</li>
                                    <li>Events</li>
                                </ul>
                            </div>
                            <div className="links-container" style={{marginTop : '2em'}}>
                                <h6 style={{fontWeight:'bold'}}>HELP</h6>
                                <ul className="working-text">
                                    <li>Help center</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                            
                    </div>  
                    <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="right-section">
                           <p className="header-paragraph">DOWNLOAD JOBZELLA MOBILW APP</p>
                           <small>Lorem ipsum dolor sit amet</small>
                           <div className="images-container">
                               <a><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/></a>
                               <a><img src="https://www.earfy.net/wp-content/uploads/2016/03/Earfy-download-apple-app-store-768x272.png"/></a>
                           </div>
                           <small style={{marginTop: '1em', position: 'relative',right: '3em'}}>DOWNLOAD FREE</small>
                           <div class="input-group mb-3 select-container">
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected={true} value="1">English</option>
                                    <option  value="2">Arabic</option>
                                </select>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;