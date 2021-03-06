
function FieldAnimal({ fieldAnimal, field, goHome }) {


    if (field === fieldAnimal.field && 'cow' === fieldAnimal.animal) {
        return (
            <div className="cow">
                <h2>{fieldAnimal.id}</h2>
                <input type="text"/>
                <button>Add</button>
                <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep">
                <input type="text"/>
                <button>Add</button>
                <h2>{fieldAnimal.id}</h2>
                <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'horse' === fieldAnimal.animal) {
        return (
            <div className="horse">
                <input type="text"/>
                <button>Add</button>
                <h2>{fieldAnimal.id}</h2>
                <button onClick={() => goHome(fieldAnimal.id)}>Go home</button>
            </div>
        );
    }
    else {
        return null;
    }

}

export default FieldAnimal;