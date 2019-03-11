import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class ProjectItem extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <Card className="ProjectItem">

                <div className="imageDiv">
                    <img src={this.props.project.thumbnail} alt={this.props.project.name} height="250" width="250"/>
                </div>

                <div className="contentDiv">
                    <div className="topPart">
                        <h2>{this.props.project.name}</h2>
                        <a href={this.props.project.github} >GitHub</a>
                        <a href={this.props.project.website} >Website</a>
                        <p>{this.props.project.tag_name}</p>

                    </div>
                    <div className="description">
                        <p>{this.props.project.description}</p>
                    </div>
                </div>
            </Card>
        );
    }
}

export default ProjectItem;