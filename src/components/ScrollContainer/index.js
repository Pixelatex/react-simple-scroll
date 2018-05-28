import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'

class ScrollContainer extends React.Component {
    static childContextTypes = {
        scroll: PropTypes.object,
    };

    elements = {};

    handleScroll = () => {
        // console.log('isScrolling', this.elements)
        // Object.keys(this.elements).map(key => {
        //     const node = document.getElementById(key)
        //     console.log(node, 'the full node')
        //
        //     if (node.offsetTop < 50) {
        //         console.log(key, ' is on top!')
        //     }
        // })
        // if (this.state.sectionRendered) {
        //     const n = findDOMNode(this)
        //     if (n.offsetTop < 50) {
        //         console.log(this.props.id, ' is on top!')
        //     }
        //     console.log(n.offsetTop, 'offset')
        // }
    };

    getNode = (name) => {

        return findDOMNode(this.elements[name]);
    };

    register = (name, ref) => {
        this.elements[name] = ref
    };

    unregister = name => {
        delete this.elements[name]
    };

    getChildContext() {
        return {
            scroll: {
                register: this.register,
                unregister: this.unregister,
            },
        }
    }

    render() {
        return <div id={this.props.containerId} onScroll={this.handleScroll}>{React.Children.only(this.props.children)}</div>
    }
}

ScrollContainer.defaultProps = {
    containerId: ''
};

export default ScrollContainer
