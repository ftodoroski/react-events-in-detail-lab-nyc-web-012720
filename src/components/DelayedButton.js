import React from 'react'

class DelayedButton extends React.Component {
    handleClick = (event) => {
        event.persist()
        return setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
            <button onClick={event => this.handleClick(event)}>Button</button>
        )
    }
}

export default DelayedButton