import App from "../App.js"
import { ModalOption } from "../modal/Modals.js"
import ChangeInputValue from "../helpers/ChangeInputValue.js" 

import getDataWord from "../data/getDataWord.js"
import setDataWord from "../data/setDataWord.js"

const FormWordShare = async ( { type = true, id = false } )=>{
    const [ modalElement ] = ModalOption(`
        ${ !type ? `<input name="id" hidden>` : '' }
        <input type="text" class="input__AIfl7" name="name" placeholder="escriba una palabra" readonly>
        <div class="div__cOBMK" >
            ${ !type ? `
                <button type="button" class="button__qDWQ5 after" id="btnShareOpen" ><i class="fa-solid fa-globe"></i></button> 
                <button type="button" class="button__qDWQ5 after" id="btnDeleteShare" ><i class="fa-solid fa-trash"></i></button> 
            ` : '' }
        </div>
    `)

    const [ data = {} ] = type ? [{}] : await getDataWord({ type : 'share', id : id })
    ChangeInputValue( modalElement, data )

    modalElement.addEventListener( 'input', ({target})=> data[ target.name ] = target.value )

    modalElement.addEventListener( 'click', e =>{
        if( modalElement.btnDeleteShare === e.target ){
            return setDataWord( { type : 'deleteShare', data : data } )
            .then( resp => resp && App() ) 
        }
        else if( modalElement.btnShareOpen === e.target ){
            location.hash = `#share/${ data.id }`
        }
    })

    modalElement.addEventListener( 'submit', e=>{ e.preventDefault() })

}

export default FormWordShare