import React, {Component} from 'react';
import "./goods.css"
import Product from "./product";

class Goods extends Component {

    render() {

        return (


            <div className={"goods"}>

                {

                    this.props.data ?
                        this.props.data.map((res, key) => {

                            return <Product action={this.props.action} data={this.props.data} key={key} name={res.name} cat={res.categories} price={res.price} dataid={res.index} img={res.picture}/>
                        })
                        : this.props.data


                }


            </div>
        );
    }
}

export default Goods;