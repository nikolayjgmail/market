import React, {Component} from 'react';
import "./details.css"

class Details extends Component {
    render() {
        return (
            <div className={"detailsMain"} style={{"display":`${this.props.style}`}}>
                <img src={this.props.data.picture} alt=""/>
                <h2>{this.props.data.name}</h2>
                <h3>{this.props.data.categories}</h3>
                <h3>{this.props.data.price}₴</h3>
                <p>{this.props.data.about}</p>
                <button index={this.props.index} onClick={this.props.inBasket}>IN BUSCKET</button>
            </div>
        );
    }
}

export default Details;