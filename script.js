// src="img/image-product-1-thumbnail.jpg"
// src="img/image-product-2-thumbnail.jpg"
// src="img/image-product-3-thumbnail.jpg"
//  src="img/image-product-4-thumbnail.jpg"

const img_cart = document.createElement('img')
img_cart.src = 'img/image-product-1-thumbnail.jpg'
img_cart.className='img-fluid'
img_cart.style.height = '50px'
img_cart.style.width = '50px'
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const amount = document.getElementById('amount')
const usuario =document.querySelector('.usuario')
const imagem1 = document.querySelector('.change_img1')
const imagem2 = document.querySelector('.change_img2')
const imagem3 = document.querySelector('.change_img3')
const imagem4 = document.querySelector('.change_img4')
const cartEmpty = document.getElementById('cartEmpty')
const img_change = document.querySelector('.imagem_mudar')
const cart = document.getElementById('cart')
const btn = document.querySelector('.btnCart')
const addToCart = document.querySelector('.addToCart')
const divFlex= document.createElement('div')
const Ondelete = document.createElement('img')
const submit = document.createElement('button')
const counter = document.querySelector('.counter')
Ondelete.src = './img/icon-delete.svg'
Ondelete.style.cursor = 'pointer'
Ondelete.style.marginLeft='10px'
divFlex.style.display = 'flex'
divFlex.style.alignItems = 'center'
divFlex.style.justifyContent = 'start'
divFlex.style.marginBottom = '10px'

const produto = {
    price: '125.00',
    nome: "Fall Limited Edition Sneakers",
    id: '1'
}
const data = {
    mainImage1: "./img/image-product-1.jpg",

    mainImage2: "./img/image-product-2.jpg",

    mainImage3: "./img/image-product-3.jpg",

    mainImage4: "./img/image-product-4.jpg"

};

usuario.addEventListener('mouseenter', ()=>{
    usuario.style.border = '1px solid hsl(26, 100%, 55%)'
    usuario.style.borderRadius = '37px'
})

usuario.addEventListener('mouseleave', ()=>{
    usuario.style.border = ''

})


let cont = 0

plus.addEventListener('click',()=>{
    cont += 1
    amount.innerHTML = `${cont}`
    counter.innerHTML = `${cont}`
    return cont
})

minus.addEventListener('click',() =>{
    if(cont>=1){
        cont-=1
        amount.innerHTML = `${cont}`
        counter.innerHTML = `${cont}`
    }
    else{
        amount.innerHTML ='0'
    }
    return cont
})
btn.addEventListener('click',()=>{
        if(cart.style.opacity === '0'){
            cart.style.opacity = '1'
        }else{
            cart.style.opacity = '0'
        }
        
    })


const p = document.createElement('p')
p.style.marginBottom = '0'
p.style.marginLeft = '15px'
const p2= document.createElement('p')
submit.style.width = '100%'
submit.style.border = 'none'
submit.style.backgroundColor = 'hsl(26, 100%, 55%)'
submit.style.height = '45px'
submit.style.color = 'white'
submit.style.borderRadius = '9px'
submit.style.transition = 'all ease-in-out 0.35s'
submit.addEventListener('mouseenter',()=>{
    submit.style.opacity = '0.5'
})
submit.addEventListener('mouseleave',()=>{
    submit.style.opacity = '1'
})
submit.innerHTML = 'Checkout'
addToCart.addEventListener('click',()=>{
    if(cont ===0){
        null
    }else{
        cartEmpty.style.display ='none'
        cart.appendChild(divFlex)
        divFlex.appendChild(img_cart)
        p.innerHTML = `${produto.nome}`
        p2.innerHTML = `$125.00 x ${cont} = $${produto.price * cont}.00`
        divFlex.appendChild(p)
        divFlex.appendChild(Ondelete)
        cart.appendChild(p2)
        divFlex.style.display = 'flex'
        p2.style.display = 'block'
        cart.appendChild(submit)
        submit.style.display = 'block'
        cont = 0
        amount.innerHTML = `${cont}`
    }
})
Ondelete.addEventListener('click',()=>{
    if(produto.id == produto.id){
        cartEmpty.style.display = 'block'
        divFlex.style.display = 'none'
        p2.style.display = 'none'
        submit.style.display = 'none'
        cont = 0
        counter.innerHTML = `${cont}`
    }
})

imagem1.addEventListener('mouseenter',()=>{
    img_change.src = `${data.mainImage1}`
})
imagem2.addEventListener('mouseenter',()=>{
    img_change.src = `${data.mainImage2}`
})
imagem3.addEventListener('mouseenter',()=>{
    img_change.src = `${data.mainImage3}`
})
imagem4.addEventListener('mouseenter',()=>{
    img_change.src = `${data.mainImage4}`
})