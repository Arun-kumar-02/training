
new Promise(resolve =>{
    console.log('A');
    resolve();
    console.log('B');    
}).then(async() =>{
    console.log('C');
}).then(async() => {
    console.log('D');
})
console.log('E');
