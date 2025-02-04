import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/Macbook-Air-localhost (7).png",
    title: "Movie-Dashboard",
    desc: "Movie-Dashboard: is a web application that allows users to search for movies, view details, and watch trailers. The application is built using modern web technologies and follows best practices for performance and scalability.",
    link: "https://github.com/mo74x/Movie-Fork1",},
  {
    id: 2,
    img: "/Macbook-Air-localhost (9).png",
    title: "GO-CHAT",
    desc: "GO-CHAT: is a web application that allows users to chat with friends, create groups, and share files. The application is built using modern web technologies and follows best practices for performance and scalability.",
    link: "https://github.com/mo74x/Go_Chat",
  },
  {
    id: 3,
    img: "/Macbook-Air-localhost (3).png",
    title: "ECHO FINANCE DASHBOARD",
    desc: "ECHO-FINANCE: is a web application designed to provide financial insights andpredictions using various charts and data visualizations. The application is builtwith modern web technologies and follows best practices for performance andscalability.",
    link: "https://github.com/mo74x/Echo-Finance",
  },
  {
    id: 4,
    img: "/Macbook-Air-mo74x.github.io.png",
    title: "Mr-Clothing E-Commerce Website",
    desc: "MR-CLOTHING: is a cutting-edge online fashion retailer dedicated to providing stylish and affordable clothing for men and women. Our curated collection features the latest trends, from casual wear to formal attire, ensuring there’s something for everyone. With a userfriendly interface, secure payment options, and fast shipping, we aim to enhance your shopping experience. At MRCLOTHING, we believe in quality, comfort, and self-expression, making fashion accessible to all.",
    link: "https://mo74x.github.io/MR-Clothing/",
  },
  {
    id: 5,
    img: "/Macbook-Air-localhost (5).png",
    title: "REACT AGENCY REAL ESTATE WEBSITE",
    desc: "REACT-AGENCY: a comprehensive real estate web application built using React,featuring a responsive design, dynamic content, and interactive components",
    link: "https://github.com/mo74x/RealEstate-Client",
  },

];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
        <button className="view-btn">View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;