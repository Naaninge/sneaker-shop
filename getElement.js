
const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) {
        return element
    } else {
        throw new Error(`${selection} not found in DOM`)
    }

};

export default getElement