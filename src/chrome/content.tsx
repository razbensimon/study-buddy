import React from "react";
import ReactDOM from "react-dom";
import {ChromeMessage, Sender} from "../types";
import {IconPopper} from "../components/icon-popper/icon-popper"
import {createPopper} from "@popperjs/core";

const messagesFromReactAppListener = (message: ChromeMessage, sender: any, response: any) => {
    console.log('[content.js]. Message received', {
        message,
        sender,
    })


    response('Hello from content.js');

    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === 'Hello from React') {
        response('Hello from content.js');
    }

    if (
        sender.id === chrome.runtime.id &&
        message.from === Sender.React &&
        message.message === "delete logo") {

        const logo = document.getElementById('hplogo');
        logo.parentElement.removeChild(logo)
    }
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);


// function onMouseDown() {
//     return () => {
//         ReactDom.unmountComponentAtNode(document.querySelector('#sb-icon-popper'));
//
//     };
// }

function onMouseup() {
    const selection = window.getSelection();
    const selected = selection.toString();

    if (!selected) {
        return;
    }

    console.log(selected);

    const container = document.createElement("div");
    container.id = "sb-icon-popper";
    document.body.appendChild(container);

    console.warn(createPopper);
    console.warn(ReactDOM.render);
    //try {
    ReactDOM.render(<IconPopper/>, container);
    //} catch (e) {
//        console.error(e);
    //  }

    console.log(container);
}

document.addEventListener('mouseup', onMouseup);
//document.addEventListener('mousedown', onMouseDown);



