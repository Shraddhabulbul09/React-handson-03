import {Component} from "react";


class HandsonThreeChild extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>

              <h1>EMPLOYEE FEEDBACK DATA</h1>
              <div className="array">

                {this.props.value.map((item, index)=>{

                return(
                <h2 key={index} className="box">Name:{item.name} | Department:{item.department} | Ratings:{item.ratings}</h2>
                )

              })}
</div>

            <button className="back-btn" onClick={this.props.tf}>Go back</button>
            </>
        )
    }
}

export default HandsonThreeChild 