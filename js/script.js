function showMenu() {
    var menuobj = document.getElementById("menu");
    if(menuobj.style.display == "none" || menuobj.style.display == "") {
        menuobj.style.display = "block";
    }
    else {
        menuobj.style.display = "none";
    }
}

function hideAll() {
    let blogs = ["blog-1", "blog-2", "blog-3", "blog-4", "blog-5", "blog-6", "blog-7", "blog-8", "blog-9", "blog-10","blog-11","blog-12","blog-13","blog-14"];
    for(let i=0;i<blogs.length;i++) {
        document.getElementById(blogs[i]).style.display="none";
    }
}

function showBlog(objid) {
    hideAll();
    let dobj = document.getElementById("blog-"+objid);
    dobj.style.transition = "height 5s";
    dobj.style.display="block";
}