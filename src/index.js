import React from 'react'
import scrollIntoView from 'scroll-into-view'
import ScrollSection from './components/ScrollSection/index'
import ScrollContainer from './components/ScrollContainer/index'

const ScrollTo = (sectionId, offset = 0, speed = 500) => {
    const node = document.getElementById(sectionId)
    scrollIntoView(node, {
        time: speed,
        align: {
            top: offset,
        },
    })
}

export { ScrollContainer, ScrollTo, ScrollSection }
