var cnt = 0;
document.getElementById("btn").onclick = function(){
    cnt++;
    var val = parseInt(document.getElementById("myText").value);
    var res = "";
    if(val > 0){
        for(let i = 1; i <= val; i++){
            res += i + " ";
        }
        document.getElementById("kq").innerHTML = res;
    }
    else{
        for(var i = val; i <= 1; i++){
            res += i + " ";
        }
        document.getElementById("kq").innerHTML = res;
    }
    document.getElementById('count').innerHTML = "Số lượng số bạn vừa nhập là: " + cnt;
}

document.getElementById("myText").addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        document.getElementById("btn").click();
    }
});