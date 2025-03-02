/*
 function getdata(){
  let result=fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=12687860cbf640a3996aeb66e1547a6c")
// console.log(result);
result.then((res)=>{
 // console.log(res.json());
 res.json().then((pro)=>{
  console.log(pro.articles);

 })
})
 }
   getdata()
*/
   
document.addEventListener('DOMContentLoaded',function(){
  let mylink=document.getElementsByTagName("a")
  mylink[0].addEventListener("click",function(){
    getdata('all')
  })
   
  mylink[1].addEventListener("click",function(){
    getdata('sports')
  })
  mylink[2].addEventListener("click",function(){
    getdata('business')
  })
})





 async function getdata(cat){
  if(cat){
    let result=await fetch(`https://newsapi.org/v2/everything?q=${cat}&language=hi&apiKey=12687860cbf640a3996aeb66e1547a6c`)
    // console.log( result.json());
   let res=await result.json()
     //console.log(res.articles);
     let totalresult=res.articles.map((item)=>{
       return(
   
        `
         <div class="news">
           <img src=${item.urlToImage}>
           <div class="data">
           <h2>${item.title} </h2>
           <p>${item.description}</p>
           <a href=${item.url}>More News</a>
           </div>
         </div>
        `
       )
     })
     document.getElementById("myrow").innerHTML=totalresult.join(' ');
  }
else{
  let result=await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=12687860cbf640a3996aeb66e1547a6c")
 // console.log( result.json());
let res=await result.json()
  //console.log(res.articles);
  let totalresult=res.articles.map((item)=>{
    return(

     `
      <div class="news">
        <img src=${item.urlToImage}>
        <div class="data">
        <h2>${item.title} </h2>
        <p>${item.description}</p>
        <a href=${item.url}>More News</a>
        </div>
      </div>
     `
    )
  })
  document.getElementById("myrow").innerHTML=totalresult.join('');
}
 }
 getdata()