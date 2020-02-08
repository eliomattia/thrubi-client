import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import _ActionButton from "./_ActionButton";
import * as userMenu from "../actions/userMenu";

class _MemberOptions extends Component {

    render() {
        const {optionAdvancedMode,optionViewHistory} = this.props;
        const {advancedMode,viewHistory,changePopulation} = this.props;

        return (
            <Fragment>
                <div className="col-lg-1 userPanel">
                    <_ActionButton buttonType="p-0 btn-primary" action={() => advancedMode(!optionAdvancedMode)} text={optionAdvancedMode?"Advanced":"Basic"}/>
                </div>
                <div className="col-lg-1 userPanel">
                    <_ActionButton buttonType={"p-0 btn-"+(optionViewHistory?"primary":"light")} disabled={!optionAdvancedMode} action={() => viewHistory(!optionViewHistory)}  text={optionViewHistory?"History":"History"} />
                </div>
                <div className="col-lg-1 userPanel">
                    <_ActionButton buttonType="p-0 btn-primary" action={changePopulation} text="Back" />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    optionAdvancedMode: state.client.user.optionAdvancedMode,
    optionViewHistory: state.client.user.optionViewHistory,
    populationId: state.client.population.id,
});

const MemberOptions = connect(mapStateToProps,userMenu)(_MemberOptions);

export default MemberOptions;