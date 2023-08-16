import React from 'react'
import './Blog.css';
function Blog() {
  return (
    
      <div className="blog-container">
          <div className="section-header">
           
            <h3 className="blog-header-title" > My blog</h3>
            <p className="text">
              Why Investing in a Professional Website is
               the Best Decision You'll Make For Your Business?
            </p><hr/><br/>
            <p className="text">
            In today's digital age, having a strong online presence is essential for any business looking
            to succeed. Your Website is often the first impression potential customers have of your business,
            and it can be the deciding factor in whether or not they choose to do business with you.
            In this blog post, we'll explore why investing in a professional website is the best decision you'll
            make for your business.
            </p>
          </div>

          <div className="blog-wrapper">
            <div className="blog-wrap">
              <img
                src="./img/shapes/points3.png"
                alt=""
                className="points points-sq"
              />

              <div className="blog-card">
                <div className="blog-image">
                  <img src="./img/blog1.png" alt="" />
                </div>

                <div className="blog-content">
                  <div className="blog-info">
                    <h5 className="blog-date">April, 25 2023</h5>
                  
                  </div>
                  <h3 className="title-sm">Build credibility</h3>
                  <p className="blog-text">
                   A professional website can help build credibility for your business.
                   A well-designed and well-maintained website shows potential customers that you take you take
                   your business seriously and are committed to providing high-quality products or services.
                  </p>
               
                </div>
              </div>
            </div>

            <div className="blog-wrap">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="./img/blog2.png" alt="" />
                </div>

                <div className="blog-content">
                  <div className="blog-info">
                    <h5 className="blog-date">April, 25 2023</h5>
               </div>
                  <h3 className="title-sm">Increase visibility</h3>
                  <p className="blog-text">
                    With a professional website, your business can reach a wider audience online. By
                    optimizing your website for search engines and using social media and other marketing tactics,
                    you can attract more visitor to your site and increase your visibility.
                  </p>
                  
                
                </div>
              </div>
            </div>

            <div class="blog-wrap">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="./img/blog3.png" alt="" />
                </div>

                <div className="blog-content">
                  <div className="blog-info">
                    <h5 className="blog-date">April, 25 2023</h5>
                    <h5 className="blog-user"><i class="fas fa-user"></i>Admin</h5>
                  </div>
                  <h3 className="title-sm">Conclusion</h3>
                  <p className="blog-text">
                   Investing in a professional website is one of the best decision you can make
                   for your business.By building credibility,increasing visibility,improving customer experience,
                   standing out from the competition, and adapting to changing trends, a professional website
                    can help your  business succeed in today's digital age. Contact us today to learn more about 
                    how we can  help you create a website that meets the unique needs of your business
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
    
  )
}
export default Blog;