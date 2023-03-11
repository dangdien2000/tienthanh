var admin = ["admin","1234"]
var user1 = ["user1","1"]
var user2 = ["user2","2"]

function login()
{
    var a= document.getElementById("inputuser").value;
    var b= document.getElementById("inputpass").value;

    //admin
    if (a == admin[0] && b ==admin[1])
    {
        fn_ScreenChange('Screen_Main', 'Screen_1', 'Screen_2');
        document.getElementById('id01').style.display='none';
    }
    //user1
    else if (a == user1[0] && b == user1[1])
    {
        fn_ScreenChange('Screen_Main', 'Screen_1', 'Screen_2');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_2").disabled = true;
    }
    //user2
    else if (a == user2[0] && b == user2[1])
    {
        fn_ScreenChange('Screen_1', 'Screen_Main', 'Screen_2');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_Main").disabled = true;
        document.getElementById("btt_Screen_1").disabled = true;
    }
    else
    {
        window.location.href = '';
    }
}
function logout()
{
    alert("You are logged out");
    window.location.href = '';
}