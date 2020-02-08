import React, {Component} from "react";
import {connect} from "react-redux";
import {sendLinkedInLogin} from "../../actions/auth";

class _LinkedInRedirect extends Component {
    componentDidMount() {
        const {sendLinkedInLogin} = this.props;
        sendLinkedInLogin();
    };

    render() {
        return (
            <div className="text-center small text-dark">
                Sending over LinkedIn login information to Thrubi...
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const LinkedInRedirect = connect(mapStateToProps,{sendLinkedInLogin})(_LinkedInRedirect);

export default LinkedInRedirect;