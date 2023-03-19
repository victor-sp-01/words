import srcApi from "../helpers/srcApi.js"
import { Params } from "../helpers/Params.js"
import { getData } from "../api/apiData.js"
import ModalApp from "../modal/ModalApp.js"
import Words from "./Words.js"

const Share =async()=>{
    const element = ModalApp()

    const params = Params(1) 
    const [ { word } = false ] = await getData( srcApi( `get/share/${ params }` ) )
    Words( element, word )
}

export default Share