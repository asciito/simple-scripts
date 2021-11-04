function priceCheck(products, productPrices, productSold, soldPrice) {
    let errors = productSold.reduce((prev, curr, idx) => {
        let p_idx = products.indexOf(curr);

        if (products.includes(curr) && productPrices[p_idx] !== soldPrice[idx]) {
            return prev + 1;
        }

        return prev;
    }, 0);

    return errors;
}

products = {
    'milk':     1.4,
    'eggs':     1.20,
    'apple':    2.97,
    'orange':   10.99,
};

productSold = [ 'eggs', 'orange', 'eggs', 'milk', 'milk']
soldPrice   = [ 2.97, 10.99, 1.22, 1.2, 1.4 ];

console.log(priceCheck(
    Object.keys(products),
    Object.values(products),
    productSold,
    soldPrice
));
