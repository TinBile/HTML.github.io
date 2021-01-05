let s_item = document.querySelectorAll('.service-list li');
s_item.forEach(element => {
    element.addEventListener("mouseover", function(){
        console.log('fuck');
        for( let sibling of s_item) {
            sibling.classList.remove('active');
        }
        this.classList.add('active');
    })
});