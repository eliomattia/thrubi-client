import React, {Fragment} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import * as userMenu from "../actions/userMenu";

const _UserActivation = ({deactivated,activateUserBusy,activateUser,deactivateUser}) => {
    return(
        <Fragment>
            {
                activateUserBusy ? "Please wait, activation request in progress..." :
                    deactivated ?
                        <div className="small">
                            Account currently deactivated<br/>
                            <_ActionButton text="Request activation" action={activateUser} buttonType="btn-primary" />
                        </div>
                        :
                        <_ActionButton text="Deactivate my account" action={deactivateUser} buttonType="btn-secondary" />
            }
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    deactivated: state.client.user.deactivated,
    activateUserBusy: state.session.busy.action.activateUser,
});

const UserActivation = connect(mapStateToProps,userMenu)(_UserActivation);

export default UserActivation;