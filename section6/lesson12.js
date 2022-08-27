const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
   }
   const transaction = (type, { label, price,stock }) => {
    console.log(type, label, price,stock)
   }
   transaction('order', product)