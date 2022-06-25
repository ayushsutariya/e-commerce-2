import React from 'react';

function Home(props) {
    return (
<div>
  <div className="wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="mb-0 phone pl-md-2">
            <a href="index.html#" className="mr-2"><span className="fa fa-phone mr-1" /> +00 1234 567</a>
            <a href="index.html#"><span className="fa fa-paper-plane mr-1" /> <span className="__cf_email__" data-cfemail="d5acbaa0a7b0b8b4bcb995b0b8b4bcb9fbb6bab8">[email&nbsp;protected]</span></a>
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <div className="social-media mr-4">
            <p className="mb-0 d-flex">
              <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
              <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
              <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
              <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
            </p>
          </div>
          <div className="reg">
            <p className="mb-0"><a href="index.html#" className="mr-2">Sign Up</a> <a href="index.html#">Log In</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Liquor <span>store</span></a>
      <div className="order-lg-last btn-group">
        <a href="index.html#" className="btn-cart dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="flaticon-shopping-bag" />
          <div className="d-flex justify-content-center align-items-center"><small>3</small></div>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-item d-flex align-items-start" href="#">
            <div className="img" style={{backgroundImage: 'url(images/prod-1.jpg)'}} />
            <div className="text pl-3">
              <h4>Bacardi 151</h4>
              <p className="mb-0"><a href="index.html#" className="price">$25.99</a><span className="quantity ml-3">Quantity: 01</span></p>
            </div>
          </div>
          <div className="dropdown-item d-flex align-items-start" href="#">
            <div className="img" style={{backgroundImage: 'url(images/prod-2.jpg)'}} />
            <div className="text pl-3">
              <h4>Jim Beam Kentucky Straight</h4>
              <p className="mb-0"><a href="index.html#" className="price">$30.89</a><span className="quantity ml-3">Quantity: 02</span></p>
            </div>
          </div>
          <div className="dropdown-item d-flex align-items-start" href="#">
            <div className="img" style={{backgroundImage: 'url(images/prod-3.jpg)'}} />
            <div className="text pl-3">
              <h4>Citadelle</h4>
              <p className="mb-0"><a href="index.html#" className="price">$22.50</a><span className="quantity ml-3">Quantity: 01</span></p>
            </div>
          </div>
          <a className="dropdown-item text-center btn-link d-block w-100" href="cart.html">
            View All
            <span className="ion-ios-arrow-round-forward" />
          </a>
        </div>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="index.html#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="product.html">Products</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="cart.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
            </div>
          </li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="hero-wrap" style={{backgroundImage: 'url("images/bg_2.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-8 ftco-animate d-flex align-items-end">
          <div className="text w-100 text-center">
            <h1 className="mb-4">Good <span>Drink</span> for Good <span>Moments</span>.</h1>
            <p><a href="index.html#" className="btn btn-primary py-2 px-4">Shop Now</a> <a href="index.html#" className="btn btn-white btn-outline-white py-2 px-4">Read more</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-intro">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-4 d-flex">
          <div className="intro d-lg-flex w-100 ftco-animate">
            <div className="icon">
              <span className="flaticon-support" />
            </div>
            <div className="text">
              <h2>Online Support 24/7</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="intro color-1 d-lg-flex w-100 ftco-animate">
            <div className="icon">
              <span className="flaticon-cashback" />
            </div>
            <div className="text">
              <h2>Money Back Guarantee</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="intro color-2 d-lg-flex w-100 ftco-animate">
            <div className="icon">
              <span className="flaticon-free-delivery" />
            </div>
            <div className="text">
              <h2>Free Shipping &amp; Return</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pb">
    <div className="container">
      <div className="row">
        <div className="col-md-6 img img-3 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/about.jpg)'}}>
        </div>
        <div className="col-md-6 wrap-about pl-md-5 ftco-animate py-5">
          <div className="heading-section">
            <span className="subheading">Since 1905</span>
            <h2 className="mb-4">Desire Meets A New Taste</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
            <p className="year">
              <strong className="number" data-number={115}>0</strong>
              <span>Years of Experience In Business</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pb">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-4 ">
          <div className="sort w-100 text-center ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/kind-1.jpg)'}} />
            <h3>Brandy</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 ">
          <div className="sort w-100 text-center ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/kind-2.jpg)'}} />
            <h3>Gin</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 ">
          <div className="sort w-100 text-center ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/kind-3.jpg)'}} />
            <h3>Rum</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 ">
          <div className="sort w-100 text-center ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/kind-4.jpg)'}} />
            <h3>Tequila</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 ">
          <div className="sort w-100 text-center ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/kind-5.jpg)'}} />
            <h3>Vodka</h3>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 ">
          <div className="sort w-100 text-center ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/kind-6.jpg)'}} />
            <h3>Whiskey</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">Our Delightful offerings</span>
          <h2>Tastefully Yours</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-1.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="sale">Sale</span>
              <span className="category">Brandy</span>
              <h2>Bacardi 151</h2>
              <p className="mb-0"><span className="price price-sale">$69.00</span> <span className="price">$49.00</span></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-2.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="seller">Best Seller</span>
              <span className="category">Gin</span>
              <h2>Jim Beam Kentucky Straight</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-3.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="new">New Arrival</span>
              <span className="category">Rum</span>
              <h2>Citadelle</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-4.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="category">Rum</span>
              <h2>The Glenlivet</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-5.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="category">Whiskey</span>
              <h2>Black Label</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-6.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="category">Tequila</span>
              <h2>Macallan</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-7.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="category">Vodka</span>
              <h2>Old Monk</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex">
          <div className="product ftco-animate">
            <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-8.jpg)'}}>
              <div className="desc">
                <p className="meta-prod d-flex">
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                  <a href="index.html#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                </p>
              </div>
            </div>
            <div className="text text-center">
              <span className="category">Whiskey</span>
              <h2>Jameson Irish Whiskey</h2>
              <span className="price">$69.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <a href="product.html" className="btn btn-primary d-block">View All Products <span className="fa fa-long-arrow-right" /></a>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section testimony-section img" style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
          <span className="subheading">Testimonial</span>
          <h2 className="mb-3">Happy Clients</h2>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                <div className="text">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="d-flex align-items-center">
                    <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                <div className="text">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="d-flex align-items-center">
                    <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                <div className="text">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="d-flex align-items-center">
                    <div className="user-img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                <div className="text">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="d-flex align-items-center">
                    <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                <div className="text">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="d-flex align-items-center">
                    <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">Blog</span>
          <h2>Recent Blog</h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
          <div className="blog-entry d-flex">
            <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
            </a>
            <div className="text p-4 bg-light">
              <div className="meta">
                <p><span className="fa fa-calendar" /> 23 April 2020</p>
              </div>
              <h3 className="heading mb-3"><a href="index.html#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="index.html#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
          <div className="blog-entry d-flex">
            <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
            </a>
            <div className="text p-4 bg-light">
              <div className="meta">
                <p><span className="fa fa-calendar" /> 23 April 2020</p>
              </div>
              <h3 className="heading mb-3"><a href="index.html#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="index.html#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
          <div className="blog-entry d-flex">
            <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
            </a>
            <div className="text p-4 bg-light">
              <div className="meta">
                <p><span className="fa fa-calendar" /> 23 April 2020</p>
              </div>
              <h3 className="heading mb-3"><a href="index.html#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="index.html#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
          <div className="blog-entry d-flex">
            <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_4.jpg")'}}>
            </a>
            <div className="text p-4 bg-light">
              <div className="meta">
                <p><span className="fa fa-calendar" /> 23 April 2020</p>
              </div>
              <h3 className="heading mb-3"><a href="index.html#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="index.html#" className="btn-custom">Continue <span className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer">
    <div className="container">
      <div className="row mb-5">
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2 logo"><a href="index.html#">Liquor <span>Store</span></a></h2>
            <p>Far far away, behind the word mountains, far from the countries.</p>
            <ul className="ftco-footer-social list-unstyled mt-2">
              <li className="ftco-animate"><a href="index.html#"><span className="fa fa-twitter" /></a></li>
              <li className="ftco-animate"><a href="index.html#"><span className="fa fa-facebook" /></a></li>
              <li className="ftco-animate"><a href="index.html#"><span className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">My Accounts</h2>
            <ul className="list-unstyled">
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />My Account</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Register</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Log In</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />My Order</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Information</h2>
            <ul className="list-unstyled">
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />About us</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Catalog</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Contact us</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Term &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Quick Link</h2>
            <ul className="list-unstyled">
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />New User</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Help Center</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Report Spam</a></li>
              <li><a href="index.html#"><span className="fa fa-chevron-right mr-2" />Faq's</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon fa fa-map marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="index.html#"><span className="icon fa fa-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="index.html#"><span className="icon fa fa-paper-plane pr-4" /><span className="text"><span className="__cf_email__" data-cfemail="650c0b030a251c0a1017010a08040c0b4b060a08">[email&nbsp;protected]</span></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid px-0 py-5 bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0" style={{color: 'rgba(255,255,255,.5)'}}>
              Copyright © All rights reserved | This template is made with <i className="fa fa-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    );
}

export default Home;