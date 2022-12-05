const pro1=new Promise((resolve,reject)=>{
    const temp=20;

    if(temp>5){
        resolve('success');
    }
    else{    
    reject('reject');
    }

})

pro1.then(
    (val)=>{
        console.log(`TRUE :${val}`);
    },
    (err)=>{
        console.log(`Error!!! :${err}`)
    }
);

