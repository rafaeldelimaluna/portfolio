const header = document.querySelector("header")


export default document.addEventListener("scroll", (ev) => {
    if (scrollY == 0) { 
        
        header.classList.remove("non-top");

    }
    else { header.classList.add('non-top') }

})
