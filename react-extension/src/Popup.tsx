import React from "react";
import browser from "webextension-polyfill";

class PopUp extends React.Component {
  handleClick() {
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create
    browser.tabs.create({url: "about:blank" });
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleClick} />
        <p>Hello world!</p>
      </>
    );
  }
}

export default PopUp
