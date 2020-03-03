import React,{Component} from 'react';
import { connect } from 'react-redux';
import _ActionButton from "./_ActionButton";
import {advancedMode,viewHistory} from "../actions/member";

class _MemberOptions extends Component {
    render() {
        const {optionAdvancedMode,optionViewHistory} = this.props;
        const {advancedMode,viewHistory} = this.props;
        const {color} = this.props;

        return (
            <div>
                <_ActionButton noMargin={"small m-0 mt-2 p-0"} buttonType={"nav-link border-0 text-"+color} action={() => advancedMode(!optionAdvancedMode)} text={optionAdvancedMode?"Show less details":"Show more details..."}/>
                {
                    !optionAdvancedMode ? ""
                    : <_ActionButton noMargin={"small m-0 p-0"} buttonType={"nav-link border-0 text-"+color} action={() => viewHistory(!optionViewHistory)}  text={optionViewHistory?"Hide history":"View history..."} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    optionAdvancedMode: state.client.user.optionAdvancedMode,
    optionViewHistory: state.client.user.optionViewHistory,
    populationId: state.client.population.id,
});

const MemberOptions = connect(mapStateToProps,{advancedMode,viewHistory})(_MemberOptions);

export default MemberOptions;