import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement() {
        this.setState({
            value: this.state.value + 1
        })
    }

    renderTags() {
        if ( this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>;
    }

    render() { 
        return (
            <div>
                <span className="badge m-2 badge-warning">{this.state.value}</span>
                <button className='btn btn-secondary btn-sm' onClick={() => this.handleIncrement()}>Increment</button>
            </div>
        );
    }
}
 
export default Counter;