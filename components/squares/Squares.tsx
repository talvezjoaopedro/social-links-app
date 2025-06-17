import React from "react";
import squareStyles from "./Squares.module.scss";

const Squares = () => {
    return (
        <div className={squareStyles.square}>
            <div className={squareStyles.squareTl}></div>
            <div className={squareStyles.squareTr}></div>
            <div className={squareStyles.squareBl}></div>
            <div className={squareStyles.squareBr}></div>
        </div>
    );
};

export default Squares;
