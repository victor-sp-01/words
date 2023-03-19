import ModalApp from "../modal/ModalApp.js"
import LstMyWords from "../components/LstMyWords.js"
import FormWordShare from "../components/FormWordShare.js" 

const MyWordsShare =()=>{
    const element = ModalApp()
    element.innerHTML = `
        <div class="div__MtTOI" >
            <div class="div__9lvoh scrollbarY" ></div> 
        </div>
    `

    element.querySelector( '.div__9lvoh' ).addEventListener( 'click', ( {target} )=>{
        if( target.classList.contains( '7fSCLwI1VNWe0dLYLQKKe81NU' ) ) return FormWordShare( JSON.parse( target.dataset.id ) ) 
    }) 

    LstMyWords( 'share' )
}

export default MyWordsShare 