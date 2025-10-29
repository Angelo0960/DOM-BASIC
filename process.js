const main = document.getElementById("main");
const carts = document.getElementById("carts");
const cart = carts.firstElementChild.firstElementChild;

console.log(cart);
const section = main.firstElementChild;
const h2 = section.firstElementChild;
const article = h2.nextElementSibling;
const div = article.firstElementChild;
const product = article.children;

const chichirits = Array.from(main
                .firstElementChild
                .firstElementChild
                .nextElementSibling
                .children) ;
console.log(chichirits);

chichirits.forEach((chichirit) => {
  chichirit.addEventListener('click', () => {

    const div = document.createElement('div');
    const productName = document.createElement('h6');
    const price = document.createElement('small');
    const image = document.createElement('img');


    image.src = chichirit
                    .firstElementChild
                    .firstElementChild
                    .src;

    productName.innerText =  chichirit
                            .firstElementChild
                            .nextElementSibling
                            .firstElementChild
                            .innerText;
         
    price.innerText = chichirit
                            .firstElementChild
                            .nextElementSibling
                            .firstElementChild
                            .nextElementSibling
                            .firstElementChild
                            .innerText;

    console.log(price
                )

    console.log(productName

    )
    console.log(image);

    div.classList.add('w-full', 'max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow-sm', 'dark:bg-gray-800', 'dark:border-gray-700',
            'transform', 'transition', 'duration-300', 'hover:scale-105', 'hover:shadow-xl', 'cursor-pointer','text-center', 'p-4', 'text-white','mb-4',);
    div.append(productName);
    div.append(price);
    div.append(image);
    console.log(div);
    
    cart.append(div);

  });
});
