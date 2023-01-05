const search_image = () =>{
    const searchbox = document.getElementById("searchbar").value.toUpperCase();
    const storeitems = document.getElementById("image-grid")
    const product = document.querySelectorAll(".image-title")
    const pname = storeitems.getElementsByTagName("a")

    for(var i=0; i < pname.length; i++){
        let match= product[i].getElementsByTagName('a')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}

