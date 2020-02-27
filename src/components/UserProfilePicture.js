import React,{Component} from "react";
import {connect} from "react-redux";
import {deleteProfilePicture,uploadProfilePicture} from "../actions/user";
import _ActionButton from "./_ActionButton";

class _UserProfilePicture extends Component {
    render() {
        let refs = {localProfilePicture:null};
        const {role,deactivated,profilePicture} = this.props;
        const {deleteProfilePicture,uploadProfilePicture} = this.props;

        return (
            <div className="mb-2">
                <label for="profilePictureInput" className="m-0 p-0">
                    <img className="mt-3 rounded-lg" alt="profilePicture" height="128" width="128"
                         src={profilePicture?profilePicture:(process.env.PUBLIC_URL+"/icons/"+role+deactivated+".png")}/>
                </label>
                <input id="profilePictureInput" className="d-none" ref={input => refs.localProfilePicture = input}
                       type="file" onChange={() => uploadProfilePicture(refs.localProfilePicture)} />
                {
                    profilePicture
                        ?<_ActionButton noMargin="small m-0 mt-2 p-0" buttonType={"nav-link border-0 text-secondary"} action={deleteProfilePicture} text="Delete my profile picture" />
                        :<div className="small text-secondary m-0 p-0">Click on the user icon to upload a profile picture</div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    role:               state.client.user.role          ? "admin"        : "user",
    deactivated:        state.client.user.deactivated   ? "_deactivated" : "",
    profilePicture:     state.client.user.profilePicture,
});

const UserProfilePicture = connect(mapStateToProps,{deleteProfilePicture,uploadProfilePicture})(_UserProfilePicture);

export default UserProfilePicture;