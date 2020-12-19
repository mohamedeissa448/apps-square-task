import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css' 
class NavBar extends Component {
    render() { 
        return ( 
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./logo.jpg"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink  activeClassName="active" style={{ paddingBottom : 0}}className="nav-link" aria-current="page" to="/projects">Projects</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/community">Community</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/courses">Courses</NavLink>
                            </li>
                            
                        </ul>
                        <div className="col-3" style={{position:"relative",left:'39em'}}>
                            <FontAwesomeIcon icon={['fa', 'flagCheckered']}/>
                            <FontAwesomeIcon icon={['fa', 'bell']}/>
                            <span style={{marginLeft:'5px'}}>user</span>
                        </div>
                    </div>
                </div>
            </nav>  
            </div>   
         );
    }
}
 
export default NavBar;