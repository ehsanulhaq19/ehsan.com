import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        In my portfolio, I'm excited to showcase a comprehensive full-stack project that seamlessly integrates 
        cutting-edge technologies and multiple payment gateways to deliver a robust e-commerce platform. Leveraging 
        React.js and Vue.js for dynamic front-end interfaces, and Nuxt.js for server-side rendering, I crafted an 
        intuitive user experience that ensures high performance and SEO-friendliness. The back-end infrastructure, 
        powered by Laravel, Symfony, and Django, offers scalability and security, enabling seamless communication 
        between the client and server layers. Additionally, Node.js serves as the backbone for real-time data 
        processing and WebSocket communication. What sets this project apart is its seamless integration of multiple 
        payment gateways, including PayPal, Stripe, and many more, providing customers with flexibility and security during 
        transactions. Whether it's handling user authentication, managing product catalogs, or processing payments 
        securely, this project exemplifies my proficiency in full-stack development and my ability to deliver robust, 
        scalable solutions that meet the demands of modern e-commerce."
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
