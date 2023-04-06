import srcApi from "../helpers/srcApi.js"
import { getData } from "../api/apiData.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

const getDataWord = async ({ type = false, id = false })=>{ 

    const [{ token = false }] = JSON.parse( getLocalStorage( 'auth', '[{}]' ) ) 
    if( type === 'normal' ){ 
        if( id ) return await getData( srcApi( `get/word/normal/${ id }?token=${ token }` ) )
        return await getData( srcApi( `get/word/normal?token=${ token }` ) )
    }

    else if( type === 'share' ){ 
        if( id ) return await getData( srcApi( `get/word/share/${ id }?token=${ token }` ) )
        return await getData( srcApi( `get/word/share?token=${ token }` ) )
    }

    else if( type === 'sharePublic' ){ 
        if( id ) return await getData( srcApi( `get/wordshare/${ id }` ) ) 
        return []
    }

    return false

}
export default getDataWord