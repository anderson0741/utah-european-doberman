// import React, { Component } from 'react';

// var Nav2 = React.createClass({
//     showLeft: function() {
//       this.refs.left.show();
//     },

//     showRight: function() {
//       this.refs.right.show();
//     },

//     render: function() {
//       return <div>
//         <button onClick={this.showLeft}>Show Left Menu!</button>
//         <button onClick={this.showRight}>Show Right Menu!</button>

//         <Menu ref="left" alignment="left">
//           <MenuItem hash="first-page">First Page</MenuItem>
//           <MenuItem hash="second-page">Second Page</MenuItem>
//           <MenuItem hash="third-page">Third Page</MenuItem>
//         </Menu>

//         <Menu ref="right" alignment="right">
//           <MenuItem hash="first-page">First Page</MenuItem>
//           <MenuItem hash="second-page">Second Page</MenuItem>
//           <MenuItem hash="third-page">Third Page</MenuItem>
//         </Menu>
//       </div>;
//     }
//   });

import React, { Component } from 'react';

import './Nav2.css';

export default class Nav2 extends Component {
  constructor(props) {
    super(props);
    this.mobileNav = this.mobileNav.bind(this);
}
  mobileNav() {
    let x = document.getElementByClassName("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render() {
    let {mobileNav} = this.props;
    return (
      <div className="superdiv">
        <div>
          <div className="topnav" className="myTopnav">
            <a href="/" className="active">Utah European Doberman</a>
            <a href="/about">About</a>
            <a href="/dogs">Dogs</a>
            <a href="/contact">Contact Us</a>

            <a href="javascript:void(0);" className="icon" onclick={mobileNav()}>&#9776;</a>
          </div>
        </div>
      </div>
    )
  }
}
