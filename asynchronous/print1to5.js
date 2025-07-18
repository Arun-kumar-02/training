
// for(let i=1; i<=5; i++)
// {
//     setTimeout(callback(i) ,i*1000)

//     function callback(i){
//         return function(){
//             console.log(i);
            
//         }
//     }
// }


for (let i = 1; i <= 5; i++) {
  

setTimeout(callback(i), i * 1000);

  function callback(i) {
    return function () {
      console.log(i);
    };
  }
}