import {reactive} from 'vue';

export const store = reactive({

    // ARRAYS DATA
    products: [
        {
            id: 1,
            name: 'Fall Limited Edition Sneakers',
            description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            brand: 'sneaker company',
            price: 250.00,
            discount: 50,
            finalPrice: undefined, 
            images: [
                'image-product-1.jpg',
                'image-product-2.jpg',
                'image-product-3.jpg',
                'image-product-4.jpg',
            ],
            thumbnail: [
                'image-product-1-thumbnail.jpg',
                'image-product-2-thumbnail.jpg',
                'image-product-3-thumbnail.jpg',
                'image-product-4-thumbnail.jpg',
            ]
        },
    ],

    // VARIABLES DATA
    imageSelected: 0,
    quantityAdded: 0,
    cart: [],
    cartOpen: false,
    totalProductPrice: undefined
})