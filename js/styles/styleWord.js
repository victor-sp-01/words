const styleWord =( data = 'letra' )=>{
    return (`
        .div__7eLBg{ 
            margin: auto; 
            width: min(100%, calc( 80px * ${ data.length } )) ;
        
            display: grid; 
            grid-template-columns: 1fr;
            padding: 15px; gap: 15px;
        }

        .form__S0cq2{  
            display: grid;
            grid-template-columns: repeat(${ data.length }, 1fr );
            gap: inherit; 
        
        }   .form__S0cq2.complete{ grid-template-columns: repeat(${ data.length + 1 }, 1fr) }
            .form__S0cq2.complete .button__E16S6{ display: block }
            .form__S0cq2.solution .button__pZYKq{ opacity: 1; }
            .form__S0cq2.focus .button__pZYKq{ opacity: 1; pointer-events: initial; }

        @media only screen and (max-width: 600px)  {
            .div__7eLBg{ padding: 10px; gap: 10px } 
        }
    `)
}

export default styleWord