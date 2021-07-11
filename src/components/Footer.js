import React from "react";

function Footer(props) {

  const myFunkyFooterStyles = {
    fontSize: '5'
  }

  return (
    <div style={myFunkyFooterStyles}>
      <p><small>Tap Room Stuff</small></p>
      <p><small>FAQs</small></p>
      <p><small>About</small></p>
      <p><small>Merch</small></p>
      <p><small>Contact Us</small></p>
      <p><small>Need a Store?</small></p>
    </div>
  )
}

export default Footer;