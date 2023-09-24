const products = [
    {
        id: '1',
        name: 'Diamond',
        price: 1000,
        category: 'Diamond Rings',
        img: 'https://i.pinimg.com/originals/7a/9a/8c/7a9a8ca999458e9f10c206a581932cac.jpg',
        stock: 25,
        description:'Descripcion del anillo'
    },
    {
        id:'2',
        name: 'Emerald', price: 1000, category: 'Emerald Rings', img: 'https://i.pinimg.com/originals/eb/77/47/eb77476b58fc87dbe58460b86e616eb7.jpg', stock: 25, description:'Descripcion del anillo'
    },
    {
        id:'3', name: 'Ruby', price: 1000, category: 'Ruby Rings', img: 'https://i.pinimg.com/originals/ff/0d/ef/ff0defe0c71ffa683c6aa11d0ef3ba63.jpg', stock: 25, description:'Descripcion del anillo'
    },
    
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === products))
        }, 500)
    })
}
export const getProductsByCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === products))
        }, 500)
    })
}