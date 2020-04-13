import React, { Component } from 'react';



import './EditProduct.css';

class About extends Component {
  
    render() {
        let content = (
            <form className="edit-product__form" onSubmit={this.editProductHandler}>
                <h1>Developer Information</h1>
               
    
            <p>Chutipon Vimonkanjana   (610610578)</p>
            <p>Warodom Nakpor  (610610613)</p>
            <p>Sirapit Leekhao  (610610615)</p>
            <h1>I LOVE CPE 261207</h1>
            </form>
        );

      

        return <main>{content}</main>;
    }
}

export default About;
