import React  from 'react'
import PropTypes from 'prop-types'

class Ingredient extends React.Component {

    static propTypes = {
        amount: PropTypes.number,
        measurement: PropTypes.string,
        name: PropTypes.string
    }

    render() {
        const { amount, measurement, name } = this.props
        return (
            <li>
                <span className="amount">{amount}</span>
                <span className="measurement">{measurement}</span>
                <span className="name">{name}</span>
            </li>
        );
    }
}

export default Ingredient