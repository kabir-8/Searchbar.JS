const search=()=>{
    if(document.getElementById("searchid").value==""){
        document.getElementById("tableid").style.display="none";
    }else{
        document.getElementById("tableid").style.display="flex";
    }
    
    
    var a=document.getElementById("searchid").value.toUpperCase();
    var b=document.getElementById("tableid");
    var c=b.getElementsByTagName("tr");
    for(var i=0;i<c.length;i++){
    
        var d=c[i].getElementsByTagName("td")[0];

    if(document.getElementById('sortname').checked) {
        d=c[i].getElementsByTagName("td")[0];
      }else if(document.getElementById('sortid').checked) {
         d=c[i].getElementsByTagName("td")[1];
      }else if(document.getElementById('sortage').checked) {
         d=c[i].getElementsByTagName("td")[2];
      }else if(document.getElementById('sortcourse').checked) {
         d=c[i].getElementsByTagName("td")[3];
      }


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
