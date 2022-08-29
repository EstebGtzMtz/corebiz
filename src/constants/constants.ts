import { ICarrouselElement, IProductsResponse } from "../interfaces/interfaces";

export const carrouselImages: ICarrouselElement[] = [
{
    src:"https://wallpaperaccess.com/full/2666312.jpg",
    className: 'carrousel-item' 
},
{
    src:"https://theikhwanhafiz.com/wp-content/uploads/2022/07/106210419-1572366832669gettyimages-1137376687.jpg",
    className: 'carrousel-item' 
},
{
    src:"https://wallpaperaccess.com/full/2666386.jpg",
    className: 'carrousel-item' 
}
]


export const responsive = {
superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
},
desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
},
tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
},
mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
}
};

export const dataMock: IProductsResponse[] = [
{
    "productId": 1,
    "productName": "SAPATO FLOATER PRETO",
    "stars": 1,
    "imageUrl": "https://corebiz-test.herokuapp.com/images/product-1.png",
    "listPrice": null,
    "price": 25990,
    "installments": [
        {
            "quantity": 9,
            "value": 2887
        }
    ]
},
{
    "productId": 2,
    "productName": "SANDÁLIA LINHO BROWN",
    "stars": 4,
    "imageUrl": "https://corebiz-test.herokuapp.com/images/product-2.png",
    "listPrice": 29900,
    "price": 19900,
    "installments": [
        {
            "quantity": 4,
            "value": 4975
        }
    ]
},
{
    "productId": 3,
    "productName": "BOTA MUSTANG PRETO",
    "stars": 2,
    "imageUrl": "https://corebiz-test.herokuapp.com/images/product-3.png",
    "listPrice": 32900,
    "price": 29900,
    "installments": [
        {
            "quantity": 10,
            "value": 2990
        }
    ]
},
{
    "productId": 4,
    "productName": "CINTO SEMICROMO PRETO 40MM",
    "stars": 3,
    "imageUrl": "https://corebiz-test.herokuapp.com/images/product-4.png",
    "listPrice": null,
    "price": 7990,
    "installments": []
},
{
    "productId": 5,
    "productName": "MEIA SPORTWEAR PRETA",
    "stars": 5,
    "imageUrl": "https://corebiz-test.herokuapp.com/images/product-5.png",
    "listPrice": null,
    "price": 1400,
    "installments": []
}
]