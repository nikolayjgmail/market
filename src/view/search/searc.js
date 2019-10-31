import React, {Component} from 'react';
import "./search.css"

class Searc extends Component {
    render() {
        const{actionSearch}=this.props
        return (
            <div>
                <input className={"searchInput"} type="text" placeholder={"SEARCH"} onChange={actionSearch}/>
            </div>
        );
    }
}

export default Searc;