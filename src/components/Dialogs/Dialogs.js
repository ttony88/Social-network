import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Massage from "./Massage/Massage";
import FormMassageContainer from "./Massage/formMassade/FormMassageCotainer";

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage
    
    let dialogsElements = dialogsPage.dialogData.map(d => <Dialog ava={d.img} name={d.name} id={d.id} />)
    let massagesElements = dialogsPage.massagesData.map(m => <Massage massage={m.massage} id={m.id} ava={m.img} />)

    return(
        <div className={classes.dialogContainer}>
            <div className={classes.dialogs}>
                {dialogsElements}

            </div>
            <div className={classes.massages}>
                {massagesElements}
                <FormMassageContainer />
            </div>
        </div>
    )
}
export default Dialogs;