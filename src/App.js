import React, {Component} from 'react';
import './App.css';

import Categories from "./view/categories/categories";


// import data from "./data"
import Details from "./view/details/details";
import Header from "./view/header/header";
import Basket from "./view/basket/basket";
import Goods from "./view/goods/goods";
import Login from "./view/login/login";



// // const url='http://localhost/market/get.php';
// const url='http://localhost/market/data.json';
// const data=[];
// fetch(url)
//     .then((res)=>res.json())
//     .then((res)=>console.log(res));
//
//
// console.log(data);
class App extends Component {
    /*
    catFiltered- products in the main window
     */



    state = {
        data: [],
        user: 'name',
        display: '',
        detailsElem: '',
        basket: {},
        cntGoods: 0,
        dispBasket: false,
        dispLogin: false,
        catFiltered: '',
        test: 0,
        usersArr: [],
    };

  componentDidMount() {
      fetch('http://localhost/market/data.json')
          .then((res)=>res.json())
          .then((res)=>this.setState({data:res}));
  }




    showDetails = (e) => {
        e.stopPropagation()
        let getIndex = Number(e.target.getAttribute("index"))
        this.setState({display: 'block'})
        let elem = this.state.data.filter((el) => el.index === getIndex)
        this.setState({detailsElem: elem[0]})

    };

    hideDetails = (e) => {
        e.preventDefault()
        this.setState({display: 'none'})

    };

    inBasket = (e) => {
        let index = Number(e.target.getAttribute("index"));
        this.state.data.map((el) => {

            if (el.index == index) {
                el.count++;
                let arr = []
                arr.push(el)
                let basket = {[this.state.user]: arr};

                if (this.state.basket[this.state.user]) {
                    let arr2 = this.state.basket[this.state.user]
                    arr2.push(el)
                    let bas = {[this.state.user]: arr2}
                    this.setState({basket: bas})
                } else {
                    this.setState({basket: basket})
                }


            }

        });


    };

    displayBasket = (e) => {
        e.stopPropagation();
        // console.log(this.state.basket[this.state.user])
        this.state.basket[this.state.user] && this.setState({dispBasket: true})

    };

    hideBasket = (e) => {
        e.stopPropagation();
        e.target.className === "basketMain" && this.setState({dispBasket: false})
    };

    delGoods = (e) => {
        let dataId = e.target.getAttribute("dataid");
        --this.state.data[dataId].count;

        this.setState({cntGoods: --this.state.cntGoods});
        let elemArr = this.state.basket[this.state.user]
        let elemArrIndex = elemArr.findIndex(el =>
            el.index == dataId
        );
        elemArr.splice(elemArrIndex, 1)

    };

    displayLogin = () => {
        this.setState({dispLogin: !this.state.dispLogin})
    };

    actionCategories = (e) => {
        const cat = e.target.textContent;

        let result = this.state.data.filter((el) => el.categories === cat);
        this.setState({catFiltered: result})

    };

    search = (e) => {

        const value = e.target.value.toLowerCase()

        const searched = this.state.data.filter(elem => {
            let name = elem.name.toLowerCase()
            if (name.indexOf(value) !== -1) return elem
        })
        this.setState({catFiltered: searched});
        console.log(searched)
    };

    getUserValue=()=>{
      let name = document.querySelector(".loginName").value;
      let pass = document.querySelector(".loginPass").value;

return {
    name:name,
    pass:pass
}

};

    registerUser = () => {
       const user = this.getUserValue();
       if(user.name && user.pass){

           const usersArr = this.state.usersArr;
           usersArr.push(user);
           this.setState({usersArr: usersArr });

           console.log(this.state.usersArr)
       }

    };

    loginUser = () => {

    };


    render() {
        const {hideBasket, displayBasket, hideDetails, displayLogin, actionCategories, showDetails, inBasket, delGoods, search, loginUser, registerUser} = this;
        const {basket, catFiltered, detailsElem, display, data, user, dispBasket, dispLogin} = this.state;

        return (
            <div className="app">

                <div className={"main"} onClick={hideDetails}>

                    {
                        dispLogin && <Login loginUser={loginUser} registerUser={registerUser}/>

                    }

                    {
                        dispBasket &&
                        <Basket objGoods={basket} hideBasket={hideBasket} delGoods={delGoods} user={user}/>

                    }

                    <Header goodsCount={this.state.basket[this.state.user] && this.state.basket[this.state.user].length}
                            actionBasket={displayBasket} actionUser={displayLogin}
                            user={user} actionSearch={search}/>
                    <div className={"mainDiv"}>
                        <Categories data={data} action={actionCategories}/>
                        <Goods data={catFiltered} action={showDetails}/>
                    </div>


                    <Details index={detailsElem.index} data={detailsElem} style={display} inBasket={inBasket}/>

                </div>
            </div>
        );
    }
}

export default App;
