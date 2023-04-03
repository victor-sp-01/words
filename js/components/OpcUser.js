import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import { ModalOption } from "../modal/Modals.js"

const OpcUser =async()=>{ 
    const [{ auth = false, token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) )
    const [ modalElement ] = ModalOption(`
    ${ auth ? `
            <a href="#setting" class="a__C854s" >
                <i class="fa-solid fa-gear"></i>
                <span class="span__ZXLa6" >configuracion</span>
            </a> 
    ` : '' } 

        <div class="div__AG3Eu" >
            <a href="#user/${ auth.id }" class="a__TMrnX" > <span class="span__ZXLa6" > ${ auth.email } </span> </a>
            <button type="button" class="button__Tdzkh after" id="button__4UsXseIsqb" > <i class="fa-solid fa-right-from-bracket"></i> </button>
        </div>
    `)

    modalElement.addEventListener( 'click', e =>{
        if( e.target.id === 'button__4UsXseIsqb' ) {
            return getData( srcApi( `token/disable?token=${ token }` ) )
                .then( resp => resp && ( localStorage.clear(), location.hash = '#login' ) )
        }
    } )

    modalElement.addEventListener( 'submit', e => e.preventDefault() )
 
}

export default OpcUser
 