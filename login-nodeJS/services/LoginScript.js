function userValidation(){
    let Email=document.getElementById("Email").value;
    let Password=document.getElementById("Password").value;
    const _url = 'http://localhost:11111/users/token';
    fetch(_url,{
        method : 'POST',
        headers: {
         'content-type':'application/json'
        },
        body:JSON.stringify({
                email:Email,
                pass:Password
            })
    }).then(response=>response.json())
    .then(data=>{ 
        console.log(data)     
        if(data.message=='Token Generated Successfully'){
        localStorage.setItem(Email,data.token)
        alert('valid User');
        const _Url='http://localhost:11111/validate'
        fetch(_url,{
            method : 'POST',
            headers: {
             'content-type':'application/json',
             'token':localStorage.getItem(Email)
            }
        }).then(response=>response.json())
        .then(data3=>{
            console.log(data3);
            if(data3.message="user is valid")
              {  
                alert(data3.message) 
                window.location='C:\\Users\\AnujKumarSingh\\Documents\\23rdJuly2019-Test\\Services\\product.html'
              }else if(data3.message="Unauthorized Access")
              {
                alert(data3.err)
                window.location='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi6jd2EltTjAhUv4HMBHQNwCI0QPAgH'
              }
              
        });
        
        }
        else{
            alert('Invalid User');
            window.location='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi6jd2EltTjAhUv4HMBHQNwCI0QPAgH'
        }
    });
}