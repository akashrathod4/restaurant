import React from 'react'
import { review } from '../Data';
import qoute from './qoute.jpg';
function Review() {
  return (
<section className='review'>
    <h1 className="heading">
        customer's <span>Review</span></h1>
        
        <div className="box-container">
            {
                review.map((item,index)=>(
                    <div className="box" key={index}>

                    <img src={qoute} alt='' className='qoute' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corporis accusamus cumque hic molestias, praesentium...
                    </p>
                    <img src={item.img} alt='' className='user'/>
                    <h3>AKASH RATHOD</h3>
                    <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-alt"></i>
                                       
                                    </div>
                    </div>
                ))
            }
        </div>
    
</section>
  )
}

export default Review