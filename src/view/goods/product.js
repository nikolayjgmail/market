import React, {Component} from 'react';
import p1 from "./phone1.jpg"
import Details from "../details/details";
class Product extends Component {



    render() {
        // const imgProduct={'p1':<img src="./phone1.jpg" alt=""/>}
        return (

            <div index={this.props.dataid} className={"product"} onClick={this.props.action} >

                {/*<Details data={this.props.data[0]}/>*/}

                {/*console.log(imgProduct['p1'])*/}
                {/*}*/}
                {/*<img src={p1} alt=""/>*/}
                {/*<img index={this.props.dataid} src={this.props.img} alt=""/>*/}
                <img index={this.props.dataid}  alt=""/>
                <h5 index={this.props.dataid}>{this.props.name}</h5>
                {/*<p index={this.props.dataid}>{this.props.cat}</p>*/}
                <p index={this.props.dataid}>{this.props.price}₴</p>
            </div>
        );
    }
}

export default Product;