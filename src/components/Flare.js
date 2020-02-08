import React, {Component,Fragment} from 'react';
import {connect} from "react-redux";
import {deleteFlare,refreshFlare} from "../actions/flare";
import {flareBook} from "../actions/config/flare";
import './styles/Flare.scss';

class _Flare extends Component {
    render() {
        const {deactivated,flares} = this.props;
        const {deleteFlare,refreshFlare} = this.props;

        return(
            <Fragment>
                {
                    deactivated ? "" :
                        <div className="fixed-bottom flareBox">
                            {
                                Object.keys(flares).map((key,i) =>
                                    <div key={key} role={"alert"} onMouseOver={() => refreshFlare(key,true)} onMouseOut={() => refreshFlare(key)}
                                         className={"alert alert-dismissible fade show "
                                                        +(flares[key].type===flareBook.flareType.ERROR?"alert-red"
                                                        :(flares[key].type===flareBook.flareType.WARNING?"alert-danger"
                                                        :"alert-secondary"))}>
                                        <b>{flares[key].type}</b>&nbsp;
                                        <span>{flares[key].message?flares[key].message.slice(0,200):"Internal error"}</span>&nbsp;
                                        <i>{flares[key].details?flares[key].details.slice(0,200):""}</i>
                                        <button className="close paddingX" type="button" onClick={() => deleteFlare(key)} data-dismiss="alert"><span>&times;</span></button>
                                    </div>
                                )
                            }
                        </div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    deactivated:state.session.flare.deactivated,
    flares:     state.session.flare.flares,
});

const Flare = connect(mapStateToProps,{deleteFlare,refreshFlare})(_Flare);

export default Flare;