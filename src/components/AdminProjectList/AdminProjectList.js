import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminProjectList extends Component {

    componentDidMount() {

        this.getProject();
    }

    getProject = () => {
        this.props.dispatch({ type: 'GET_PROJECT' })

    }

    deleteProject = (key) => {

        console.log(key);
        
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: key })

    }

    render() {
        console.log(this.props.reduxState.projects);

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.reduxState.projects.map((projectItem, i) => {
                        return<tr key={i}>
                            <td>{projectItem.name}</td>
                            <td><button onClick={ () => this.deleteProject(projectItem.id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default (connect(mapStateToProps)(AdminProjectList));
