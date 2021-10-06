import React from "react";
import classes from "./Forma.module.css";

const Form = () => {
    return(
        <form className={classes.form} action="">
            <textarea name="text"/>
            <button>add</button>
            <button>close</button>
        </form>
    )
}
export default Form;