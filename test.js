const { type } = require("os")

let Product = {
    items: [
        {
          item: {
            // title: "Hello",
            // price: 23
          },
          quantity: {
            type: Number,
            default: 1,
            min: 1
          }
        },
        
      ],
} 

let user = {
    type: String,
    p: [Product]
}

Product.items.forEach(item => {
    user.p = item.item;
})

console.log(user);