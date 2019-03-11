import React, { Component } from 'react';


class ProjectItem extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="ProjectItem">

                <div>
                    {/* <img/> */}
                </div>

                <div>
                    <div>
                        <h1>{this.props.project.name}</h1>
                        <a href={this.props.project.github} >GitHub</a>
                        <a href={this.props.project.website} >Website</a>
                        <h2>{this.props.project.tag_id}</h2>

                    </div>
                    <div>
                        <p>{this.props.project.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;