function *fibo(n){
    let a=0,b=1,c,count=0;
    while(count<n){
        yield a;
        [a,b]=[b,a+b];
        count++;
    }
}

let a=fibo(10);

for(let i of a){
    console.log(i);
}