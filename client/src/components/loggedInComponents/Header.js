import React, { Component } from 'react';


import classes from './Header.css';

import Logout from '../loggedInComponents/Logout/Logout';

import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewStoryPopup from '../UI/NewStoryPopup/NewStoryPopup';
import NewPostPopup from '../UI/NewPostPopup/NewPostPopup';


let logoutStyle = {
    paddingLeft: "15px",
    paddingTop: "10px"
}

let d1Style = {
    paddingTop: "10px"
}

let d2Style = {
    paddingLeft: "15px",
    paddingTop: "10px"
};

let d3Style = {
    paddingLeft: "15px",
    paddingTop: "10px"
};

class Header extends Component {

    render() {
        return (
            <div id="Header" className={classes.Header}>
                <div>
                    <div className={classes.SubHeader}>
                        <h3><a href='/' style={{ cursor: "pointer", textDecoration:"none", color: "white"}}>Fakebook</a></h3>
                    </div>
                </div>
                <div>
                    <div className={classes.SubHeader}>
                        <div style={d1Style}><NewStoryPopup /></div>
                        <div style={d2Style}><NewPostPopup /></div>
                        {/* <div style={d2Style}><Button btnText="Chat" href="/chat"></Button></div> */}
                        <div style={d2Style}><Button btnText="My Posts" href="/myPosts"></Button></div>
                        <div style={d3Style}><Button btnText="+ Add Friend" href="/addfrnd"></Button></div>
                        <div style={logoutStyle}><Logout /></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{ auth: state.auth }
}

export default connect(mapStateToProps, actions)(Header);