import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchTv} from "./actions/catalog";
import _ from "lodash";
import {image} from "./services/tmdb";

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTv());
    }

    handleShowMore() {
        const {dispatch} = this.props;
        dispatch(fetchTv((this.props.tv.activePage + 1)));
    }

  render() {
    return (
        <div>
            {this.props.tv
                ? _.map(this.props.tv.results, (value, key) =>
                    <div key={key}>
                        <h3>{value.name}</h3>
                        <img src={image(value.poster_path)} alt=""/>
                    </div>
                )
                : "Loading"}
            {/*<li>Hello</li>*/}
            <button onClick={() => this.handleShowMore()}>Show More</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {catalog} = state;
    return catalog;
};

export default connect(mapStateToProps)(App);
