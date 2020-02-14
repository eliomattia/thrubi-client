import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import _ActionButton from "./_ActionButton";
import {advancedMode,viewHistory} from "../actions/member";
import MemberDelete from "./MemberDelete";

class _MemberOptions extends Component {

    render() {
        const {optionAdvancedMode,optionViewHistory} = this.props;
        const {advancedMode,viewHistory} = this.props;

        return (
            <div className="navbar-light col-lg-4">
                <_ActionButton buttonType={"p-0 btn-outline-primary"+(optionAdvancedMode?" active":"")} action={() => advancedMode(!optionAdvancedMode)} text={optionAdvancedMode?"Advanced":"Basic"}/>
                <_ActionButton buttonType={"p-0 btn-outline-primary"+(optionViewHistory?" active":"")} disabled={!optionAdvancedMode} action={() => viewHistory(!optionViewHistory)}  text={optionViewHistory?"History":"History"} />
                <MemberDelete />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    optionAdvancedMode: state.client.user.optionAdvancedMode,
    optionViewHistory: state.client.user.optionViewHistory,
    populationId: state.client.population.id,
});

const MemberOptions = connect(mapStateToProps,{advancedMode,viewHistory})(_MemberOptions);

export default MemberOptions;