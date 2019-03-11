import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
//axio
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECT', getProjectFromDataBase);
    yield takeEvery('ADD_PROJECT', addProjectToDataBase);
    yield takeEvery('DELETE_PROJECT', deleteProjectFromDateBase);
    yield takeEvery('GET_ID_TAG', getIdFromDataBase)

}

function* getIdFromDataBase() {
    try {
        const tags = yield axios.get('/api/project/tags');
        yield put({ type: 'SET_TAGS', payload: tags.data })
    } catch (error) {
        console.log('this is the axio get id error:', error);
    }
}

function* getProjectFromDataBase() {
    try {
        const projects = yield axios.get('/api/project');
        yield put({ type: 'SET_PROJECTS', payload: projects.data })
    } catch (error) {
        console.log('this is the axio get error:', error);
    }
}

function* addProjectToDataBase(action) {
    try {
        console.log('add element hit', action)

        yield axios.post('/api/project', action.payload);
        yield put({ type: 'GET_PROJECT' })
    } catch (error) {
        console.log('this is the axio post error:', error);
    }
}

function* deleteProjectFromDateBase(action) {
    try {
        console.log('delete element hit', action)

        yield axios.delete(`/api/project/${action.payload}`);
        yield put({ type: 'GET_PROJECT' })
    } catch (error) {
        console.log('Failed in delete', error)
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));

