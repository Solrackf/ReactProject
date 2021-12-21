export default (estates = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...estates, action.payload];
        case 'UPDATE':
            return estates.map((estate) => estate._id === action.payload._id ? action.payload : estate);
        default:
            return estates;
    }
}