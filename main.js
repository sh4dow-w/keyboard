document.body.addEventListener('keydown', function(e){
    let btn = document.getElementById(`btn_${e.code}`);
    if(btn){
        btn.style.boxShadow = "0 0 2px red";
        btn.style.top = "3px";
    }
});

document.body.addEventListener('keyup', function(e){
    let btn = document.getElementById(`btn_${e.code}`);
    if(btn){
        btn.style.boxShadow = "0 2px 5px red";
        btn.style.top = "0px";
    }
});