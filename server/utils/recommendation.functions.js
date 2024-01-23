const formatData = data => {
    let formatted = [];

    for (const product of data) {
        let tmpObj = {};

        let content = product.name.toLowerCase() + " " + product.categories[0].name.toLowerCase();

        tmpObj = {
            id: product.id,
            content,
        };
          
        formatted.push(tmpObj);
    }

    return formatted;

}

const getRatingForAction = (action) => {
    switch (action) {
        case 'click':
            return 1;
        case 'cart':
            return 3;
        case 'payment':
            return 5;
        default:
            return 0;
    }
};


module.exports = { formatData,  getRatingForAction };