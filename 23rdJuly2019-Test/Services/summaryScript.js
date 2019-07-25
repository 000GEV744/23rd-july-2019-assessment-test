        var row=[];
        let summary1=``
        function summary(){
           
            row= Object.keys(localStorage);  
            
            if(localStorage.length>0){
                row.forEach(key => {
                    summary1=localStorage.getItem(key)
                });
            }
            document.getElementById('summaryTable').innerHTML = summary1;
            document.getElementById('totalCost').innerHTML = row[0];
        }  

        
        function pay(){
            
            let custname = document.getElementById('Cname').value;
            let custemail = document.getElementById('Cemail').value;
            let custAddr = document.getElementById('Caddr').value;
            console.log(custAddr)
            const baseUrl = 'http://localhost:1264/email';
            
            fetch(baseUrl,{
            method : 'POST',
            headers: {
             'content-type':'application/json'
            },
            body:JSON.stringify({
                    from : null,
                    to: custemail,
                    subject: 'order sucessfully registered',
                    body: `<html><body>hello ${custname} <br> 
                   <pre> your order summary: <br></pre>
                    ${summary1}<br>
                    <pre> total cost of your shopping </pre>Rs. ${row[0]}
                    <pre>and will get delivered at your address:</pre>
                    <pre>${custAddr}</pre>
                    </body></html>`
                    
                })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        });
        alert('check your email') 
        localStorage.removeItem(row[0])
        window.location='product.html'
       } 