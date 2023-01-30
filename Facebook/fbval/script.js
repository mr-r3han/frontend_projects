function validation()
{
    let name = document.getElementsByName('email')[0].value

    if (name === "" || name === null)
    {
        // document.getElementsByName('email')[0].style.border = "1px solid red"
        let x = document.getElementsByName('email')
        x[0].style.border = "1px solid red"
        
        let msg = document.getElementsByClassName('txt')
        msg[0].innerText = "this field is empty"
        msg[0].style.color = "red"
        // msg[0].style.margin-bottom = "10px"

        document.getElementsByClassName('form1')[0].style.height = "310px"
        return false
    
    }

}

function validation1()
{
    let fname = document.getElementsByName('setfname')[0].value

    if (fname === "" || fname === null)
    {
        let x = document.getElementsByName('setfname')
        x[0].style.border = "1px solid red"

        let msg1 = document.getElementsByClassName('txt1')
        msg1[0].innerText = "this field is empty"
        msg1[0].style.color = "red"
        
        return false
        
    }
    
    let lname = document.getElementsByName('setlname')[0].value
    if (lname === "" || lname === null)
    {
        
        let x = document.getElementsByName('setlname')
        x[0].style.border = "1px solid red"
        let msg2 = document.getElementsByClassName('txt2')
        msg2[0].innerText = "this field is empty"
        msg2[0].style.color = "red"
        return false
        
    }
    let setemail = document.getElementsByName('setemail')[0].value
    if (setemail === "" || setemail === null)
    {
        
        let x = document.getElementsByName('setemail')
        x[0].style.border = "1px solid red"
        return false  
    }
    let setpass = document.getElementsByName('setpass')[0].value
    if (setpass === "" || setpass === null)
    {
        
        let x = document.getElementsByName('setpass')
        x[0].style.border = "1px solid red"
        return false  
    }
}