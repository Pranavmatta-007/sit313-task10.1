import React from 'react'
import "./section-style.css"
import pic1 from "./game.png"
import pic2 from "./web.png"
import pic3 from "./mypic.jpeg"
import pic4 from "./star.png"
import { faker } from '@faker-js/faker';

const Data = [
    {
      img_u: pic1,
      Title: "News Article",
      Desc: "  Description - sectetur adipisicing elit.",
      img_b: pic4,
      rating: '4.5',
      text_b: faker.lorem.words(2),
    },
    {
      img_u: pic2,
      Title: "Computer Articles",
      Desc: "  Description - sectetur adipisicing elit.",
      img_b: pic4,
      rating: '4.5',
      text_b: faker.lorem.words(2),
    },
    {
      img_u: pic3,
      Title: "React Articles",
      Desc: "  Description - sectetur adipisicing elit.",
      img_b: pic4,
      rating: '4.4',
      text_b: faker.lorem.words(2),
    },
  ];

function SecFTN(){
    return(
        <>
     <section className='article'>
     <h2 className='headings'>Featured Articles</h2>

        <div className="outer-box">
        
          {Data.map((card_content) => {
            return(
                <div className="card">

            <div className="card-image">
              <img
                src={card_content.img_u}
                alt={""}
                className="article_images"
              />
            </div>
              <div className='information'>
              <h2>{card_content.Title}</h2>
              <h4 className="card-desc">{card_content.Desc}</h4>
                </div>
              <hr className="line" />
              <div className="bottom-section">
                <div className='ratings'><img src={card_content.img_b} alt="" className="star_img" /><span>{card_content.rating}</span></div>
                <h4>{card_content.text_b}</h4>
              </div>
              </div>

            );
            

            
            
            })}
        
      </div>
      <button>See All Articles</button>
      <h2 className='headings'>Featured Tutorials</h2>

      <div className="outer-box">
        
          {Data.map((card_content) => {
            return(
                <div className="card">

            <div className="card-image">
              <img
                src={card_content.img_u}
                alt={""}
                className="article_images"
              />
            </div>
              <div className='information'>
              <h2>{card_content.Title}</h2>
              <h4 className="card-desc">{card_content.Desc}</h4>
                </div>
              <hr className="line" />
              <div className="bottom-section">
                <div className='ratings'><img src={card_content.img_b} alt="" className="star_img" /><span>{card_content.rating}</span></div>
                <h4>{card_content.text_b}</h4>
              </div>
              </div>

            );
            

            
            
            })}
        
      </div>
      <button>See All Articles</button>
     </section>
     </>
    )
        
 };

 export default SecFTN;