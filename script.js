function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}



var navItems = document.querySelectorAll("#nav li");
var sections = document.querySelectorAll("section");


navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Remove the "active" class from all items
        navItems.forEach(function(navItem) {
            navItem.querySelector("a").classList.remove("active");
        });

        // Add the "active" class to the clicked item
        item.querySelector("a").classList.add("active");
    });
});


function changeActiveNavItem() {
    var fromTop = window.scrollY;

    sections.forEach(function(section) {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            var sectionId = section.getAttribute("id");

            navItems.forEach(function(navItem) {
                var link = navItem.querySelector("a");
                if (link.getAttribute("href") === "#" + sectionId) {
                    // Remove the "active" class from all navigation items
                    navItems.forEach(function(navItem) {
                        navItem.querySelector("a").classList.remove("active");
                    });

                    // Add the "active" class to the corresponding navigation item
                    link.classList.add("active");
                }
            });
        }
    });
}

// Initial check for active section on page load
changeActiveNavItem();

// Add scroll event listener to change active section on scroll
window.addEventListener("scroll", changeActiveNavItem);



let darkmode = document.getElementById('dark-mode');

darkmode.onclick = function(){
    document.body.classList.toggle('light-theme');
}