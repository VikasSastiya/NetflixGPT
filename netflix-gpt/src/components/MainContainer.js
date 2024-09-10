import React from 'react'
import VideoTitle from "../components/VideoTitle.js";
import VideoBackground from "../components/VideoBackground.js"

const MainContainer = () => {
  return (
    <div>
        <VideoTitle title="mern" description="The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node.js, with each component playing a role in the development process. MongoDB serves as a document-oriented database that can efficiently store data in JSON format. Express is a web application framework that provides a set of features to streamline the assembly of web applications. React is a front-end JavaScript library that offers a large toolkit for crafting user interfaces. Node.js is the runtime environment for execution of JavaScript code on the server side, coordinating communication between front-end and back-end components.

As a group, these components make the MERN stack a preferred choice for developers seeking an efficient, full-stack development framework."/>
      <VideoBackground/>
    </div>
  )
}

export default MainContainer