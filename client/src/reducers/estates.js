export default (estates = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...estates, action.payload];
        case 'UPDATE':
            return estates.map((estate) => estate._id === action.payload._id ? action.payload : estate);
        case 'DELETE':
            return estates.filter((estate) => estate._id !== action.payload);
        default:
            return estates;
    }
}