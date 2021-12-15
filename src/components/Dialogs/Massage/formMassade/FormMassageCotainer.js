import React from 'react';
import FormMassage from './FormMassage';
import {actionCreatorAddMassage, actionCreatorUpdateMassageText} from "../../../../redux/reducer-dialogs";
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
   return {
    textMassage: state.dialogsPage.textMassage
   } 
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMassage: () => {dispatch(actionCreatorAddMassage())},

        updateMassageText: (text) => {dispatch(actionCreatorUpdateMassageText(text))}
    }

}

const FormMassageCortainer = connect(mapStateToProps, mapDispatchToProps)(FormMassage)

export default FormMassageCortainer;