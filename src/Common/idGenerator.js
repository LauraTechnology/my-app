


const idGenerator = () => {
    /*  viska saugosim local storage'e, vadinasi reikia eit i local storage */
    let id = parseInt(localStorage.getItem('lastId'));
    if (null === id) {
        localStorage.setItem('lastId', 1);
        return 1
    }
    id++;
    localStorage.setItem('lastId', id);
    return id;
    

}

export default idGenerator;