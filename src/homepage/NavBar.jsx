import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../API calls/getTopics";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics)
    })
  }, [])
  
  return(
    <div className="NavBar">
      {topics.map((topic) => {
        return(
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            <p>{topic.slug}</p>
          </Link>
        )
      })}
    </div>

  ) 
};

export default NavBar