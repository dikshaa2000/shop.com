
function header(){
    return `<div id="header-div">
    <div id="navbar-div">

        <div id="first">
            <p>Shoopping made easy. Buy now, pay later with Sezzel <a href="details.html" style="color:white">See
                    details</a></p>
        </div>

        <div id="second">

        
            <div id="img1" onclick="window.location.href='index.html'">
            <picture>
                <source media="(max-width: 600px)" srcset="https://img.shop.com/Image/resources/homepage/shop-homepage-icon.svg">
                <img src="web_img/shop-logo-us.svg" alt="logo">
            </picture>
                
            </div>


            <div id="one">
                <div id="one1">
                    <select id="select">
                        <option value="All Departments">All Departments</option>
                        <option value="">Auto</option>
                        <option value="">Baby</option>
                        <option value="">Beauty</option>
                        <option value="">Books</option>
                        <option value="">Business</option>
                        <option value="">Cameras</option>
                        <option value="">Clothes</option>
                    </select>
                </div>

                <div id="search">
                    <input id="search1" type="text" placeholder="Search SHOP.COM...">

                </div>

                <div id="icon">
                    <button> <i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
                </div>

                <div id="search-result-div">
                </div>

                <!-- CROSS DIV -->
                <div id="cross-result" class="cross-div">
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </div>

            </div>

            <div id=three>
                <img id="img3"
                    src="./web_img/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg">
            </div>
        </div>

        <div id="third">
        
            <div id="threeOne">
                <p id="category"><i class="fa-solid fa-list fa-xl"></i> Categories</p>
            </div>
            <div id="threeTwo">
                <div>
                    <p>Exclusive Brands</p>
                </div>
                <div>
                    <p>Stores</p>
                </div>
                <div>
                    <p>Deals</p>
                </div>
                <div>
                    <p>SHOP Travel</p>
                </div>
                <div id="depts">
                    <p>Departments</p>
                </div>
                <div>
                    <p>Shop Buddy</p>
                </div>
                <div id="shopL">
                    <p>SHOP Local</p>
                </div>

            </div>

            <div id="threeTH">
                <div id="ek">
                    <div><i class="fa-solid fa-user fa-xl"></i></div>
                    <div><p id="Signin">Sign in</p></div>
                    
                </div>
                <div id="do">
                <div><i class="fa-solid fa-rotate-left fa-xl"></i></div>
                <div><p id="Orders">Orders</p></div>
                
                </div>
                <div id="teen">
                <div id="cartIcon-div"><i id="cartIcon" class="fa-solid fa-cart-shopping fa-xl"></i>
                <div id="cart-count-div"><p id="cart-count"></p></div>
                </div>
                <div><p id="Cart">Cart</p></div>
                    
                </div>
            </div>
        </div>

    </div>
    <div id="category-div">

        <h1 class="menu-head"><img id="shop-logo"
                src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" alt=""> SHOP.COM</h1>
        <h3 class="menu-subhead">Categories</h3>
        <p>Mother's Day Gift Idea</p>
        <p>Gift Center</p>
        <p>SHOP.COM Home Warranties</p>
        <p>Onecart Exclusive Deals</p>

        <div id="clothes" class="category-links">
            <div>
                <p>Clothes</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Shoes</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Beauty</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Home</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Electronics</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Health & Nutrition</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Jewelry</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Pet Supplies</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Food & Drink</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Sports</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Travel</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Exclusive Brands</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>

        <p>SHOP travel</p>
        <p>All Stores</p>
        <p>All Departments</p>

        <h3 class="menu-subhead">Account</h3>
        <p><i class="fa-solid fa-truck fa-lg"></i> Track Orders</p>
        <p><i class="fa-solid fa-rotate-right fa-lg"></i> Reorder Items - updated</p>
        <p><i class="fa-solid fa-circle-question fa-lg"></i></i> Help</p>

        <h3 class="menu-subhead">Features</h3>
        <p><i class="fa-solid fa-list fa-lg"></i> List Manager</p>
        <p><i class="fa-solid fa-gift fa-lg"></i> Gift registry</p>
        <p><i class="fa-brands fa-edge-legacy fa-lg"></i> eGifts</p>
        <p><i class="fa-solid fa-dollar-sign fa-lg"></i> Price Alerts</p>
        <p><i class="fa-solid fa-location-dot fa-lg"></i> Shop location</p>
        <!-- CROSS DIV -->
        <div id="cross-category" class="cross-div">
            <i class="fa-solid fa-xmark fa-xl"></i>
        </div>
    </div>
    <div id="category-div-1">
        <p id="back-clothing" class="back"><i class="fa-solid fa-angle-left"></i> Back to main</p>
        <h1 class="menu-head">Clothes</h1>
        <h3 class="menu-subhead">Shop All Clothes</h3>
        <div id="sweater" class="category-links">
            <div>
                <p>Sweater</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div id="top-blouses" class="category-links">
            <div>
                <p>Blouses</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div id="jeans" class="category-links">
            <div>
                <p>Jeans</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div id="activewear" class="category-links">
            <div>
                <p>Activewear</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div id="dress" class="category-links">
            <div>
                <p>Dress</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <div class="category-links">
            <div>
                <p>Baby & Toddler Clothing</p>
            </div>
            <div><i class="fa-solid fa-angle-right"></i></div>
        </div>
        <img src="https://img.shop.com/Image/header2013/us-en-gap-freeshhip-banner-fillin-apr211618414682233.jpeg"
            alt="">

        <!-- CROSS DIV -->
        <div id="cross-clothing" class="cross-div">
            <i class="fa-solid fa-xmark fa-xl"></i>
        </div>
    </div>
    <div id="sign-div">

        <h1 class="menu-head"><i class="fa-solid fa-user"></i> Account</h1>

        <p id="signin-link"><i class="fa-solid fa-user"></i> Sign in</p>
        <p id="signout-link"><i class="fa-solid fa-user"></i> Sign out</p>
        <p><i class="fa-solid fa-truck fa-lg"></i> Track Orders</p>
        <p><i class="fa-solid fa-rotate-right fa-lg"></i> Reorder Items - updated</p>
        <p><i class="fa-solid fa-dollar-sign"></i> Cashback program</p>
        <p><i class="fa-solid fa-circle-question fa-lg"></i> Help</p>
        <p id="register-link"><i class="fa-solid fa-user"></i> Create Account</p>
        <p><i class="fa-solid fa-user fa-xl"></i> My Account</p>

        <h3 class="menu-subhead"></h3>
        <p><i class="fa-solid fa-list fa-lg"></i> List Manager</p>
        <p><i class="fa-solid fa-gift fa-lg"></i> Gift registry</p>
        <p><i class="fa-brands fa-edge-legacy fa-lg"></i> eGifts</p>
        <p><i class="fa-solid fa-hands-holding-circle"></i> Wellness Manager</p>
        <h3 class="menu-subhead"></h3>
        <!-- CROSS DIV -->
        <div id="cross-sign" class="cross-div">
            <i class="fa-solid fa-xmark fa-xl"></i>

        </div>
    </div>
</div>`
}


export default header;