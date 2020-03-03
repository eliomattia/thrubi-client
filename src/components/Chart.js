import React,{Component,Fragment} from "react";
import {connect} from "react-redux";
import _ActionButton from "./_ActionButton";
import {d3plot} from "../actions/chart";
import {loggableActionValue} from "../config/user";

class _Chart extends Component {
    // ref for drawing
    svgChart;

    componentDidMount() {
        const {d3plot} = this.props;
        d3plot(this.svgChart);
    }

    render() {
        return(
            <div className="container-fluid m-0">
                <div className="row mr-0 bg-light">
                    <div className="col-lg-12">
                        <svg width="800" height="700" ref={input => this.svgChart = input} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    //refRaw:   state.client.ref.raw,
});

const Chart = connect(mapStateToProps,{d3plot})(_Chart);

export default Chart;