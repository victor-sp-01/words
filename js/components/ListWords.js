import { Params } from "../helpers/Params.js"
import { getLocalStorage } from "../api/apiLocalStorage.js"

import { CreateHTML } from "../lib/Elements.js"
import Components from "../lib/Components.js"
import getDataWord from "../data/getDataWord.js"

const ListWords = async ()=>{ 

    const type      = Params(1) || 'normal'
    const classID   = getLocalStorage( 'Time', Date.now() )
    const data      = []
    

    const $Element = new Components({
        classID : `.div__vkNWh.div-${ classID }`,
        data    : data,
        template: (props)=>{
            const Element = document.createElement( 'div' )
            
            if( props.length === 0 ){
                return Element.innerHTML = (`
                    <div class="div__rfyDj scrollbarY" >
                        <div class="div__eq3zb" >
                            <h3>La Lista Esta Vacia</h3>
                            <img src="./img/icons/no-data.png" alt="">
                        </div>
                    </div>
                `)
            }

            return Element.innerHTML = props.map( data =>{
                return CreateHTML({
                    elements : {
                        '.button__gOaRy h3' : { textContent : data.name },
                        '.a__RPgtK span' : { textContent : 'game' }
                    },
                    html : (`
                        <div class="div__U7AFF" >
                            <button class="button__gOaRy after d5NP6IpIG4fEQv2" id="${ data.id }" >
                                <h3></h3>
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <span class="span__QIyQG" ></span>
                            <a href="#${ type === 'normal' ? 'game' : type }/${ data.id }" class="a__RPgtK" >
                                <span></span>
                                <i class="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    `)
                })
            }).join('')
        }
    })
     
    const dataAsync = await getDataWord({ type : type })
    $Element.data = dataAsync
    $Element.render()

}

export default ListWords