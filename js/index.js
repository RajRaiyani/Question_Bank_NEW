let x = 1;

function toggle(){
    if(x==1){
        document.getElementById('menu').style.display="block";
        x=2;
        return 0;
    }else{
        document.getElementById('menu').style.display="none";
        x=1;
        return 0;
    }
    
}