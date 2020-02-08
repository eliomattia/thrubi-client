import React, {Component} from "react";
import {connect} from "react-redux";
import {sendGoogleLogin} from "../../actions/auth";

class _GoogleRedirect extends Component {
    componentDidMount() {
        const {sendGoogleLogin} = this.props;
        sendGoogleLogin();
    };

    render() {
        return (
            <div className="text-center small text-dark">
                Sending over Google login information to Thrubi...
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const GoogleRedirect = connect(mapStateToProps,{sendGoogleLogin})(_GoogleRedirect);

export default GoogleRedirect;