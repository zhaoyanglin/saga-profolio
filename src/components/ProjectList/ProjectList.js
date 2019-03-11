import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem';
import Header from '../Header/Header';


class ProjectList extends Component {

    //get the array of projects
    //then map out the individual project
    //then pass the project into ProjectItem

    componentDidMount = () => {
        this.showProjects()
    }

    showProjects = () => {
        this.props.dispatch({ type: 'GET_PROJECT' })
    }


    render() {
        let projects = null;
        projects = this.props.reduxState.projects.map( (project, i) => {
            return <ProjectItem project={project} key={i}/>

        });
        console.log(this.props.reduxState);
        

        return (
            <div className="ProjectList">
                <Header />
            {projects}

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default (connect(mapStateToProps)(ProjectList));