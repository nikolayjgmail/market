import React, {Component} from 'react';

class BasketComponent extends Component {
    render() {
        const {data,delGoods} = this.props;
        return (
            <div className={"basketComponent"}   >
                <a href="#" dataid={data.index} onClick={delGoods}>X</a>
                <div className={'image'}>
                    <p className={'countGoods'}>{data.count>1 && data.count}</p>
                    <img src={data.picture} alt=""/>
                </div>

                <p>{data.name}</p>
                <p>{data.price}₴</p>

            </div>
        );
    }
}

export default BasketComponent;