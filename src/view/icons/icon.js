import React, {Component} from 'react';
import "./icon.css"



class Icon extends Component {
    render() {
        return (
            <div className="ico" onClick={this.props.action} style={{backgroundImage: `url(${this.props.iconUrl})`}}>
                {
                    this.props.iconInfo!==0 && <p>{this.props.iconInfo}</p>
                }

            </div>
        );
    }
}

export default Icon;