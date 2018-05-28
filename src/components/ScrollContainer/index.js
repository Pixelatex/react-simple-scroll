import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'

class ScrollContainer extends React.Component {
    state = {
        activeElement: ''
    };

    static childContextTypes = {
        scroll: PropTypes.object,
    };

    elements = {};

    handleScroll = (e) => {
        // This should be updated to handle the detection when a scroll element is on top

        const containerScrollTop = this.container.scrollTop;
        const containerOffset = this.container.offsetHeight;

        Object.keys(this.elements).map(key => {
            const element = this.elements[key];
            const remainingDistanceToTop = element.offsetTop - ((containerOffset + containerScrollTop) + element.offsetHeight /2);

            if( remainingDistanceToTop < 0) {
                // Do the call back with the active id
                if(this.state.activeElement !== key) {
                    this.setState({
                        activeElement: key
                    });
                    this.props.topScrollCallback(key);


                }
            }
        })
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
        return (
            <div
                style={{overflowY: 'scroll', ...this.props.extraStyle}}
                id={this.props.containerId}
                className={this.props.extraClassName}
                onScroll={this.props.topScroll ? this.handleScroll : () => null}
                ref={ref => this.container = ref}
            >
                {this.props.children}
            </div>)
    }
}

ScrollContainer.defaultProps = {
    containerId: '',
    topScroll: false,
    topScrollCallback: () => null,
    extraStyle: {},
    extraClassName: ''
};

ScrollContainer.propTypes = {
    containerId: PropTypes.string,
    topScroll: PropTypes.bool,
    topScrollCallback: PropTypes.func,
    extraStyle: PropTypes.object,
    extraClassName: PropTypes.string
};

export default ScrollContainer
