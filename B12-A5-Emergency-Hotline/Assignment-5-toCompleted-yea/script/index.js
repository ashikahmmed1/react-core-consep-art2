
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

const cartBtn = document.getElementsByClassName('cart-btn');
let star = 100;
for(let cartButton of cartBtn) {
    cartButton.addEventListener('click', function(event){
        const productTitle = cartButton.parentNode.parentNode.childNodes[3].innerText;
        const productNumber = cartButton.parentNode.parentNode.childNodes[7].innerText;
        if(star < 20){
            alert('❌ You will need at least 20 coins to call Neta enough coins.')
            return
        }
        alert(`📞 ${productTitle} at ${productNumber}`);
        star -= 20;
        getElement('copy-star').textContent = star;
        const time = new Date().toLocaleTimeString();
        
            const cartContainer = getElement('card-input');
    const newCart = document.createElement('div');
    newCart.innerHTML = `
                <div class="flex justify-between items-center
                     w-[350px] h-[75px] rounded-xl bg-[#fafafa] mt-4 mx-auto">
                       <div class="ml-3">
                           <h1 class="font-semibold text-[16]">${productTitle}</h1>
                           <h2 class="text-[#5C5C5C]">${productNumber}</h2>
                        </div>
                        <div class="mr-3 text-[18px]">
                            <span>${time}</span>
                        </div>
                    </div>
    `;

    cartContainer.append(newCart);



    })
}

 document.getElementById('btn-clear').addEventListener('click', function(){
    const cartContainer = getElement('card-input');
    cartContainer.innerHTML = '';
 })



const loveCount = document.getElementsByClassName('love-count');

for(let lovesCount of loveCount) {
    lovesCount.addEventListener('click', function(){
        const loves= lovesCount.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[1]
        console.log(loves)



        const totalLove = getElement('total-love').textContent;
        const ollTotalLove = Number(totalLove) + 1;
        getElement('total-love').textContent = ollTotalLove;

    })

}   

const copyCartBtn = document.getElementsByClassName('copy-cart-btn');

for(let copy of copyCartBtn) {
    copy.addEventListener('click', function(){
        const copyBtn= copy.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.childNodes[1].childNodes[3].childNodes[5].childNodes[1].childNodes[1].childNodes[0]
        console.log(copyBtn)

        const totalCopy = getElement("copy-nav").textContent;
        const ollTotalCopy = Number(totalCopy) + 1;
        getElement("copy-nav").textContent = ollTotalCopy;

    }) 
    
}           


