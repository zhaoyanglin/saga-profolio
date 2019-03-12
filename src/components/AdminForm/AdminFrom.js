import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class AdminForm extends Component {

    state = {
        name: '',
        date_completed: 1,
        tag_id: '',
        github: '',
        website: '',
        discription: '',
        thumbnail: ''
    }

    componentDidMount = () => {
        this.getIdTag()
    }

    getIdTag = () => {
        this.props.dispatch({ type: 'GET_ID_TAG'});
    }


    onSubmitButton = (event) => {
        event.preventDefault();

        if(this.state.name === '' && this.state.tag_id === '') {
            alert(`Name and Date and ID tag can't be empty`)
        } else{
            this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state });
        }        
        this.setState({
            name: '',
            date_completed: '',
            tag_id: '',
            github: '',
            website: '',
            discription: '',
            thumbnail: ''
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
                    <input placeholder='Name' onChange={this.handleChangeForInput('name')} value={this.state.name}/>

                    <input type='date' onChange={this.handleChangeForInput('date_completed')} value={this.state.date_completed}/>

                    <select onChange={this.handleChangeForInput('tag_id')}>
                        <option value="">Select a Tag</option>
                        {tags}
                    </select>

                </div>

                <div>

                    <input placeholder='GitHub URL' onChange={this.handleChangeForInput('github')} value={this.state.github}/>

                    <input placeholder='Website URL (Optional)' onChange={this.handleChangeForInput('website')} value={this.state.website}/>

                    <input placeholder='Img Url' onChange={this.handleChangeForInput('thumbnail')} value={this.state.thumbnail}/>

                </div>
                <div>
                        <textarea placeholder='Discription' onChange={this.handleChangeForInput('discription')} value={this.state.discription}/>
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