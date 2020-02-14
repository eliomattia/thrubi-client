import React, {Fragment} from 'react';
import { connect } from "react-redux";
import MemberOptions from "./MemberOptions";
import MemberInfo from "./MemberInfo";
import MemberDeclareIncome from "./MemberDeclareIncome";

const _MemberBar = ({
    countryName,
    ccyId,
    busy,
    loggedIn,
    populationId,
}) => (
    <div className="container-fluid row p-0 m-0 text-primary text-center p-0 mt-3">
        {
            busy ? "Viewport loading..." :
                ((!loggedIn) || (populationId<0)) ? "" :
                    <Fragment>
                        <div className="col-lg-12 p-0 m-0 bg-primary text-light text-center mb-3">
                            <div><b>{countryName}</b>&nbsp;<small>{ccyId}&nbsp;<i>pid#{populationId}</i></small></div>
                        </div>
                        <MemberInfo />
                        <MemberDeclareIncome />
                        <MemberOptions />
                    </Fragment>
        }
    </div>
);

const mapStateToProps = (state) => ({
    countryName: state.client.population.countryName,
    ccyId: state.client.population.ccyId,
    ccySymbol: state.client.population.ccySymbol,
    busy: state.session.busy.component.viewport,
    loggedIn: state.client.userAccess.loggedIn,
    populationId: state.client.population.id,
});

const MemberBar = connect(mapStateToProps,{})(_MemberBar);

export default MemberBar;