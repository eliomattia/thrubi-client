import React, { Component } from 'react';
import {connect} from 'react-redux';
import _UserIcon from './_UserIcon';
import UserDetails from './UserDetails';

class _UserView extends Component {
    render() {
        const {busy,role,deactivated,loggedIn,user} = this.props;

        return(
            <div className="text-center">
                {
                    busy ? <div>Dashboard loading...</div> :
                        !loggedIn ? <div>User not logged in</div> :
                            <div>
                                <_UserIcon role={role?"admin":"user"} deactivated={deactivated?"_deactivated":"" } />
                                <UserDetails user={user} />
                            </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    busy: state.session.busy.component.dashboard,
    loggedIn:  state.client.userAccess.loggedIn,
    role: state.client.user.role,
});

const UserView = connect(mapStateToProps)(_UserView);

export default UserView;