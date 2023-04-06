import { Params } from "../helpers/Params.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import MessageLogin from "../pages/MessageLogin.js"

import Login from "../pages/Login.js"
import Register from "../pages/Register.js"

import Words from "../pages/Words.js"   
import WordsShare from "../pages/WordsShare.js"
import Game from "../pages/Game.js"

import Share from "../pages/Share.js"
import Setting from "../pages/Setting.js"
import PageNotFound from "../pages/PageNotFound.js"

const Routes =()=>{
    const validate  =( page )=>  page === ruta
    const rPrivate  =( page )=> auth ? page() : location.hash = '#login'  
    const rPublic   =( page )=> auth ? location.hash = '#' : page() 

    const auth = JSON.parse( getLocalStorage( 'auth' ) )

    const params = Params()
    const [ ruta = false, ruta2 = false, ruta3 = false ] = params
 
    if( ruta === false ) return auth ? Words() : MessageLogin()
    else if( validate( 'login' ) ) return rPublic( Login ) 
    else if( validate( 'register' ) ) return rPublic( Register ) 
    else if( validate( 'share' ) ) return Share()
    else if( validate( 'game' ) ) return rPrivate( Game ) 

    else if( validate( 'setting' ) ) return rPrivate( Setting )
    else if( validate( 'list' ) ) return rPrivate(()=>{

        if( params.length === 2 ){
            if( ruta2 === 'share' ) return WordsShare() 
        } 
        
    }  
) 
    else return PageNotFound()

}

export default Routes