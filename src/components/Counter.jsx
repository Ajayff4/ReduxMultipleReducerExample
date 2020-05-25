import React, { Component } from 'react'
import { increment, decrement } from '../actions'
import { connect } from 'react-redux'
import Header from './Header';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0,
    //         isLoggedIn: false
    //     }
    // }

    render() {
        return (
            <div className="App" >
                <Header />
                {
                    this.props.isLoggedIn.isLoggedIn ?
                        (
                            <div>
                                <h1>GamePage Component</h1>
                                <h1>Counter: {this.props.counter.counter}</h1>
                                <h1>isLoggedIn: {JSON.stringify(this.props.isLoggedIn.isLoggedIn)}</h1>
                                <button onClick={() => this.props.increment()}>+</button>
                                <button onClick={() => this.props.decrement()}>-</button>
                            </div>
                        ) : (
                            <div>
                                <span>Login to play the counter game!</span>
                            </div>
                        )
                }
            </div >
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
    isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);