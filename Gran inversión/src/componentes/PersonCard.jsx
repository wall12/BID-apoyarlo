import React from "react";
const PersonCard = props =>{

// class PersonCard extends Component {
//     render() { 

//         const {firstname, lastname, age, haircolor} = this.props;

        return (
            <>
            <h1>{props.lastname},{props.firstname}</h1>
            <p>age: {props.age}</p>
            <p>haircolor: {props.haircolor}</p>
            </>
        );
    }
// }
 
export default PersonCard;