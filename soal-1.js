function cekBilanganPrima(num){
    let tampung = 0
    if(num === 1){
        process.stdout.write(num + ', ')
    } 
    for(let i=1; i <= num; i++){
        if(num % i === 0){
            tampung++
        }
    }
    if(tampung > 2){
        if(num % 3 === 0 && num % 5 === 0){
            process.stdout.write("FooBar, ")
        }else if(num % 3 === 0){
            process.stdout.write('Foo, ')
        }else if(num % 5 === 0){
            process.stdout.write('Bar, ')
        }else {
            process.stdout.write(`${num}, `)
        }
    }
}

for(let i=100; i >= 1; i--){
    cekBilanganPrima(i)
}