import React, {Component} from 'react';
import "./basket.css"
import Product from "../goods/product";
import Goods from "../goods/goods";
import BasketComponent from "./basketComponent";

class Basket extends Component {
    state = {};

    render() {

        const {objGoods, hideBasket, delGoods, user,} = this.props;

        //работает! (добавлять товары в корзину)
        let arr = objGoods[user];


        //не работает((( ( хотя это тоже массив обьектов)
        // let arr=[{a:1},{a:2},{a:1},{a:2},]

        console.log(arr);



        let renderArr = [...new Set(arr)];

        console.log(renderArr)




        let total = 0;
        arr.map((el) => {
            total = total + Number(el.price)
        })
        return (
            <div className={"basketMain"} onClick={hideBasket}>
                <div className={"basketField"}>

                    {
                        renderArr.map((res, key) => {

                            return res.count > 0 && <BasketComponent data={res} delGoods={delGoods} key={key}/>
                        })

                    }
                    <h3 className={'total'}>ВСЕГО: {total} ₴</h3>
                    <div className={'buy'}>
                    <button >КУПИТЬ</button>
                    </div>

                </div>


            </div>
        );
    }
}

export default Basket;
