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

    getActiveElement = () => {
        let result = this.state.activeElement;
        const containerScrollTop = this.container.scrollTop;
        Object.keys(this.elements).forEach(key => {
            const element = findDOMNode(this.elements[key]);
            // if offset height === 0, the element is empty
            if (element.offsetHeight !== 0) {
                const isActive =
                    containerScrollTop >= element.offsetTop - this.props.topScrollOffset &&
                    containerScrollTop <= element.offsetHeight + element.offsetTop;

                if (isActive) {
                    result = key
                }
            }
        });
        return result
    };

    handleScroll = e => {
        const activeElement = this.getActiveElement();
        if (this.state.activeElement !== activeElement) {
            console.log('active!');
            // Do the call back with the active id
            this.setState({
                activeElement: activeElement,
            });
            this.props.topScrollCallback(activeElement)
        }
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
                style={{overflowY: 'scroll', position: 'relative', ...this.props.extraStyle}}
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
    topScrollOffset: 10,
    extraStyle: {},
    extraClassName: ''
};

ScrollContainer.propTypes = {
    containerId: PropTypes.string,
    topScroll: PropTypes.bool,
    topScrollCallback: PropTypes.func,
    topScrollOffset: PropTypes.number,
    extraStyle: PropTypes.object,
    extraClassName: PropTypes.string
};

export default ScrollContainer
