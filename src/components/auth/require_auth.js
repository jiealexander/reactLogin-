import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
    class Authentication extends Component {

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    return withRouter(connect(mapStateToProps)(Authentication));
}