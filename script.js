// =====================================================
// SIENTO WEBSITE - SCRIPT.JS
// =====================================================


// =====================================================
// PRODUCT DATA
// =====================================================

const trendingProducts = [
    {
        name: "Trending Shoes ddd",
        image: "Trendingc1.jpg"
    },
    {
        name: "Trending Shoes 2",
        image: "Trendingc2.jpg"
    },
    {
        name: "Trending Shoes 3",
        image: "Trendingc3.jpg"
    }
];


const menCasualProducts = [
    {
        name: "Nike Air Max 95 Mystic Red",
        image: "mc1.jpg"
    },
    {
        name: "Nike Air Force 1",
        image: "mc2.jpg"
    },
    {
        name: "Men's Casual Shoes",
        image: "mc3.jpg"
    },
    {
        name: "Men's Casual Shoes",
        image: "mc4.jpg"
    },
    {
        name: "Men's Casual Shoes",
        image: "mc5.jpg"
    },
    {
        name: "Men's Casual Shoes",
        image: "mc6.jpg"
    },
      {
        name: "Men's Casual Shoes",
        image: "mc7.jpg"
      },
        {name: "Men's Casual Shoes",
        image: "mc8.jpg"
        
    },
    
];


const menFormalProducts = [
    {
        name: "Men's Formal Shoes",
        image: "mf1.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf2.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf3.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf4.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf5.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf6.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf7.jpg"
    },
    {
        name: "Men's Formal Shoes",
        image: "mf8.jpg"
    }
    
    

];


const menSportsProducts = [
    {
        name: "Men's Sports Shoes",
        image: "ms1.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms2.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms3.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms4.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms5.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms6.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms7.jpg"
    },
    {
        name: "Men's Sports Shoes",
        image: "ms8.jpg"
    },
    
];


const womenCasualProducts = [
    {
        name: "Women's Casual Shoes",
        image: "wc1.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc2.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc3.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc4.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc5.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc6.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc7.jpg"
    },
    {
        name: "Women's Casual Shoes",
        image: "wc8.jpg"
    }
    
];


const womenHeelsProducts = [
    {
        name: "Women's Heels",
        image: "wh1.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh2.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh3.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh4.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh5.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh6.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh7.jpg"
    },
    {
        name: "Women's Heels",
        image: "wh8.jpg"
    }
];


const womenSandalsProducts = [
    {
        name: "Women's Sandals",
        image: "ws1.jpg"
    },
    {
        name: "Women's Sandals",
        image: "ws2.jpg"
    },
    {
        name: "Women's Sandals",
        image: "ws3.jpg"
    },
    {
        name: "Women's Sandals",
        image: "ws4.jpg"
    },
    {
        name: "Women's Sandals",
        image: "ws5.jpg"
    },
    {
        name: "Women's Sandals",
        image: "ws6.jpg"
    },
      {
        name: "Women's Sandals",
        image: "ws7.jpg"
    },
      {
        name: "Women's Sandals",
        image: "ws8.jpg"
    }
];


// =====================================================
// CREATE PRODUCT CARD
// =====================================================

function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";

    card.setAttribute(
        "data-name",
        product.name.toLowerCase()
    );

    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
            draggable="false"
        >

        <div class="card-shade"></div>

        <div class="card-icons">

            <button
                class="wish-card"
                aria-label="Add to wishlist">
                ♡
            </button>

            <button
                class="bag-card"
                aria-label="Add to bag">

                <span class="bag-icon"></span>

            </button>

        </div>

        <div class="card-bottom">

            <div class="card-name">
                ${product.name}
            </div>

            <button class="buy-btn">
                Buy Now
            </button>

        </div>
    `;

    return card;
}


// =====================================================
// RENDER PRODUCTS
// =====================================================

function renderProducts(containerId, products) {

    const container =
        document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    products.forEach(function(product) {

        const card =
            createProductCard(product);

        container.appendChild(card);

    });
}


// =====================================================
// RENDER TRENDING
// =====================================================

function renderTrending() {

    const container =
        document.getElementById(
            "trendingContainer"
        );

    if (!container) return;

    container.innerHTML = "";

    trendingProducts.forEach(function(product) {

        const card =
            createProductCard(product);

        container.appendChild(card);

    });
}


// =====================================================
// RENDER EVERYTHING
// =====================================================

function renderAllProducts() {

    renderTrending();


    renderProducts(
        "menCasual",
        menCasualProducts
    );


    renderProducts(
        "menFormal",
        menFormalProducts
    );


    renderProducts(
        "menSports",
        menSportsProducts
    );


    renderProducts(
        "womenCasual",
        womenCasualProducts
    );


    renderProducts(
        "womenHeels",
        womenHeelsProducts
    );


    renderProducts(
        "womenSandals",
        womenSandalsProducts
    );
}


// =====================================================
// PAGE NAVIGATION
// =====================================================

const pages =
    document.querySelectorAll(".page");

const navLinks =
    document.querySelectorAll(".nav-link");


function showPage(pageName) {

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(pageName);


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    navLinks.forEach(function(link) {

        link.classList.remove("active");


        if (
            link.getAttribute("data-page")
            === pageName
        ) {

            link.classList.add("active");

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// NAVIGATION CLICK
// =====================================================

// =====================================================
// NAVIGATION CLICK
// =====================================================

document.querySelectorAll("[data-page]").forEach(function(element) {

    element.addEventListener("click", function(event) {

        event.preventDefault();

        const pageName = element.getAttribute("data-page");

        showPage(pageName);

        history.replaceState(
            null,
            "",
            "#" + pageName
        );

    });

});


// =====================================================
// LOGO -> HOME
// =====================================================

const logoLink =
    document.querySelector(".logo-link");


if (logoLink) {

    logoLink.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            showPage("home");


            history.replaceState(
                null,
                "",
                "#home"
            );

        }
    );

}


// =====================================================
// LOAD PAGE FROM URL HASH
// =====================================================

function loadPageFromHash() {

    let pageName =
        window.location.hash.substring(1);


    if (!pageName) {

        pageName = "home";

    }


    const pageExists =
        document.getElementById(pageName);


    if (pageExists) {

        showPage(pageName);

    } else {

        showPage("home");

    }
}


window.addEventListener(
    "hashchange",
    loadPageFromHash
);


// =====================================================
// CART
// =====================================================

let cartCount = 0;


const cartCounter =
    document.getElementById(
        "cartCount"
    );


function updateCart() {

    if (cartCounter) {

        cartCounter.textContent =
            cartCount;

    }

}


// =====================================================
// WISHLIST
// =====================================================

let wishlistCount = 0;


const wishlistCounter =
    document.getElementById(
        "wishlistCount"
    );


function updateWishlist() {

    if (wishlistCounter) {

        wishlistCounter.textContent =
            wishlistCount;

    }

}


// =====================================================
// TOAST
// =====================================================

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(function() {

        toast.classList.remove(
            "show"
        );

    }, 1800);
}


// =====================================================
// PRODUCT BUTTONS
// =====================================================

document.addEventListener(
    "click",
    function(event) {


        // -----------------------------------------
        // WISHLIST
        // -----------------------------------------

        if (
            event.target.closest(
                ".wish-card"
            )
        ) {

            const button =
                event.target.closest(
                    ".wish-card"
                );


            if (
                button.classList.contains(
                    "selected"
                )
            ) {

                button.classList.remove(
                    "selected"
                );

                wishlistCount--;

            } else {

                button.classList.add(
                    "selected"
                );

                wishlistCount++;

            }


            updateWishlist();

            return;
        }


        // -----------------------------------------
        // BAG
        // -----------------------------------------

        if (
            event.target.closest(
                ".bag-card"
            )
        ) {

            cartCount++;

            updateCart();


            showToast(
                "Added to bag"
            );


            return;
        }


        // -----------------------------------------
        // BUY NOW
        // -----------------------------------------

        if (
            event.target.closest(
                ".buy-btn"
            )
        ) {

            cartCount++;

            updateCart();


            showToast(
                "Product added to bag"
            );


            return;
        }

    }
);


// =====================================================
// HEADER BAG
// =====================================================

const cartButton =
    document.getElementById(
        "cartButton"
    );


if (cartButton) {

    cartButton.addEventListener(
        "click",
        function() {

            showToast(
                "Your bag is empty"
            );

        }
    );

}


// =====================================================
// HEADER WISHLIST
// =====================================================

const wishlistButton =
    document.getElementById(
        "wishlistButton"
    );


if (wishlistButton) {

    wishlistButton.addEventListener(
        "click",
        function() {

            showToast(
                wishlistCount +
                " item(s) in wishlist"
            );

        }
    );

}


// =====================================================
// SEARCH
// =====================================================

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const searchText =
                searchInput.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".product-card"
                );


            cards.forEach(function(card) {

                const name =
                    card.getAttribute(
                        "data-name"
                    ) || "";


                if (
                    searchText === ""
                    ||
                    name.includes(
                        searchText
                    )
                ) {

                    card.style.display =
                        "block";

                } else {

                    card.style.display =
                        "none";

                }

            });

        }
    );

}




// =====================================================


/* =====================================================
   PRODUCT SLIDER
   ARROWS + SMOOTH SCROLL + MOUSE DRAG
===================================================== */

function initializeProductSliders() {

    document.querySelectorAll(".product-slider").forEach(function (slider) {

        const row = slider.querySelector(".product-scroll");
        const previousButton = slider.querySelector(".slider-prev");
        const nextButton = slider.querySelector(".slider-next");

        if (!row || !previousButton || !nextButton) {
            return;
        }


        /* =============================================
           GET ONE CARD + GAP
        ============================================= */

        function getScrollAmount() {

            const card = row.querySelector(".product-card");

            if (!card) {
                return 290;
            }

            const cardWidth = card.getBoundingClientRect().width;

            const styles = window.getComputedStyle(row);

            const gap =
                parseFloat(styles.columnGap) ||
                parseFloat(styles.gap) ||
                30;

            return cardWidth + gap;
        }


        /* =============================================
           UPDATE ARROWS
        ============================================= */

        function updateArrows() {

            const maxScroll =
                row.scrollWidth - row.clientWidth;

            previousButton.disabled =
                row.scrollLeft <= 2;

            nextButton.disabled =
                row.scrollLeft >= maxScroll - 2;
        }


        /* =============================================
           RIGHT ARROW
        ============================================= */

        nextButton.addEventListener("click", function (event) {

            event.preventDefault();

            row.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });

        });


        /* =============================================
           LEFT ARROW
        ============================================= */

        previousButton.addEventListener("click", function (event) {

            event.preventDefault();

            row.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });

        });


        /* =============================================
           UPDATE ARROWS WHEN SCROLLING
        ============================================= */

        row.addEventListener(
            "scroll",
            updateArrows,
            { passive: true }
        );


        /* =============================================
           MOUSE DRAG
        ============================================= */

        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;
        let hasMoved = false;


        row.addEventListener("mousedown", function (event) {

            if (event.button !== 0) {
                return;
            }

            isDragging = true;
            hasMoved = false;

            startX = event.pageX;
            startScrollLeft = row.scrollLeft;

            row.classList.add("dragging");

            /*
               IMPORTANT:
               Turn smooth scrolling OFF while dragging.
               This prevents lag.
            */

            row.style.scrollBehavior = "auto";

            event.preventDefault();

        });


        row.addEventListener("mousemove", function (event) {

            if (!isDragging) {
                return;
            }

            const distance = event.pageX - startX;

            if (Math.abs(distance) > 5) {
                hasMoved = true;
            }

            row.scrollLeft =
                startScrollLeft - distance;

            event.preventDefault();

        });


        function stopDragging() {

            if (!isDragging) {
                return;
            }

            isDragging = false;

            row.classList.remove("dragging");

            /*
               Restore smooth scrolling
               for the arrows.
            */

            row.style.scrollBehavior = "smooth";

        }


        row.addEventListener(
            "mouseup",
            stopDragging
        );

        row.addEventListener(
            "mouseleave",
            stopDragging
        );


        /* =============================================
           PREVENT IMAGE DRAG
        ============================================= */

        row.addEventListener("dragstart", function (event) {

            event.preventDefault();

        });


        /* =============================================
           PREVENT CLICK AFTER DRAG
        ============================================= */

        row.addEventListener(
            "click",
            function (event) {

                if (hasMoved) {

                    event.preventDefault();
                    event.stopPropagation();

                    hasMoved = false;
                }

            },
            true
        );


        /* =============================================
           TOUCH
           Native horizontal swipe is used.
        ============================================= */

        row.addEventListener(
            "touchstart",
            function () {

                row.style.scrollBehavior = "auto";

            },
            { passive: true }
        );


        row.addEventListener(
            "touchend",
            function () {

                row.style.scrollBehavior = "smooth";

            },
            { passive: true }
        );


        /* =============================================
           INITIAL ARROW STATE
        ============================================= */

        updateArrows();


        /* =============================================
           RESIZE
        ============================================= */

        window.addEventListener(
            "resize",
            updateArrows
        );

    });
}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

renderAllProducts();

loadPageFromHash();

updateCart();

updateWishlist();


/*
   VERY IMPORTANT:

   Product cards are created by renderAllProducts()
   BEFORE we initialize the sliders.
*/

initializeProductSliders();

// =====================================================
// INITIALIZE WEBSITE
// =====================================================

renderAllProducts();

loadPageFromHash();

updateCart();

updateWishlist();
/* =====================================================
   MOBILE MENU
   ===================================================== */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const header = document.querySelector(".header");

if (mobileMenuBtn && header) {

    mobileMenuBtn.addEventListener("click", () => {
        header.classList.toggle("menu-open");
    });

}


/* Close mobile menu when selecting a page */

document.querySelectorAll(".navigation .nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 600) {
            header.classList.remove("menu-open");
        }

    });

});


/* =====================================================
   HERO IMAGE SLIDER
===================================================== */
function initializeHeroSliders() {

    const heroes = document.querySelectorAll(".hero-slides");

    heroes.forEach(function(slider) {

        const hero = slider.closest(".hero");

        const slides = slider.querySelectorAll(".hero-slide");

        const prevButton = hero.querySelector(".hero-prev");

        const nextButton = hero.querySelector(".hero-next");

        if (slides.length <= 1) return;

        let currentSlide = 0;

        let autoSlideTimer;


        function showSlide(index) {

            slides[currentSlide].classList.remove("active");

            currentSlide =
                (index + slides.length) % slides.length;

            slides[currentSlide].classList.add("active");
        }


        function nextSlide() {
            showSlide(currentSlide + 1);
        }


        function previousSlide() {
            showSlide(currentSlide - 1);
        }


        function startAutoSlide() {

            clearInterval(autoSlideTimer);

            autoSlideTimer = setInterval(function() {

                nextSlide();

            }, 4000);
        }


        if (nextButton) {

            nextButton.addEventListener("click", function(event) {

                event.preventDefault();
                event.stopPropagation();

                nextSlide();

                startAutoSlide();

            });

        }


        if (prevButton) {

            prevButton.addEventListener("click", function(event) {

                event.preventDefault();
                event.stopPropagation();

                previousSlide();

                startAutoSlide();

            });

        }


        startAutoSlide();

    });

}


initializeHeroSliders();


