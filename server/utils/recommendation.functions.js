const formatData = data => {
    let formatted = [];

    for (const product of data) {
        let tmpObj = {};
        tmpObj = {
            id: product.id,
            name: product.name.toLowerCase(),
            category: product.categories[0].name.toLowerCase()
        };
          
        formatted.push(tmpObj);
    }

    return formatted;

}


module.exports = { formatData };