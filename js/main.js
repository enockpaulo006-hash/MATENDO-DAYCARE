// GALLERY FILTERING
const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        galleryFilters.forEach((filter) => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach((item) => {
            const category = item.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});