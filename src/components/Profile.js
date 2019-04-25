import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//If a user off session was recieved 
//Then we want to allow them to see the page
//Otherwise
//Redirect them back
//import connect
//mapStateToProps

//import x from y
class Profile extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        if(!this.props.user.username) {
            this.setState({redirect: true});
        }
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile);