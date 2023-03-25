import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import LstMyWords from "./LstMyWords.js"

import FormCopyShare from "./FormCopyShare.js"

import ModalElement from "../modal/ModalElement.js"

const FormWord =( add = true, data = {} )=>{ 

    const [ element, hideElement ] = ModalElement(
        'form', { class: 'form__bbYa2 scrollbarY', autocomplete: 'off'}, `
            <div class="div__q4tSi" >
                ${ add ? '' : `<input name="id" value="${ data.id }" hidden>`}
                <input type="text" class="input__Qc9Lu" name="name" value="${ data.word || '' }" placeholder="palabra" >
                <div class="div__Ynhkq" >

                    ${ add ? '' : `
                        <button type="button" class="button__GvmU2 after" id="button__5Ar7GFRuWy" ><i class="fa-solid fa-trash"></i></button>
                        <button type="button" class="button__GvmU2 after" id="button__Bo61HgxIZh" ><i class="fa-solid fa-share-nodes"></i></button>
                    ` }
                    
                    <button type="submit" class="button__zCkrz" > <i class="fa-solid fa-arrow-right"></i> </button>
                </div>
            </div>
        `
    )

    const letter = /[a-zA-ZñÑ]/ 
    const [{ token = false }] =  JSON.parse( getLocalStorage( 'auth', '[{}]' ) )

    element.name.select()

    element.addEventListener( 'click', ( { target } )=>{

        if( target === element.button__5Ar7GFRuWy ) return setData( new FormData( element ), srcApi( `post/words/delete?token=${ token }` ) )
            .then( ()=> ( hideElement(), LstMyWords() ) )
 
        if( target === element.button__Bo61HgxIZh ) return setData( new FormData( element ), srcApi( `post/words/share?token=${ token }` ) )
            .then( (resp)=> {
                if( resp ){
                    hideElement()
                    FormCopyShare( resp )
                }
            })
    } )  
    
    element.addEventListener( 'input', e =>{
        e.preventDefault()

        console.log(  )
        if( !letter.test( e.data ) ) return e.target.value = e.target.value.slice( 0, e.target.value.length - 1 )
        e.target.value = e.target.value.slice( 0, 10 ).toUpperCase()
        
    } )


    element.addEventListener( 'submit', e =>{
        e.preventDefault()
        
        if( element.name.value.length < 5 ) return alert( 'minimo 5 letras' )

        setData( new FormData( element ), srcApi( `post/words/${ add ? 'add' : 'update' }?token=${ token }` ) )
        .then( ()=> ( hideElement(), LstMyWords( 'normal' ) ) )
    })
}   

export default FormWord
 