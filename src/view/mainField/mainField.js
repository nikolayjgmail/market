import React, {Component} from 'react';
import Categories from "../categories/categories";
import "./mainField.css"
import Goods from "../goods/goods";
class MainField extends Component {
    state= {
        data: this.props.data,
        catFiltered:''
    }


    action=(e)=>{
        const cat = e.target.textContent

        let result= this.state.data.filter((el)=>el.categories===cat)
        this.setState({catFiltered: result})

    }


    render() {
        return (
            <div className={"mainField"}>

                <Categories data={this.state.data} action={this.action}/>
                <Goods data={this.state.catFiltered}  action={this.props.action}/>
            </div>
        );
    }
}

export default MainField;