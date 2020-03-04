import React,{Component} from "react";
import _ActionButton from "./_ActionButton";
import {connect} from "react-redux";
import {submitSuggestion} from "../actions/guest";
import {suggestionType} from "../config/guest";


class _GuestSuggestion extends Component {
    render() {
        const {type,transparent} = this.props;
        const {submitSuggestion} = this.props;
        let refs = {country:null,suggestionText:null};
        return (
            <div className="my-2 text-center">
                <span><b>{"Your "+(type===suggestionType.IDENTITY_CERTIFICATION?"digital identity platform":
                    type===suggestionType.INCOME_VERIFICATION?"official income authority"
                        :"")+" suggestion"}</b></span>
                <input id="country" ref={input => refs.country = input} type="text"
                       className={"form-control form-control-sm rounded-0 my-2"+(transparent?" bg-transparent":"")}
                       placeholder="Country"
                       required/>
                <input id="suggestionText" ref={input => refs.suggestionText = input} type="text"
                       className={"form-control form-control-sm rounded-0 my-2"+(transparent?" bg-transparent":"")}
                       placeholder={type===suggestionType.IDENTITY_CERTIFICATION?"Suggested digital identity platform":
                                    type===suggestionType.INCOME_VERIFICATION?"Suggested official income authority"
                                    :"Your suggestion"}
                       required/>
                <_ActionButton text="Here is my suggestion" action={() => {
                    submitSuggestion(type,refs.country.value,refs.suggestionText.value);
                    refs.country.value="";
                    refs.suggestionText.value="";
                }} buttonType={"btn-primary"+(transparent?" bg-transparent":"")} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const GuestSuggestion = connect(mapStateToProps,{submitSuggestion})(_GuestSuggestion);

export default GuestSuggestion;