let productsContainer = document.getElementById('products-container')
let postsContainer = document.getElementById('posts-container')

async function getProducts () {
    try{
    let allProducts = await fetch ('https://dummyjson.com/products')
    
    let translatedProducts = await allProducts.json();
    // console.log(translatedProducts)

    let actualProducts = translatedProducts.products;
    return actualProducts;
    } catch (error) {
        console.log(error)
    }
}

async function renderProducts() {
    let myProducts = await getProducts();
    console.log(myProducts)
    myProducts.forEach((product) => {
        let productElement = document.createElement('div'); 
        productElement.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.brand}</p>
        <p>${product.description}</p>
        <p>${product.price}</p>
        `
        productElement.style.border = "3px solid pink"
        productElement.style.color = "lavenderBlush"
        productElement.style.backgroundColor = "black"
        productElement.style.margin = "2%"
        productElement.style.padding = "2%"
        
        productsContainer.appendChild(productElement)
    })

}

async function getPosts () {
    try {
        let allPosts = await fetch('https://dummyjson.com/posts')

        let translatedPosts = await allPosts.json();
        console.log(translatedPosts)

        let actualPosts = translatedPosts.posts;
        return actualPosts;
    }   catch (error) {
        console.log(error)
    }
}

async function renderPosts () {
    let myPosts = await getPosts()
    console.log(myPosts);
    myPosts.forEach((post) => {
        let postElement = document.createElement('div')
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `
        postElement.style.backgroundColor = "#4C4E52"
        postElement.style.color = "lightpink"
        postElement.style.border = "3px dashed lightblue"
        postElement.style.margin = "2%"
        postElement.style.padding = "2%"

        postsContainer.appendChild(postElement)
    }) 
}

renderProducts();
renderPosts();


