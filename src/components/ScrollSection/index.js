import React from 'react'
import PropTypes from 'prop-types'

class ScrollSection extends React.Component {
    static contextTypes = {
        scroll: PropTypes.object,
    };

    componentDidMount() {
        this.context.scroll.register(this.props.sectionId, this._element);
        this.props.onMountHandler()
    }

    componentWillUnmount() {
        this.context.scroll.unregister(this.props.sectionId);
        this.props.onUnmountHandler()

    }

    componentWillReceiveProps() {
        this.props.onChangeHandler()
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                onChildHandler: this.props.onChildHandler,
            })
        })
    }

    render() {
        return (
            <div id={this.props.sectionId}  ref={ref => (this._element = ref)}>
                {this.renderChildren()}
            </div>
        )
    }
}

ScrollSection.defaultProps = {
    onMountHandler: () => null,
    onUnmountHandler: () => null,
    onChangeHandler: () => null,
    onChildHandler: () => null
};

ScrollSection.propTypes = {
    onMountHandler: PropTypes.func,
    onUnmountHandler: PropTypes.func,
    onChangeHandler: PropTypes.func,
    onChildHandler: PropTypes.func,
    sectionId: PropTypes.string.isRequired
};

export default ScrollSection
