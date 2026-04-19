import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to our story! We are a team of passionate individuals dedicated to providing the best products and services to our customers. Our journey began with a simple idea, and we have grown into a company that values innovation, quality, and customer satisfaction.
          </p>
          <p>
            With years of experience in the industry, we have built a reputation for excellence and reliability. Our commitment to continuous improvement ensures that we stay ahead of the curve and deliver exceptional value to our clients.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore dolor odit cum, molestiae repellat tempora amet vero a maxime. Dignissimos deleniti voluptatum reiciendis, nihil temporibus dolores minus eius enim!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam! Sit fugiat commodi sunt soluta tenetur suscipit, laborum ullam obcaecati perspiciatis ducimus!</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam! Sit fugiat commodi sunt soluta tenetur suscipit, laborum ullam obcaecati perspiciatis ducimus!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam! Sit fugiat commodi sunt soluta tenetur suscipit, laborum ullam obcaecati perspiciatis ducimus!</p>
        </div>

      </div>

      <NewsletterBox />
    
    </div>
  )
}

export default About
