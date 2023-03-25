const createLocalStorage =(  )=>{

}

const getLocalStorage =( key, data = false )=>{
    return localStorage.getItem( key ) ? localStorage.getItem( key ) : data
}

const setLocalStorage =(  )=>{

}

export { createLocalStorage, getLocalStorage, setLocalStorage }