import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProjectList from '../AdminProjectList/AdminProjectList';
import AdminForm from '../AdminForm/AdminFrom';



class Admin extends Component {


    render() {
        return (
            <div>
                <header>
                    <h1>Admin</h1>
                </header>
                <AdminForm />
                <AdminProjectList />
            </div>
        );
    }
}

export default connect()(Admin);