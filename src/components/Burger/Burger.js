import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./burger.module.css";
import { withRouter } from "react-router-dom";

function Burger(props) {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  //   let transformedIngredients = Object.keys(
  //     props.ingredients
  //   ).map((igKey, i) => <BurgerIngredient key={igKey + i} type={igKey} />);
  // console.log(transformedIngredients)
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Add Your Ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
export default withRouter(Burger);
