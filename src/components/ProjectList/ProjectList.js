import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';


class ProjectList extends Component {

    //get the array of projects
    //then map out the individual project
    //then pass the project into ProjectItem
    
    render() {
        return (
            <div className="ProjectList">
            <ProjectItem/>

            </div>
        );
    }
}

export default ProjectList;