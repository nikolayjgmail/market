import React, {Component} from 'react';
import "./header.css"
import Logo from "../logo/logo";
import Icon from "../icons/icon";
import imgeBasket from "../header/shoping.png"
import imgeLogin from "../header/login.png"
import imgeFind from "../header/find.png"
import Searc from "../search/searc";
class Header extends Component {

    render() {
        const{actionSearch,actionBasket,actionUser, goodsCount,user}=this.props;
        return (
            <header>
                <div className={'bar'}>
                    <Logo/>
                    <Searc actionSearch={actionSearch}/>
                    <div className={"icons"}>
                        {/*<Icon action={""} iconUrl={imgeFind} iconInfo={this.props.goodsCount}/>*/}
                        <Icon action={actionBasket} iconUrl={imgeBasket} iconInfo={goodsCount}/>
                        <Icon action={actionUser} iconUrl={imgeLogin} iconInfo={user}/>


                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
