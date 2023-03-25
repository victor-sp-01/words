import ModalForm from "../modal/ModalForm.js"

const FormCopyShare = ( id = '' ) =>{ 

    const link = `${ location.origin + location.pathname }#share/${ id }`

    const [ element ] = ModalForm( 'form', { class: 'form__SVnn0 scrollbarY', autocomplete: 'off'}, ` 
        <div class="div__VIXD3" >
            <input type="text" class="input__lQJ6N" name="idShare" value="${ link }" readonly>    
            <div class="div__o34UX" >
                <a href="#share/${ id }" class="a__GA9L7" ><i class="fa-solid fa-globe"></i></a> 
            </div>
            <button type="button" class="button__fKiPB" > <i class="fa-solid fa-copy"></i> </button>
        </div>
    ` ) 

    element.querySelector( '.button__fKiPB' ).addEventListener( 'click', e => {
        e.preventDefault()
        element.idShare.select();
        document.execCommand("copy");  
    } )

    element.addEventListener( 'submit', e => e.preventDefault())
}

export default FormCopyShare


//bit.ly/3n4Wo4d
//<a href="https://wa.me/?text=${ link }"  target="_blank" class="a__GA9L7" ><i class="fa-brands fa-whatsapp"></i></a>
