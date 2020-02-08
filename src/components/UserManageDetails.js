import React, {Fragment} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {storeDetails,deleteDetails} from "../actions/user";

const _UserManageDetails = ({updateUserBusy,name,surname,email,passport,storeDetails,deleteDetails}) => {
    let refs = {name,surname,email,passport};
    let fieldClassName = "form-control form-control-sm rounded-0";
    return(
        <Fragment>
            {
                updateUserBusy ?
                    "Updating user data..."
                    :
                    <Fragment>
                        <input id="newUserName"     ref={(input) => refs.name = input}      type="text" className={fieldClassName} placeholder={name?name:"Enter name"} />
                        <input id="newUserSurname"  ref={(input) => refs.surname = input}   type="text" className={fieldClassName} placeholder={surname?surname:"Enter surname"} />
                        <input id="newUserEmail"    ref={(input) => refs.email = input}     type="text" className={fieldClassName} placeholder={email?email:"Enter email address"} />
                        <input id="newUserPassport" ref={(input) => refs.passport = input}  type="text" className={fieldClassName} placeholder={passport?passport:"Enter passport number"} />
                        <_ActionButton text="Update my personal data"  buttonType="btn-primary" action={() => {
                            let userDetails = {};
                            if (refs.name.value)        userDetails["name"]=refs.name.value;
                            if (refs.surname.value)     userDetails["surname"]=refs.surname.value;
                            if (refs.email.value)       userDetails["email"]=refs.email.value;
                            if (refs.passport.value)    userDetails["passport"]=refs.passport.value;
                            storeDetails(userDetails,{overwrite:true});
                        }}/>
                        <_ActionButton text="Delete my personal data" action={deleteDetails} buttonType="btn-secondary"  />
                    </Fragment>
            }
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    updateUserBusy: state.session.busy.action.userDetails,
    name:           state.client.user.name,
    surname:        state.client.user.surname,
    email:          state.client.user.email,
    passport:       state.client.user.passport,
});

const UserManageDetails = connect(mapStateToProps,{storeDetails,deleteDetails})(_UserManageDetails);

export default UserManageDetails;