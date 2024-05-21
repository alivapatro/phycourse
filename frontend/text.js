function show(val){
   let x=document.getElementById(val);
   let cls=x.getAttribute("class");
   if(cls==="anything")x.setAttribute("class","explnlist");
   else x.setAttribute("class","anything");
}

