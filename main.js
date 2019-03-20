const products = [
    {
        title: 'product1',
        description: 'blah blah blah', 
        imageUrl: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: '4" X 4"', 
        weight: '8 oz', 
        price1: '$1.99', 
        price2: '$1.49', 
        price3: '$0.99', 
        validUntil: '04/02/2016'

    }, 
    {
        title: 'product2',
        description: 'blah blah blah', 
        imageUrl: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: '4" X 4"', 
        weight: '8 oz', 
        price1: '$1.99', 
        price2: '$1.49', 
        price3: '$0.99', 
        validUntil: '04/02/2016'

    },
    {
        title: 'product3',
        description: 'blah blah blah', 
        imageUrl: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: '4" X 4"', 
        weight: '8 oz', 
        price1: '$1.99', 
        price2: '$1.49', 
        price3: '$0.99', 
        validUntil: '04/02/2016'

    }, 
    {
        title: 'product4',
        description: 'blah blah blah', 
        imageUrl: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: '4" X 4"', 
        weight: '8 oz', 
        price1: '$1.99', 
        price2: '$1.49', 
        price3: '$0.99', 
        validUntil: '04/02/2016'

    }, 
    {
        title: 'product5',
        description: 'blah blah blah', 
        imageUrl: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size: '4" X 4"', 
        weight: '8 oz', 
        price1: '$1.99', 
        price2: '$1.49', 
        price3: '$0.99', 
        validUntil: '04/02/2016'

    }
];

//console.log('products', products)

const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
};

const cardBuilder = (array) => {
    let cardToBuild = '';
    array.forEach((card)=> {
        cardToBuild += `<h3>${card.title}</h3>`;
    });
    printToDom('cards', cardToBuild);
};

const init = () => {
    cardBuilder(products);
};

init();