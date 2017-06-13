import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/actions';
import Table from '../components/Table';
@connect(state => ({
    myListData: state.data.myListData,
}))
export default class MainApp extends Component {
    static propTypes = {
        myListData: PropTypes.array,
        dispatch: PropTypes.func.isRequired
    }
    render() {
        console.log('16', this.props)
        const actions = bindActionCreators(action, this.props.dispatch);
        return (
            <div>
                <div className="container-fluid">
                    {
                    this.props.myListData.map((obj) => {
                       return (
                                <div className="container">
                                    <h2>Table List</h2>
                                <Table data={obj.mylist} actions={actions} type={"mylist"} />
                                <Table data={obj.recommendations} actions={actions} type={"recommendations"} />
                                </div>
                         );
                    }
                    )
                    }
                </div>
            </div>
        );
    }
}
