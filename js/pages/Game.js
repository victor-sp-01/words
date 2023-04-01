import { Params } from "../helpers/Params.js"
import FormGameWord from "../components/FormGameWord.js"
import getDataWord from "../data/getDataWord.js"
const Game = async ()=>{

    const [ data ] = await getDataWord({ type : 'normal', id : Params(1) || false })
    const { name = 'WORD' } = data ? data : {}
    FormGameWord({ word : name }) 

}

export default Game