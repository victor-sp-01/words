import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const LstMyWords = async ( type = 'normal' )=>{

    const [{ token = false }] =  JSON.parse( getLocalStorage( 'auth', '[{}]' ) )

    const Data = {
        data  : [ ],
        token : token
    }
 
    if( type === 'normal' ) Data.data = await getData( srcApi( `get/words/normal?token=${ Data.token }` ) )
    else if( type === 'share' ) Data.data = await getData( srcApi( `get/words/share?token=${ Data.token }` ) )

    document.querySelector( '.div__9lvoh' ).innerHTML = Data.data.length === 0 ?
    `<div class="div__EzRj3" ><h3 class="h3__a0DoH" >LISTA VACIA</h3></div>`
    : 
    `<div class="div__7KR3t" > ${ Data.data.map( data => ` <button class="button_CwWO5 after 7fSCLwI1VNWe0dLYLQKKe81NU" data-id='${ JSON.stringify( data ) }' >${ data.word }</button> ` ).join('') }</div>`
}

export default LstMyWords
 