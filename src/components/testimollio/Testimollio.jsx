import React from 'react'
import './testimollio.css'
import { Pagination, Scrollbar } from 'swiper';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { CertiData } from './CertiData'
const Testimollio = () => {
  return (
    <div className='testimonials container section' id='certifications'>
      <h2 className="section_title">Certifications</h2>
      <Swiper className="testimonials_container grid"
       modules={[Pagination,Scrollbar]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{clickable:true}}
       scrollbar={{ draggable: true }}
      >
        {CertiData.map((item,i)=>{
          return(
            <SwiperSlide className="testonial_item" key={i}>
            <div className="thumb">
              <img src={item.image} alt='dd'/>
            </div>
            <h3 className="testi_title">
              {item.title}
            </h3>
            <span className="sub_title">{item.subTitle}</span>
            <div className="comment">{item.desc}</div>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
} 

export default Testimollio