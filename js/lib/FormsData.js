import Element from "./Element.js"

const FormsData =( datas = {} )=>{
    const Form = document.createElement( 'form' )

    for ( const data in datas ){
        const $Element = new Element({
            textarea : { attributes : { name:data }, contents : { textContent : `${ datas[ data ] }`.trim() }}
        })

        $Element.create()
        $Element.append({ element : Form })
    } 
         
    return Form

}

export default FormsData