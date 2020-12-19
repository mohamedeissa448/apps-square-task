import React, { Component } from 'react';
import fakeService from "../services/fakeProjectsService"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Projects.css'
class Projects extends Component {
    state = {  
        projects : []
    }
    componentDidMount(){
        this.setState({projects : fakeService.getProjects() })
    }
    render() { 
        return <div >
                <div className="container row">
                    {this.state.projects.map((project) => 
                         <div className="card col-md-6 col-lg-4"  key={project.id}>
                         <a href="#"><img src={project.imgSrc} className="card-img-top" alt="image contains living room"/></a>
                         <div className="card-body">
                             <a href="#" className="card-title h5 mt-1  d-block text-dark">{project.title}</a>
                             <p >{project.location}</p>
                             <p className="card-text text-muted">{project.description}</p>
                             <div className='border'></div>
                             <div className="d-flex flex-row align-items-center options-container">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon style={{marginRight:'.5em'}} icon={['fa', 'save']}/>
                                        <span style={{marginRight:'2em'}}>Save</span></li>
                                    <li>
                                        <FontAwesomeIcon style={{marginRight:'.5em'}} icon={['fa','share','alt']}/>
                                       <span style={{marginRight:'2em'}}>Share</span> </li>
                                    <li>
                                        <button type="button" className="btn btn-primary rent-btn" style={{paddingRight:"2em",paddingLeft:'2em'}}>
                                        Rent 
                                        </button>
                                    </li>
                                </ul>
                             </div>
                         </div>
                     </div>
                    )}
                </div>
               </div> 
    }
}
 
export default Projects;