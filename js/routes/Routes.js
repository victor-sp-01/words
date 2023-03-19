import { Params, changeParam } from "../helpers/Params.js"
import Login from "../pages/Login.js"
import Register from "../pages/Register.js"

import MyWords from "../pages/MyWords.js"
import MyWordsShare from "../pages/MyWordsShare.js"

import Share from "../pages/Share.js"
import Setting from "../pages/Setting.js"
import PageNotFound from "../pages/PageNotFound.js"

import { getLocalStorage } from "../api/apiLocalStorage.js"

const Routes =()=>{
    
    const validate  =( page )=>  page === ruta
    const rPrivate  =( page )=> auth ? page() : ( changeParam( '#login' ), Login()) 
    const rPublic   =( page )=> auth ? ( changeParam( '#' )) : page()

    const auth = JSON.parse( getLocalStorage( 'auth' ) )
    const [ ruta = false, ruta2 = false ] = Params()

    if( ruta === false ) return 
    else if( validate( 'login' ) ) return rPublic( Login ) 
    else if( validate( 'register' ) ) return rPublic( Register ) 
    else if( validate( 'share' ) ) return Share()
    else if( validate( 'setting' ) ) return rPrivate( Setting ) 
    else if( validate( 'list' ) ) return rPrivate( ruta2 === 'share' ? MyWordsShare : MyWords ) 

    else return PageNotFound()

}

export default Routes