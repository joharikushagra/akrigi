import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from "./img/logo2.jpeg";

export function Landing() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };

  const item2 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 200 },
  };

  const item3 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const item4 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 200 },
  };
  return (
    <>
      <div className="App">
        <div className="dots">
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ x: [-300, 0] }}
              transition={{ duration: 5 }}
              variants={item}
              style = {{color:"#FB6090"}}
            ></motion.li>
          </motion.ul>
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ y: [-300, 0] }}
              transition={{ duration: 4 }}
              variants={item2}
            ></motion.li>
          </motion.ul>
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ x: [300, 0] }}
              transition={{ duration: 5 }}
              variants={item3}
              style={{color:"#821D30"}}
            ></motion.li>
          </motion.ul>
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ y: [-300, 0] }}
              transition={{ duration: 4 }}
              variants={item4}
              style = {{color:"#FB6090"}}
            ></motion.li>
          </motion.ul>
        </div>
        <motion.img
          animate={{ y: [-600, -100] }}
          transition={{ duration: 4, delay: 5 }}
          src={logo}
          style={{ width: "550px", height: "150px", marginBottom: 0 }}
        ></motion.img>
        <motion.h5
          className="subhead"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 5, ease: "easeInOut", delay: 8 },
          }}
        >
          Thrift is new trend
        </motion.h5>
        <motion.div
          className="button-div"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut", delay: 12},
          }}
        >
          <button type="button" class="btn btn-danger button">
            Get Started
          </button>
        </motion.div>
      </div>
    </>
  );
}
