import srcApi from "../helpers/srcApi.js"
import { setData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import FormsData from "../lib/FormsData.js"

const setDataWord = async ({ type = false, data = {} })=>{
    
    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 
    const formData = new FormData( FormsData( data ))

    if( !type ) return false
    if( !token ) return false 
    if( !['add', 'update', 'delete', 'share', 'deleteShare' ].includes( type ) ) return false

    if( type === 'deleteShare' ){
        return await setData( formData , srcApi( `post/wordshare/delete?token=${ token }` ) ) 
    }

    return await setData( formData , srcApi( `post/word/${ type }?token=${ token }` ) ) 
 
}
export default setDataWord