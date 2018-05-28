import React from 'react'
import scrollIntoView from 'scroll-into-view'
import ScrollSection from './components/ScrollSection/index'
import ScrollContainer from './components/ScrollContainer/index'

window.findReactComponent = function(el) {
    for (const key in el) {
        if (key.startsWith('__reactInternalInstance$')) {
            const fiberNode = el[key];

            return fiberNode && fiberNode.return && fiberNode.return.stateNode;
        }
    }
    return null;
};

const ScrollTo = (sectionId, containerId = null, offset = 0, speed = 500) => {
    let node = null;

    if( containerId !== null) {
        const container = document.getElementById(containerId);
        const containerReact = findReactComponent(container);
        node = containerReact.getNode(sectionId)
    } else {
        node = document.getElementById(sectionId);

    }
    scrollIntoView(node, {
        time: speed,
        align: {
            top: offset,
        },
    })
};

export { ScrollContainer, ScrollTo, ScrollSection }
