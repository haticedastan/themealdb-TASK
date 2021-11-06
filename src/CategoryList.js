// import React, { useState, useEffect } from "react";
import { Row, Col, Container, DropdownButton,Dropdown } from "react-bootstrap";

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
// import { DropdownButton, Dropdown } from "react-bootstrap";

export default function InputSearch() {
  // const myStyle = {
  //   display: "inline-block",
  //   width: "200px",
  //   padding: "5px",
  // };
  const [items, setItems] = React.useState([]);
  const image={
    width:"300px"
  }
  const myStyle = {
    display: "inline-block",
    width: "200px",
    padding: "5px",
  };
  React.useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetch(
        // "https://www.themealdb.com/api/json/v1/1/categories.php"
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const result = await data.json();
      console.log(result);
      setItems(result.meals);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {items &&
        items.map((item) => (
          <div>
            
            <Container>
            <Container>
              <Row><hr/> </Row>

            </Container>
              <Row>
                {item.strMeal} / {item.strArea}{" "}
              </Row>
              <Row>
                <Col>
                  <a href="#">
                    <img style ={image} src={item.strMealThumb} alt="images"></img>
                  </a>
                </Col>
                <Col>
                <ul> 
                   <li>{item.strIngredient1}</li>
                   <li>{item.strIngredient2}</li>
                   <li>{item.strIngredient3}</li>
                   <li>{item.strIngredient4}</li>
                </ul>
                 </Col>
              </Row>
              <Row>{item.strInstructions}</Row>
            </Container>
          </div>
        ))}
    </div>
  );
}
