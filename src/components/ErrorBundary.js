import React from 'react';

class ErrorBundary extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    // kind of like try statement

    render() {
        if (this.state.hasError) {
            return <h1>that's not good!</h1>
        } else {
            return (
                <div>{this.props.children}</div>
            )
        }
    };
};

export default ErrorBundary;

// This is very useful in the production mode, where you cannot see the detailed error message