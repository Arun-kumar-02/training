const product = [{product: "apple", price: 60},
                {product: "mango", price: 80},
                {product: "lemon", price: 30},
                {product: "orange", price: 40}
            ];

            

            function comp(a,b){
                return a.price - b.price;
            }
            console.log(product);
            
            console.log(product.sort(comp));
            


