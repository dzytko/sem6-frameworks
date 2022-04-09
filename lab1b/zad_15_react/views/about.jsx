const React = require('react')

class HelloMessage extends React.Component {
    render() {
        return (
            <>
                <div>Nazwisko: {this.props.surname}</div>
                <div>E-mail: {this.props.email}</div>
                <div>Age: {this.props.age}</div>
            </>
        )
    }
}

module.exports = HelloMessage