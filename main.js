let carts=document.querySelectorAll('.add-cart'); //variable bch te5ou tout les bouton

let products=[ //tab-obj fih les article
    {
    name:'Pantalon coupe carotte pied de puce',
    tag:'pantalon coupe carotte pied de puce',
    price:100,
    inCart:0
},
  {
      name:'Épinglé sur Catalogue Mode Femme',
      tag: 'epinglé sur Catalogue Mode Femme',
      price:'170',
      inCart:0,
  },
  {
      name :'Pantalon',
      tag:'pantalon',
      price:200,
      inCart:0,
  },
   {
    name :'Veste noire',
    tag:'Veste noire',
    price:200,
    inCart:0,
   }
];


for (let i=0;i<carts.length;i++)  //kol manyenzel al buton yatla3 l num
{
    carts[i].addEventListener('click',()=>{ 
    cartNumbers(products[i]); //bch yafichili al console les detailles de l'obj
})
}

 
function onloadCartNumbers(){ //to refresh the page ,ya3ni dima l fl span bch ye5ou l num l fl storge
    let productNumber=localStorage.getItem('cartNumbers');
    if (productNumber)
    {
        document.querySelector('.cart span').textContent=productNumber;
    }
}


function cartNumbers(product)
{
    console.log("the product is ", product);
    let productNumber=localStorage.getItem('cartNumbers'); //bch yemchi l storage w ye5ou l item cartnumbers
    productNumber=parseInt(productNumber); //convertissement mta3 2eli bch ykoun f west l varible l entier
     if (productNumber)
     {
         localStorage.setItem('cartNumbers',productNumber + 1); //ken enty nzelt yemchi ll stockage w yzid 1 ll varible cartNum
        document.querySelector('.cart span').textContent=productNumber+1;//to refresh the bascket
        }
     else{
     localStorage.setItem('cartNumbers',1) // yemchi l stockage l fih l variable w y7ot 1
      document.querySelector('.cart span').textContent=1;//span:index 
    }
    setItems(product);
}
 
  function setItems(product)
  { 

       let cartItems=localStorage.getItem('productsInCart');//fi west l variable l nomb mta3 les produit
       cartItems=JSON.parse(cartItems); //

       if (cartItems!=null)
       {
           if(cartItems[product.tag]==undefined) //yemchi ll cartitem lel produit w ya3ml l acce al tag
          {
              cartItems={          //yafichi whatever it is in the cartitems 3ala  9ad me enty tenzel
                  ...cartItems, // fl array mta3 les cart
                  [product.tag]:product

              }
              cartItems[product.tag].inCart+=1;  //yzid kn enty tenzel mara o5ra al produit
          }

          else{
              product.inCart=1; // sinon bch yji incart=1
              cartItems={
                  [product.tag]:product // w just yaffichi l produit l nzelt 3lih enty kn mara
              }
          }
       }
       localStorage.setItem("productsIncart",JSON.stringify(cartItems));
  }

  
onloadCartNumbers(); //calling

