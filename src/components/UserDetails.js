import React, {Component} from "react";
import {connect} from "react-redux";

class _UserDetails extends Component {
    render() {
        const {id,name,surname,email,passport,deactivated,emailVerified,identityCertified} = this.props;
        return (
            <div className="text-center mb-2">
                <div className="text-primary displayInlineBlock p-0">
                    <b>{(name || surname) ? (name ? name : "") + " " + (surname ? surname : "") : "No user data"}</b>&nbsp;
                </div>
                <div className="text-secondary displayInlineBlock small">uid#{id}&nbsp;<span
                    className={"badge "+(deactivated?"badge-danger":"badge-info")}>{deactivated?"Deactivated":"Active"}</span></div>
                <div className="text-secondary small">email: {email ? email : "not found"}&nbsp;<span
                    className={"badge "+(emailVerified?"badge-info":"badge-danger")}>{emailVerified?"Verified":"Pending verification"}</span></div>
                <div className="text-secondary small">passport#{passport ? passport : "not found"}&nbsp;<span
                    className={"badge "+(identityCertified?"badge-info":"badge-danger")}>{identityCertified?"Certified":"Pending certification"}</span></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    id:                 state.client.user.id,
    name:               state.client.user.name,
    surname:            state.client.user.surname,
    email:              state.client.user.email,
    passport:           state.client.user.passport,
    deactivated:        state.client.user.deactivated,
    emailVerified:      state.client.user.emailVerified,
    identityCertified:  state.client.user.identityCertified,
});

const UserDetails = connect(mapStateToProps)(_UserDetails);

export default UserDetails;