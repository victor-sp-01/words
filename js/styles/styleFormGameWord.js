const styleFormGameWord =(data)=>{
    document.getElementById( 'styles' ).innerHTML += (`
        .div__60ACB{
            width: min( 100%, calc( ${ data.length } * 70px ) ); 
        }

        .div__0cUod{
            grid-template-columns: repeat(${ data.length }, 1fr);
        }
    `)
}

export default styleFormGameWord