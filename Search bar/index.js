const search=()=>{
    var a=document.getElementById("searchid").value.toUpperCase();
    var b=document.getElementById("tableid");
    var c=b.getElementsByTagName("tr");
    for(var i=0;i<c.length;i++){
    var d=c[i].getElementsByTagName("td")[0];
    if(d){
        let text=d.textContent||d.innerHTML;
        if(text.toUpperCase().indexOf(a)>-1){
            c[i].style.display="";
        }else
        {
            c[i].style.display="none";
        }
    }
    }
}