import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class AdminForm extends Component {

    state = {
        name: '',
        date_completed: 1,
        tag_id: 1,
        github: '',
        website: '',
        discription: ''
    }

    componentDidMount = () => {
        this.getIdTag()
    }

    getIdTag = () => {
        this.props.dispatch({ type: 'GET_ID_TAG'});
    }


    onSubmitButton = (event) => {
        event.preventDefault();

        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state });
        
        this.setState({
            name: '',
            date_completed: '',
            tag_id: '',
            github: '',
            website: '',
            discription: ''
        })
    }

    handleChangeForInput = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {

        let tags = null;
        tags = this.props.reduxState.tags.map((tag, i) => {
          return <option key={i} value={tag.id}>{tag.name}</option>

        });

        return (
            <form className="Admin" onSubmit={this.onSubmitButton}>
                <Link to='/'>Back To Project</Link>

                <h1>Add New Project</h1>

                <div>
                    <input placeholder='Name' onChange={this.handleChangeForInput('name')}/>
                    <input type='date' onChange={this.handleChangeForInput('date_completed')}/>

                    <select onChange={this.handleChangeForInput('tag_id')}>{tags}</select>

                </div>

                <div>
                    <input placeholder='GitHub URL' onChange={this.handleChangeForInput('github')}/>
                    <input placeholder='Website URL (Optional)' onChange={this.handleChangeForInput('website')}/>
                </div>
                <div>
                        <input placeholder='Discription' onChange={this.handleChangeForInput('discription')}/>
                </div>

                <button type='submit' >Submit</button>

            </form>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default (connect(mapStateToProps)(AdminForm));