import styleWord from "../styles/styleWord.js"
import CreateElement from "../helpers/CreateElement.js" 

const Words =( ...datas )=>{ 

    const [ element = false, data = 'PALABRA' ] = datas 
    const word = data.split('')

    const Values = {
        letter  : /[a-zA-ZñÑ]/,
        letters : [ 'QWERTYUIOP'.split(''), 'ASDFGHJKLÑ'.split(''), 'ZXCVBNM'.split('') ], 
    }

    const Game = {
        form    : false,
        button  :false,
    }

    const HTML = {    
        button : `
            <button type="button" class="button__pZYKq kWuNft9VkLK8UPwFMyYG3jxXE" >
                <span class="span__ooE8r" ></span>
                <img src="./img/other/cuadrado.png" alt="" class="img__nkU1t" >
            </button>
        `
    }
    
    const formSolution = CreateElement( 'form', { class : 'form__S0cq2 solution' },`
                            ${ word.map( data => { 
                                return(`
                                    <button type="button" class="button__pZYKq solution" >
                                        <span class="span__ooE8r" >${ data }</span>
                                        <img src="./img/other/cuadrado.png" alt="" class="img__nkU1t" >
                                    </button>
                                `)
                            }).join('') } 
                        ` )

    if( element === false ) return
    document.getElementById( 'styles' ).innerHTML = styleWord( word )
    element.innerHTML = `
        <div class="div__BSZNf" >  
            <div class="div__kVrC9 scrollbarY" >
                <div class="div__7eLBg" >
                    ${ [ ...Array(6).keys() ].map( () => { return(` <form class='form__S0cq2' autocomplete='off' ></form> `) }).join('') }
                </div>
            </div>

            <footer class="footer__o2wjh" >
                <form class="form__mrshi" >

                    <div class="div__EtPfg" >
                        <button type="button" class="button__PNnVU repeat after QXkPpW36xP4OGMy" value="Enter" ><i class="fa-solid fa-rotate-right"></i></button> 
                        <button type="submit" class="button__PNnVU submit after" value="Enter" ><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    
                    <div class="div__THdvy" >

                        ${ Values.letters.map( ( data, index ) => { 
                            return(`
                                <div class="div__Asbax" >  
                                    ${ data.map( data =>{
                                        return(`
                                            <button type="button" class="button__ZXvlF 51ebENmlSYxGylCWDWTGuoq6k" value="${ data }" >
                                                <span class="span__Z8Ug6" >${ data }</span>
                                                <img src="./img/other/cuadrado.png" alt="" class="img__Q0dIY" >
                                            </button>
                                        `)
                                    }).join('') }

                                    ${ index === 2 ? `<button type="button" class="button__y1oUA after 51ebENmlSYxGylCWDWTGuoq6k" value="Backspace" ><i class="fa-solid fa-delete-left"></i></button>` : '' }
                                </div> 
                            `)
                        } ).join('') } 
                        
                    </div>
                </form>
            </footer>
        </div>  
    `

    //elements
    const forms = element.querySelectorAll( '.form__S0cq2' )
    const keyboard = element.querySelector( '.form__mrshi' ) 

    //funciones

    const handleKeydown =( data )=>{  
        
        const getLetter = localStorage.getItem( 'setLetter' )

        if( getLetter && data === 'Enter' ) return handleSubmit()
        else if( data === 'Backspace' ){

            const previousElement = Game.button.previousElementSibling
            if( Game.button.value === '' ) if( previousElement ) {
                Game.button.classList.remove('focus')
                Game.button = previousElement
                Game.button.classList.add('focus')
            } 

            Game.button.value = ''
            Game.button.children[0].textContent = ''
            keyboard.classList.remove( 'complete' )
            localStorage.removeItem( 'setLetter' )

            return
        }

        else if( Values.letter.test( data ) && data.length === 1 ){
            if( !Game.button.classList.contains( 'kWuNft9VkLK8UPwFMyYG3jxXE' ) ) return
            Game.button.classList.remove('focus')
            Game.button.value = data.toUpperCase() 

            Game.button.innerHTML = `
                <span class="span__ooE8r" >${ data.toUpperCase() }</span>
                <img src="./img/other/cuadrado.png" alt="" class="img__nkU1t" >
            `
            
            if( Game.button.nextElementSibling ) { 
                Game.button = Game.button.nextElementSibling
                if( Game.button.classList.contains( 'kWuNft9VkLK8UPwFMyYG3jxXE' ) ) Game.button.classList.add('focus')
            } 

            const dataButton = []
            const buttons = Game.form.querySelectorAll( '.button__pZYKq.kWuNft9VkLK8UPwFMyYG3jxXE' )
            for( const button of buttons ) dataButton.push( button.value )
            if( dataButton.includes( '' ) ) return 
            keyboard.classList.add( 'complete' )
            localStorage.setItem( 'setLetter', JSON.stringify( dataButton ) )
            return
        }
    }

    const handleSubmit =()=>{
        const getLetter = JSON.parse( localStorage.getItem( 'setLetter' ) )
        localStorage.removeItem( 'setLetter' )

        if( !getLetter ) return
        if( getLetter.includes( '' ) ) return

        const buttons = Game.form.querySelectorAll( '.button__pZYKq.kWuNft9VkLK8UPwFMyYG3jxXE' )

        for( const [ index, button] of buttons.entries() ) { 
            if( button.value === word[ index ] ) button.classList.add( 'correct' )
            else if( word.includes( button.value ) ) button.classList.add( 'content' )
            else button.classList.add( 'invalid' )
        }

        keyboard.classList.remove( 'complete' )

        if( JSON.stringify( getLetter ) === JSON.stringify( word ) ) 
            return (Game.form.classList = 'form__S0cq2 solution', keyboard.classList = 'form__mrshi finish')

        Game.form.classList = 'form__S0cq2'
        
        if( Game.form.nextElementSibling ) {
            Game.form = Game.form.nextElementSibling
            Game.form.classList.add('focus')

            Game.button = Game.form.children[0]
            Game.button.classList.add('focus')
            Game.button.focus()
        } else {
            keyboard.classList = 'form__mrshi finish'
            element.querySelector('.div__7eLBg').prepend( formSolution )
        }
    }

    const startGame =( events = true )=>{
        for ( const [ index, form ] of forms.entries() ) {

            if( events ){

                form.addEventListener( 'keydown', e => {
                    e.preventDefault()
                    handleKeydown( e.key )
                } )
        
                form.addEventListener( 'submit', e => {
                    e.preventDefault()
                    handleSubmit()
                } )
        
                form.addEventListener( 'click', ({ target }) => {
                    if( target.classList.contains( 'kWuNft9VkLK8UPwFMyYG3jxXE' ) ){
                        Game.button.classList.remove('focus')
                        Game.button = target
                        Game.button.classList.add('focus') 
                    }
                } )
 
            }
            
            form.classList = index === 0 ? 'form__S0cq2 focus' : 'form__S0cq2'
            form.innerHTML = `
                ${ [ ...Array( word.length ).keys() ].map( () => HTML.button ).join('') } 
                <button type="submit" class="button__E16S6 wP2ppyelNczZV9Z5SOAdc0lSY" ><i class="fa-solid fa-check"></i></button>
            `
        } 

        Game.form   = forms[0]
        Game.button = forms[0].children[0]

        Game.button.focus()
        Game.button.classList.add('focus')

        keyboard.classList = 'form__mrshi'    
    };  startGame( true )


    //eventos

    keyboard.addEventListener( 'click', ( { target } )=>{
        if( target.classList.contains( '51ebENmlSYxGylCWDWTGuoq6k' ) ){
            handleKeydown( target.value ) 
        }

        else if( target.classList.contains( 'QXkPpW36xP4OGMy' ) ){
 
            if( document.body.contains( formSolution ) ) 
                formSolution.parentElement.removeChild( formSolution )

            startGame( false )
        }
    })

    keyboard.addEventListener( 'submit', ( e )=> {
        e.preventDefault()
        handleSubmit()
    } )

    element.addEventListener( 'click', () => Game.button.focus() )
}

export default Words