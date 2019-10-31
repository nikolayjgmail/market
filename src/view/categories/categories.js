import React, {Component} from 'react';
import "./categories.css";
import Cat from "./cat";

class Categories extends Component {

    render() {
        const arrCat=[];

        this.props.data.map((res)=>{
            if(arrCat.indexOf(res.categories)==-1){
                arrCat.push(res.categories)
            }
        })

        return (
            <div className={"categories"}>
                {
                  arrCat.map((res,key)=>{
                      return <Cat key={key} categories={res} action={this.props.action} />
                  })

                }

            </div>
        );
    }
}

export default Categories;