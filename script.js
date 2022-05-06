const products = document.querySelector('.pro-container')
window.onload = arrivalProduct
async function arrivalProduct(){
    const basis = './json/product.json'
    try{
        const unknownData = await fetch(basis)
        const clearData = await unknownData.json()
        for(let i=0; i<clearData.length;i++){
            products.innerHTML += `
            <div class="pro">
                    <img src="${clearData[i].image}" alt="">
                    <div class="for-product">
                    <div class="pro-tools">
                    <i class="fas fa-filter"></i>
                    <i class="fas fa-share-alt"></i>
                    <i class="far fa-heart"></i>
                    </div>
                    </div>
                    
                    <div class="pro-info">
                        <span>${clearData[i].span}</span>
                        <h5>${clearData[i].h5}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${clearData[i].h4}</h4>
                </div>
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </div>`
        }
    }
    catch(e){
        alert('Error Found:404')
    }
}