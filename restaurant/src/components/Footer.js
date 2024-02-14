import React from 'react'

function Footer() {
  return (
    <section className="footer">

      <div className="share">
        <h1>Quick Links</h1>
        <div className="social">

          <a href="#" id="facebook" className="fab fa-facebook-f"></a>
          <a href="#" id="instagram" className="fab fa-instagram"></a>
          <a href="#" id='linkdin' className="fab fa-linkedin"></a>
          <a href="#" id='twiter' className="fab fa-twitter"></a>
        </div>
      </div>

      <div className="adreess">
      <h1>Adress</h1>
        <div>

        
        <u>
          <li>02A, 4th Floor, CITY VISTA, Kolte Patil Developers, A Wing, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014</li>
        </u>
        </div>
        
      </div>
      <div className="pages">
      <h1>Pages</h1>
      <nav className='navbar'>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Menu">Menu</a>
          <a href="#Products">Products</a>
          <a href="#Review">Review</a>
          <a href="#Contact">Contact</a>
          <a href="#Blogs">Blogs</a>
        </nav>
      </div>
    </section>
  )
}
export default Footer


