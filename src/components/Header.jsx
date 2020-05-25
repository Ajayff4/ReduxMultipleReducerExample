import React, { Component } from 'react'
import { signIn, signOut } from '../actions'
import { connect } from 'react-redux'

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoggedIn: false
    //     }
    // }

    render() {
        return (
            <>{
                this.props.isLoggedIn.isLoggedIn ?
                    (<button onClick={() => this.props.signOut()}>Logout</button>) :
                    (<button onClick={() => this.props.signIn()}>Login</button>)
            }</>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter,
    isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);