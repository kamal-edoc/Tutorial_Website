
        function verify()
        {   
            var un=document.f.uname.value;
            var pwd=document.f.pswd.value;
            if(un=="kamal" && pwd==="Angular" )
            {
                window.location="tutorials.html"                
            }
            else 
            {
                alert("Incorrect username or Password");
            }

        }
            
        function Details()
        {
            alert(" use "+"  username: kamal "+"   and Password: Angular");
        }