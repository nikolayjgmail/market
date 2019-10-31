import React, {Component} from 'react';
import "./categories.css"
class Cat extends Component {
    render() {
        return (
            <div className={"cat"}>
               <p  onClick={this.props.action}>{this.props.categories}</p>
            </div>
        );
    }
}

export default Cat;