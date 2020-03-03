import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import "./styles/App.scss";
import _ActionButton from "./_ActionButton";
import {chooseGuestMenu} from "../actions/guest";
import {guestMenuOption} from "../config/guest";


class _GuestMenu extends Component {
    render() {
        const {selected} = this.props;
        const {chooseGuestMenu} = this.props;
        return (
            <div className="container-fluid m-0 bg-white">
                <div className="row mr-lg-0 p-0">
                    <div className="col-md-6 p-0 m-0 pr-md-2 navbar-light">
                        <_ActionButton action={() => chooseGuestMenu(guestMenuOption.FAQ)}
                                       buttonType={"btn-outline-primary"+(selected===guestMenuOption.FAQ?" active":"")}
                                       text="Learn more about Thrubi" />
                    </div>
                    <div className="col-md-6 p-0 m-0 pl-md-2 navbar-light">
                        <_ActionButton action={() => chooseGuestMenu(guestMenuOption.INFOGRAPHICS)}
                                       buttonType={"btn-outline-success"+(selected===guestMenuOption.INFOGRAPHICS?" active":"")}
                                       text="Thrubi infographics" />
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    selected: state.client.guest.guestMenuOption,
});

const GuestMenu = connect(mapStateToProps,{chooseGuestMenu})(_GuestMenu);

export default GuestMenu;


