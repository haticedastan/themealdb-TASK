// import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

// export default function InputSearch() {
//   // const [data, setData] = useState([]);
//   // const [q, setQ] = useState("");

//   const [items, setItems] = React.useState([]);

//   React.useEffect(() => {
//     const fetchCategories = async () => {
//       const data = await fetch(
//         // "https://www.themealdb.com/api/json/v1/1/categories.php"
//         "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
//       );
//       const result = await data.json();
//       console.log(result);
//       setItems(result.categories);
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div>
//        {items &&
//             items.map((item) => (

//               <Col key={item.idMeal}>{item.strMeal}</Col>
//               // <Dropdown.Item key={item}>{item.strCategory} </Dropdown.Item>
//             ))}
//       <Container>

//         <Row>Meal Name-Origin Country / Area </Row>
//         <Row>
//           <Col>
//             <a href="https://stackoverflow.com">
//               <img alt="images"></img>
//             </a>
//           </Col>
//           <Col>Ingredients</Col>
//         </Row>
//         <Row>Instructions</Row>
//       </Container>
//     </div>
//   );
// }

import React from "react";
 import { DropdownButton, Dropdown } from "react-bootstrap";

export default function InputSearch() {
  const myStyle = {
    display: "inline-block",
    width: "200px",
    padding: "5px",
  };
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetch(
       "https://www.themealdb.com/api/json/v1/1/categories.php"
       // "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const result = await data.json();
      console.log(result);
      setItems(result.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div>
     
          <div>
            
            <Container>
              
              
                <DropdownButton   style={myStyle} id="dropdown-basic-button" title="List by Category">
              {items &&
                items.map((item) => (
              
              <Dropdown.Item href="#/action-1">{item.strCategory}</Dropdown.Item>
               ))}  
               </DropdownButton>

               <DropdownButton style={myStyle} id="dropdown-basic-button" title="List by Area">
              {items &&
        items.map((item) => (
              
              <Dropdown.Item href="#/action-1">{item.strCategory}</Dropdown.Item>
               ))}  
               </DropdownButton>
              <input  style={myStyle} placeholder="search"></input>
            
              

            
            </Container>
          </div>
       
    </div>
  );
}
