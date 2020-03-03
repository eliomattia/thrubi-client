import React, {Fragment} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {storeDetails,deleteDetails} from "../actions/user";

const _UserManageDetails = ({updateUserBusy,name,surname,email,document,storeDetails,deleteDetails}) => {
    let refs = {name,surname,email};
    let fieldClassName = "form-control form-control-sm rounded-0";
    return(
        <Fragment>
            {
                updateUserBusy ?
                    "Updating user data..."
                    :
                    <Fragment>
                        <input id="inputUserName"     ref={input => refs.name = input}      type="text" className={fieldClassName} placeholder={name?name:"Enter name"} />
                        <input id="inputUserSurname"  ref={input => refs.surname = input}   type="text" className={fieldClassName} placeholder={surname?surname:"Enter surname"} />
                        <input id="inputUserEmail"    ref={input => refs.email = input}     type="text" className={fieldClassName} placeholder={email?email:"Enter email address"} />
                        <input id="inputUserDocument" disabled                                                     type="text" className={fieldClassName} placeholder={document?document:"Identity not verified"} />
                        <_ActionButton text="Update my personal data"  buttonType="btn-primary" action={() => {
                            let userDetails = {};
                            if (refs.name.value)        userDetails["name"]=refs.name.value;
                            if (refs.surname.value)     userDetails["surname"]=refs.surname.value;
                            if (refs.email.value)       userDetails["email"]=refs.email.value;
                            storeDetails(userDetails,{overwrite:true});
                        }}/>
                        <_ActionButton text="Delete my personal data" action={deleteDetails} buttonType="btn-secondary"  />
                    </Fragment>
            }
        </Fragment>
    );
};

const mapStateToProps = state => ({
    updateUserBusy: state.session.busy.action.userDetails,
    name:           state.client.user.name,
    surname:        state.client.user.surname,
    email:          state.client.user.email,
    document:       state.client.user.document,
});

const UserManageDetails = connect(mapStateToProps,{storeDetails,deleteDetails})(_UserManageDetails);

export default UserManageDetails;