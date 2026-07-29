function showPage(id){

    const pages=document.querySelectorAll(".page");

    pages.forEach(page=>{

        page.style.display="none";

        page.classList.remove("active");

    });

    const target=document.getElementById(id);

    target.style.display="flex";

    target.classList.add("active");

}