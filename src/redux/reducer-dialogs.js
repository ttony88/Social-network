const ADD_MASSAGE = 'ADD_MASSAGE'
const UPDATE_MASSAGE_TEXT = 'UPDATE_MASSAGE_TEXT'

let initialState = {
        massagesData: [
            {id: 1, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'Hello'},
            {id: 2, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'Hi, my friend!'},
            {id: 3, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'How are you?'},
            {id: 4, img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg", massage: 'Yo!'}

        ],
        dialogData: [
            {id: 1, name: 'Anton', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
            {id: 2, name: 'Dasha', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
            {id: 3, name: 'Sava', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
            {id: 4, name: 'Rita', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
            {id: 5, name: 'Masha', img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg"},
        ],
        textMassage: 'HI'
}


let reducerDialogs = (state=initialState, action) => {
    switch (action.type) {
        case (ADD_MASSAGE):{
            let newMassage = {
                id: 5,
                img: "https://sun9-35.userapi.com/BOeZ70eIdvudOb-ZxF3ZIumFNN_DdmgQS9PHyg/x5GgqCgfCs0.jpg",
                massage: state.textMassage
            }
            return {
                ...state,
                massagesData: [...state.massagesData, newMassage],
                textMassage: ''
            }
        }
        case(UPDATE_MASSAGE_TEXT):{
            return {
                ...state,
                textMassage: action.newText
            }
        }
        default:
            return state
    }
}
export const actionCreatorAddMassage = () =>
    ({type: ADD_MASSAGE})

export const actionCreatorUpdateMassageText = (text) =>
    ({type: UPDATE_MASSAGE_TEXT, newText: text})

export default reducerDialogs