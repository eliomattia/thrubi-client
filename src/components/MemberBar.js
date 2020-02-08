import React, {Fragment} from 'react';
import { connect } from "react-redux";
import MemberOptions from "./MemberOptions";
import MemberInfo from "./MemberInfo";

const _Viewport = ({
    busy,
    loggedIn,
    populationId,
}) => (
    <div className="container text-primary text-center small m-0 p-2">
        {
            busy ? "Viewport loading..." :
                <div className="row">
                    {
                        ((!loggedIn) || (populationId<0)) ? "" :
                            <Fragment>
                                <MemberOptions />
                                <MemberInfo />
                            </Fragment>
                    }
                </div>
        }
    </div>
);

const mapStateToProps = (state) => ({
    busy: state.session.busy.component.viewport,
    loggedIn: state.client.userAccess.loggedIn,
    populationId: state.client.population.id,
});

const MemberBar = connect(mapStateToProps,{})(_Viewport);

export default MemberBar;