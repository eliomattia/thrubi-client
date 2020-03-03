import React,{Component} from "react";
import {connect} from "react-redux";
import {d3plot} from "../actions/chart";

class _Chart extends Component {
    // Chart objects
    svgChart;
    // -------------

    componentDidMount() {
        const {d3plot} = this.props;
        d3plot(this.svgChart);
    }

    render() {
        return(
            <div className="container-fluid m-0">
                <div className="row mr-0">
                    <div className="col-lg-12">
                        <svg width="700" height="500" ref={input => this.svgChart = input} />
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