import styleFormGameWord from "../styles/styleFormGameWord.js"
import Element from "../lib/Element.js" 
import { ModalApp } from "../modal/Modals.js"

const FormGameWord =({ word = 'WORD' })=>{
    styleFormGameWord(word)

    const modalApp = ModalApp()

    const $Container = new Element({
        div : { attributes : { class : 'div__qCTlR' } }
    })

    $Container.create()
    $Container.append({ element : modalApp })

    const $Element = new Element({
        form : { attributes : { class : 'form__sZPYW scrollbarY' }}
    })

    $Element.create()
    $Element.append({ element : $Container.element })

    const $KeyBoard = new Element({
        form : { attributes : { class : 'form__NcrJB' } }
    })

    $KeyBoard.create()
    $KeyBoard.append({ element : $Container.element })

    const Game = {
        divFocus    : '',
        btnFocus    : '',
        word        : word.toUpperCase().split(''),
        result      : [''],
        letter      : /[a-zA-ZñÑ]/,
        letters     : [ 'QWERTYUIOP'.split(''), 'ASDFGHJKLÑ'.split(''), 'ZXCVBNM'.split('') ]
    }

    const loadElement =()=>{
        $Element.element.classList = 'form__sZPYW scrollbarY'
        $Element.html(`
            <div class="div__60ACB" >
                ${
                    [ ...Array(6).keys() ].map( (index) =>{
                        return (`
                            <div class="div__0cUod${ index === 0 ? ' focus' : '' }" >
                                ${
                                    Game.word.map( () =>{
                                        return(`
                                            <button type="button" class="button__b7evp after btn-C6MIf91OSdkyo2d" value="" >
                                                <img src="./img/other/cuadrado.png" >
                                            </button>
                                        `)
                                    }).join('')
                                }

                                <button type="button" class="button__TTjeG" ></button>
                            </div>
                        `)
                    }).join('')
                }
            </div>
        `)

        const $rows = $Element.findChildrens( '.div__0cUod' )

        Game.divFocus = $rows[0]
        Game.btnFocus = $rows[0].children[0] 

        Game.btnFocus.classList.add('focus')
        Game.btnFocus.focus()

        Game.result = ['']
    }
    loadElement()

    const loadKeyBoard =()=>{
        $KeyBoard.element.classList = 'form__NcrJB'
        $KeyBoard.html(`
            <div class="div__Mp3zK" >
                <div class="div__EtPfg" >
                    <button type="button" class="button__PNnVU repeat after XKwYFCpid3Y56tb" value="Resest" ><i class="fa-solid fa-rotate-right"></i></button> 
                    <button type="submit" class="button__PNnVU submit off btn-j6NeEvoJB2RPtAV" value="Enter" ><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                
                <div class="div__THdvy" >

                    ${ Game.letters.map( ( data, index ) => { 
                        
                        return(`
                            <div class="div__Asbax" >  
                                ${ data.map( data =>{
                                    return(`
                                        <button type="button" class="button__ZXvlF after vMt6gfnj13kZWOn" value="${ data }" >
                                            <span>${ data }</span>
                                            <img src="./img/other/cuadrado.png" alt="" >
                                        </button>
                                    `)
                                }).join('') }

                                ${ index === 2 ? `<button type="button" class="button__ZXvlF Backspace after vMt6gfnj13kZWOn" value="Backspace" ><i class="fa-solid fa-delete-left"></i></button>` : '' }
                            </div> 
                        `)

                    } ).join('') } 
                    
                </div>
                    
            </div>
        `)
    }
    loadKeyBoard()
    
    $Element.element.addEventListener( 'click', ({target})=>{
        if( target.classList.contains( 'btn-C6MIf91OSdkyo2d' ) ){
            Game.btnFocus.classList.remove('focus')
            Game.btnFocus = target
            return Game.btnFocus.classList.add('focus')
        }

        Game.btnFocus.focus()

    })

    $Element.element.addEventListener( 'keydown', (e)=>{
        e.preventDefault()  
        handleKeydown( e.key )
    })

    $KeyBoard.element.addEventListener( 'click', ({target})=>{
        Game.btnFocus.focus()

        if( target.classList.contains( 'vMt6gfnj13kZWOn' ) ){
            return handleKeydown( target.value )
        } 

        if( target.classList.contains( 'XKwYFCpid3Y56tb' ) ){
            loadElement()
            return loadKeyBoard()
        }
          
    })

    $KeyBoard.element.addEventListener( 'submit', (e)=>{
        e.preventDefault()
        handleSubmit()
    })

    const handleKeydown =( key = false )=>{
        const letter = key[0].toUpperCase() 
        if( key === 'Enter' ){
            return handleSubmit()
        }

        if( key === 'Backspace' ){  
            $KeyBoard.findChildren( '.button__PNnVU.btn-j6NeEvoJB2RPtAV' ).classList.add( 'off' )
            Game.btnFocus.value = ''
            Game.btnFocus.innerHTML = (`
                <img src="./img/other/cuadrado.png" > 
            `)

            if( Game.btnFocus.previousElementSibling ){
                Game.btnFocus.classList.remove('focus')
                Game.btnFocus = Game.btnFocus.previousElementSibling
                Game.btnFocus.classList.add('focus')
                Game.btnFocus.innerHTML = (`
                    <img src="./img/other/cuadrado.png" > 
                `)
                return Game.btnFocus.focus()
            }
            return
        }

        if( !Game.letter.test( letter ) ) return 
        
        if( Game.btnFocus.classList.contains( 'btn-C6MIf91OSdkyo2d' ) ){
            Game.btnFocus.innerHTML = (`
                <img src="./img/other/cuadrado.png" >
                <span>${ letter }</span>
            `)
            Game.btnFocus.value = letter
        }   
 
        if( Game.btnFocus.nextElementSibling ) {
            Game.btnFocus.classList.remove('focus')
            Game.btnFocus = Game.btnFocus.nextElementSibling
            Game.btnFocus.classList.add('focus')
            Game.btnFocus.focus()
        } else { 
            Game.btnFocus.classList.remove('focus')
        }

        Game.result = []
        const buttons = Game.divFocus.querySelectorAll( '.button__b7evp' )

        for( const button of buttons )
            Game.result.push( button.value )
        
        if( Game.result.includes('') ) return

        $KeyBoard.findChildren( '.button__PNnVU.btn-j6NeEvoJB2RPtAV' ).classList.remove( 'off' )
    }
 
    const handleSubmit =()=>{

        if( $Element.findChildren( '.div__0cUod.solution' ) ) return
        if( Game.result.includes('') ) return
 
        const buttons = Game.divFocus.querySelectorAll( '.button__b7evp' )
        for( const [ index, button] of buttons.entries() ){
            if( button.value === Game.word[ index ] )
                button.classList.add( 'correct' )
            else if( Game.word.includes( button.value ) )
                button.classList.add( 'midle' )
            else button.classList.add( 'bad' )
        }
        
        if( JSON.stringify( Game.result ) === JSON.stringify( Game.word ) ){
            $Element.element.classList.add( 'off' )
            return $KeyBoard.element.classList.add( 'off' )
        } 

        Game.divFocus.classList.remove('focus')
        if( Game.divFocus.nextElementSibling ){
            
            Game.divFocus = Game.divFocus.nextElementSibling
            Game.divFocus.classList.add('focus')

            Game.btnFocus = Game.divFocus.children[0] 

            Game.btnFocus.classList.add('focus')
            Game.btnFocus.focus()

            $KeyBoard.findChildren( '.button__PNnVU.btn-j6NeEvoJB2RPtAV' ).classList.add( 'off' )
        } else {
            $Element.element.classList.add( 'off' )
            $KeyBoard.element.classList.add( 'off' )

            $Element.findChildren( '.div__60ACB' ).insertAdjacentHTML( 'afterbegin', `
                <div class="div__0cUod solution" >
                    ${
                        Game.word.map( (data) =>{
                            return(`
                                <button type="button" class="button__b7evp">
                                    <img src="./img/other/cuadrado.png" >
                                    <span>${ data }</span>
                                </button>
                            `)
                        }).join('')
                    } 
                </div>
            ` ) 
        }
    }

}

export default FormGameWord

