import React from 'react'
import { product } from '../Data'
function Product() {
    return (
        <>
            <section className="products" id="products">
                <h1 className='heading'>
                    our <span>products</span>
                </h1>
                <div className="box-container">
                    {
                        product.map((item, index) => (
                            <div className="box" key={index}>
                            <div className="icons">

                                <a href="#" className="fas fa-shopping-cart"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                                <div className="image">
                                <img src={item.img} alt='' />
                                </div>
                                <div className="content">
                                    <h3>fresh Food</h3>
                                    <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-alt"></i>
                                       
                                    </div>
                                    <div className="price">
                                        $19.99 <span>$39.99</span>
                                    </div>
                                </div>
                            </div>

                        ))

                    }
                </div>
            </section>
        </>
    )
}

export default Product