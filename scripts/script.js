var x = false;
const btn = document.getElementById('btn');

let basket = 0;
let price = btn.previousSibling.previousSibling.textContent
const basketPrice = document.querySelector('.price')

price = price.replace('', '')
price = parseInt(price)

function buy()
{
	if(x == false)
	{


	btn.style.background ='lime';
	btn.innerHTML = "В корзине"
	x = true;
		basket = basket+price
   }

	
	else {

	btn.style.background ='silver';
	btn.innerHTML = "Купить"
	x = false;
	basket = basket-price
	}
	basketPrice.textContent = basket
}