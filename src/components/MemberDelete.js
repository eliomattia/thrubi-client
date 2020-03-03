import React,{Component} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {removeMembership} from "../actions/member";

class _MemberDelete extends Component {
    render() {
        const {identityCertified} = this.props;
        const {removeMembership} = this.props;
        return (
            <_ActionButton text={(identityCertified>0?"Abandon country membership":"Terminate certification procedure")+" and select another country and currency"}
                           buttonType="btn-outline-secondary" action={removeMembership} />
        );
    }
}

const mapStateToProps = state => ({
    identityCertified:  state.client.user.identityCertified,
});

const MemberDelete = connect(mapStateToProps,{removeMembership})(_MemberDelete);

export default MemberDelete;

