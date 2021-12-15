import React from 'react';
import classes from "./FormMassage.module.css";



let FormMassage = (props) => {

    let newMassageElement = React.createRef()

    let addMassage = () => {
        props.addMassage()
    }
    let updateMassageText = () => {
        let text = newMassageElement.current.value
        props.updateMassageText(text)
    }

    return(
        <div className={classes.form}>
            <textarea onChange={updateMassageText} ref={newMassageElement} className={classes.text} name="text" value={props.textMassage} />
            <button onClick={addMassage} className={classes.button}>add massage</button>
        </div>
    )
}
export default FormMassage;