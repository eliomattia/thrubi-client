import React, {Component} from 'react';
import {connect} from "react-redux";

class _UserIcon extends Component {
    render() {
        const {role, deactivated} = this.props;
        return <img className="mt-3 rounded-lg" alt={role + deactivated} height="128" width="128"
                    src={process.env.PUBLIC_URL + "/jpg/elio.jpg"}/>
        /* +"/icons/"+role+deactivated+".png" */
    }
}

const mapStateToProps = (state) => ({
    role:               state.client.user.role ? "admin" : "user",
    deactivated:        state.client.user.deactivated ? "_deactivated" : "",
});

const UserIcon = connect(mapStateToProps,{})(_UserIcon);

export default UserIcon;