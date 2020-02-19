import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {uploadDocument} from "../actions/user";

class _UserIdentity extends Component {
    render() {
        const {identityCertified,countryName} = this.props;
        const {uploadDocument} = this.props;

        return (
            <Fragment>
                <div className="my-3">You are applying to become a Thrubi member in the following country: <b>{countryName}</b></div>
                <_ActionButton text={identityCertified===0?"Upload a document to start the identity certification procedure":"Thrubi is certifying your identity"}
                               disabled={identityCertified!==0} buttonType="btn-primary" action={uploadDocument} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    identityCertified:  state.client.user.identityCertified,
    countryName:        state.client.population.countryName,
});

const UserIdentity = connect(mapStateToProps,{uploadDocument})(_UserIdentity);

export default UserIdentity;