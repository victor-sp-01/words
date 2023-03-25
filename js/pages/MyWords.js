import ModalApp from "../modal/ModalApp.js"
import LstMyWords from "../components/LstMyWords.js"
import FormWord from "../components/FormWord.js"

const MyWords =()=>{
    const element = ModalApp()
    element.innerHTML = `
        <div class="div__MtTOI" >
            <div class="div__9lvoh scrollbarY" ></div>
            <footer class="footer__aaLcf" >
                <button class="button__nysOo" id="button__9K7Brkm0X3" ><i class="fa-solid fa-plus"></i></button>
            </footer>
        </div>
    `

    element.querySelector( '.div__9lvoh' ).addEventListener( 'click', ( {target} )=>{
        if( target.classList.contains( '7fSCLwI1VNWe0dLYLQKKe81NU' ) )
            FormWord( false, JSON.parse( target.dataset.id ) ) 
    })

    document.querySelector( '#button__9K7Brkm0X3' ).addEventListener( 'click', FormWord )

    LstMyWords( 'normal' )
}

export default MyWords