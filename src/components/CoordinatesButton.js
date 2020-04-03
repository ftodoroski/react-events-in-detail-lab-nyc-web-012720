import React from 'react'

class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={event => this.handleClick(event)}>Button</button>
        )
    }
}

export default CoordinatesButton