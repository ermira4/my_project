import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import './biographyPage.scss';


const authors = {
  0: {
    name: 'John Wood',
    role: 'Founder & CEO',
    bio: `John Wood is the visionary behind our furniture shop, combining his passion for modern design with a dedication to quality craftsmanship. 
          With over 20 years of experience in the industry, John founded the company to provide customers with elegant, durable furniture that stands the test of time. 
          Under his leadership, the shop has grown from a small workshop to a renowned brand known for its innovative designs and exceptional customer service.`
  },
  1: {
    name: 'Emily Carver',
    role: 'Master Craftsman',
    bio: `Emily Carver is the heart and soul of our workshop. With a background in fine woodworking and a meticulous attention to detail, 
          Emily has spent her career perfecting the art of furniture making. Her handcrafted pieces are celebrated for their beauty, durability, and unique design. 
          Emily's dedication to her craft ensures that every item that leaves our shop is a work of art.`
  },
  2: {
    name: 'Liam Mason',
    role: 'Chief Designer',
    bio: `Liam Mason is the creative force behind our most iconic collections. With a degree in interior design and a flair for innovation, 
          Liam has a knack for transforming ideas into reality. His designs blend functionality with aesthetics, creating furniture that is both stylish and practical. 
          Liam is always exploring new trends and materials, ensuring our collections stay ahead of the curve.`
  },
  3: {
    name: 'Sophia Harris',
    role: 'Operations Manager',
    bio: `Sophia Harris keeps the wheels turning at our furniture shop. As Operations Manager, she oversees everything from production schedules to supply chain logistics, 
          ensuring that every part of our business runs smoothly. Sophia's strategic thinking and problem-solving skills have been instrumental in streamlining our operations and improving efficiency. 
          Her ability to manage complex processes with ease is a key reason for our continued success.`
  },
  4: {
    name: 'Oliver Green',
    role: 'Marketing Director',
    bio: `Oliver Green is the mastermind behind our brand's image and outreach. With a background in marketing and a keen understanding of consumer behavior, 
          Oliver crafts compelling campaigns that connect with our audience. His work has helped to establish our brand as a leader in the furniture industry. 
          Oliver's creativity and strategic thinking have played a crucial role in growing our customer base and driving sales.`
  },
  5: {
    name: 'Ethan Stone',
    role: 'Logistics Coordinator',
    bio: `Ethan Stone is the unsung hero of our logistics team. Responsible for coordinating the delivery of our products, 
          Ethan ensures that every order arrives on time and in perfect condition. His expertise in supply chain management and his ability to troubleshoot potential issues have made him an invaluable member of our team. 
          Ethan's dedication to excellence ensures that our customers receive their furniture exactly when they need it.`
  },
  6: {
    name: 'James Reed',
    role: 'Customer Service Lead',
    bio: `James Reed leads our customer service team with grace and professionalism. With a natural talent for communication and a deep understanding of our products, 
          James is committed to providing exceptional support to every customer. Whether assisting with product selection or resolving a concern, James ensures that every interaction leaves the customer satisfied and confident in their purchase.`
  },
  7: {
    name: 'Isabella Knight',
    role: 'Sales Manager',
    bio: `Isabella Knight heads our sales department with a passion for helping customers find the perfect pieces for their homes. 
          With a background in sales and a deep knowledge of our product line, Isabella is always ready to offer personalized recommendations and expert advice. 
          Her friendly demeanor and commitment to customer satisfaction make her a favorite among our clients.`
  },
  8: {
    name: 'Ava Turner',
    role: 'Interior Designer',
    bio: `Ava Turner is the creative mind behind our interior design services. With a background in design and a keen eye for detail, 
          Ava helps our customers create beautiful, functional spaces with our furniture. She works closely with clients to understand their needs and preferences, 
          offering customized solutions that bring their vision to life. Ava's ability to blend style and practicality makes her an invaluable asset to our team.`
  },
  9: {
    name: 'Henry Walker',
    role: 'Warehouse Manager',
    bio: `Henry Walker is the backbone of our warehouse operations. With years of experience in inventory management, 
          Henry ensures that our stock is always organized, accessible, and ready for dispatch. His attention to detail and dedication to efficiency have made our warehouse one of the most reliable aspects of our business. 
          Henry's commitment to keeping our operations running smoothly is a key factor in our ability to meet customer demands.`
  },
  10: {
    name: 'Lucas Young',
    role: 'E-commerce Specialist',
    bio: `Lucas Young is the driving force behind our online presence. As our E-commerce Specialist, Lucas manages our online store, ensuring that our customers have a seamless shopping experience. 
          With a background in digital marketing and web design, Lucas continuously optimizes our website for user experience, making it easy for customers to find and purchase the products they love.`
  },
  11: {
    name: 'Mia Brown',
    role: 'Furniture Assembler',
    bio: `Mia Brown is responsible for bringing our designs to life. As our lead Furniture Assembler, Mia takes great pride in ensuring that each piece of furniture is perfectly assembled and meets our high standards. 
          With a background in carpentry and a passion for precision, Mia's work is a critical step in delivering the quality products our customers expect.`
  },
  12: {
    name: 'Charlotte King',
    role: 'Customer Support Representative',
    bio: `Charlotte King is the friendly voice on the other end of the line, always ready to assist our customers with any inquiries or issues. 
          With her excellent communication skills and a deep understanding of our products, Charlotte ensures that our customers feel heard and valued. 
          Her dedication to providing top-notch support has earned her high praise from both colleagues and customers alike.`
  },
  13: {
    name: 'Michael Wright',
    role: 'Finance Manager',
    bio: `Michael Wright is the financial steward of our company, ensuring that we remain on solid financial footing. 
          With a background in accounting and finance, Michael manages our budgets, forecasts, and financial planning with precision. 
          His strategic financial management has been instrumental in our company's growth and stability, allowing us to continue investing in innovation and quality.`
  },
  14: {
    name: 'Amelia Scott',
    role: 'Content Creator',
    bio: `Amelia Scott is the creative storyteller behind our brand. As our Content Creator, Amelia crafts engaging content for our marketing campaigns, social media, and website. 
          With a flair for writing and a deep understanding of our brand's voice, Amelia's work helps to showcase our products in the best possible light, drawing in customers with compelling stories and visuals.`
  },
  15: {
    name: 'Daniel Hill',
    role: 'Supply Chain Manager',
    bio: `Daniel Hill ensures that our supply chain is efficient and reliable, keeping our production line moving smoothly. 
          With a background in logistics and supply chain management, Daniel oversees everything from sourcing materials to coordinating deliveries. 
          His expertise ensures that we always have the resources we need to create our furniture, without delays or disruptions.`
  },
};

const Biography = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    if (!id || !authors[id]) {
      navigate('/aboutus'); 
    } else {
      setAuthor(authors[id]);
    }
  }, [id, navigate]);

  if (!author) {
    return null; 
  }

  return (
    <div className="biography-page">
      <h1>{author.name}</h1>
      <h2>{author.role}</h2>
      <p>{author.bio}</p>
    </div>
  );
};

export default Biography;


