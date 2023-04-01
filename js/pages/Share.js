import { Params } from "../helpers/Params.js"
import FormGameWord from "../components/FormGameWord.js"
import getDataWord from "../data/getDataWord.js"
const Share = async ()=>{ 

    const [ data ] = await getDataWord({ type : 'sharePublic', id : Params(1) || false })
    const { name = 'WORD' } = data ? data : {}
    FormGameWord({ word : name })

}

export default Share