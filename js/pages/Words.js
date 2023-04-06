import ListWords from "../components/ListWords.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"
import FormWord from "../components/FormWord.js"

const Words =()=>{

    const classID = getLocalStorage( 'Time', Date.now() )

    document.getElementById( 'main' ).innerHTML = (`
        <div class="div__ZfjeC scrollbarY" >
            <div class="div__vkNWh div-${ classID }" >
                <div class="div__OkY6P" >
                    <span class="span__j6i6j" ></span>
                </div>
            </div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    `) 

    document.querySelector( `.div__vkNWh.div-${ classID }` ).addEventListener( 'click', e =>{
        if( e.target.classList.contains( 'd5NP6IpIG4fEQv2' ) ){
            FormWord( {
                type : false,
                id   : e.target.id
            } )
        }
    })

    ListWords()

}
export default Words