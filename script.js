const pr = fetch("https://dummyjson.com/products");
pr.then((res) => {
  const pr2 = res.json();
  pr2.then((data) => {
    createUI(data);
  });
}).catch((err) => {
  console.log("error occured \n", err);
});
const main = document.getElementById("root");
function createUI(data) {
  const products = data.products;
  main.innerHTML = ``;
  for (let i = 0; i < products.length; i++) {
    const newCard = document.createElement("div");
    const title=document.createElement('h3');
    title.innerText=products[i].title;
    console.log(products[i].title)
    newCard.appendChild(title);
    newCard.innerHTML = `
            <div>
                <h3>${products[i].title}</h3>
                <img src = ${products[i].thumbnail} > </img>
                <p>Price: ${products[i].price}</p>
            </div>`;
    main.appendChild(newCard);
  }
}
function searchProducts(e) {
  const searchText = e.target.value;
  const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
  pr.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
      createUI(data);
    });
  });
}

// // promise is an object which represent eventual completion or failure of an asynchronous operatio n and is resulting value .
//************************************************************************************************************************************ */
// const pr = new Promise((resolve, reject) => {
//   let flag = true;
//   if (flag === true) {
//     setTimeout(() => {
//       resolve(["apple", "mango", 2]);
//     }, 4000);
//   } else {
//     reject("not done");
//   }
// });
// console.log(pr);
// console.log(pr);

// setTimeout(() => {
//   console.log("done");
// }, 5000);

// pr.then((val) => {
//   console.log(val);
// });
// pr.catch((err) => {
//   console.log(err);
// });
//************************************************************************************************************************************ */
// let cnt=0;
// let id=1;
// const cb = () => {
//   console.log("DONE",cnt);
//   if (cnt == 4) {
//     clearInterval(id);
//   }
// };
// const time =1000;
// id=setInterval(cb,time);
//************************************************************************************************************************************
//****** ARRAY FLAT ***********/

// const arr2=[1,2,3,[4,4],[6]]
// console.log(arr2.flat(Infinity));
//************************************************************************************************************************************

//****** ARRAY SPLICE ***********/
// const arr=["A","B","C","D"];
// arr.splice(0,1);//pop 1 element (shift)
// arr.splice(3,1);//pop( 2 elements)
// arr.splice(2,0,"x","Y","z");
// console.log(arr);
//************************************************************************************************************************************

//****** ARRAY foreach and array map  ***********/
// const arr=["A","B","C","D"];
// const res1=arr.forEach((a,b,c)=>
//   {
//     console.log(a,b,c);

// return "ok";
// })
// const res2= arr.map((elem,b,c)=>
// {
//   console.log(elem,b,c);   // a is array b is index c is full array 

// })
// if(arr==res2)
//   {
//     console.log("ok")
//   }
//   else
//   {
//     console.log("not ok")

//   }
//************************************************************************************************************************************

//****** ARRAY filter  ***********/
//  const arr=["A","Bc","C","D"];
// const res3= arr.filter((a,b,c)=> 
//   // a is array b is index c is full array 
// {
//   if (a.length===1)
//     {
//   return true;
//   console.log(elem,b,c);
//     }
//     return false;
// })
// console.log(res3)
