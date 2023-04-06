import App from "../App.js"
import { ModalOption } from "../modal/Modals.js"
import ChangeInputValue from "../helpers/ChangeInputValue.js" 

import getDataWord from "../data/getDataWord.js"
import setDataWord from "../data/setDataWord.js"

const FormWord = async ( { type = true, id = false } )=>{
    const [ modalElement ] = ModalOption(`
        ${ !type ? `<input name="id" hidden>` : '' }
        <input type="text" class="input__AIfl7" name="name" placeholder="escriba una palabra" >
        <div class="div__cOBMK" >
            ${ !type ? `
                <button type="button" class="button__qDWQ5 after" id="btnShare" ><i class="fa-solid fa-share-nodes"></i></button> 
                <button type="button" class="button__qDWQ5 after" id="btnDelete" ><i class="fa-solid fa-trash"></i></button> 
            ` : '' }
            <button type="submit" class="button__qDWQ5" ><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `)

    const letter = /[a-zA-ZñÑ]/
    const [ data = {} ] = type ? [{}] : await getDataWord({ type : 'normal', id : id })
    ChangeInputValue( modalElement, data )
 
    modalElement.name.select()

    modalElement.addEventListener( 'input', (e)=> {
        if( letter.test( e.data ) ){
            data[ e.target.name ] = e.target.value.replace(/\s+/g, '').toUpperCase()
            return e.target.value = data[ e.target.name ].slice(0, 10)
        }

        e.target.value = e.target.value.slice(0, e.target.value.length - 1) 
    } )

    modalElement.addEventListener( 'click', e =>{
        if( modalElement.btnDelete === e.target ){
            return setDataWord( { type : 'delete', data : data } )
            .then( resp => resp && App() ) 
        }
        else if( modalElement.btnShare === e.target ){
            setDataWord( { type : 'share', data : data } )
            .then( resp => resp && App() ) 
        }
    })

    modalElement.addEventListener( 'submit', e=>{
        e.preventDefault()
        
        setDataWord( { type : type ? 'add' : 'update', data : data } )
            .then( resp => resp && App() ) 

    })

}

export default FormWord