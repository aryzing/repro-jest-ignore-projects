import add from 'lodash/add'

export const barTwo = () => {
    console.log('bar two')
    console.log("Number ten: ", add(3, 7))
    return 'bar2return';
}
