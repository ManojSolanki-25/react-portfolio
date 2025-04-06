import React from "react";
import QuestionList from "./QuestionList";

class Home extends React.Component{
 render () {
  return (
    <div className="w-full p-4">
      <h1 className="font-bold underline">Welcome to rails 8 with react portfolio</h1>
      <p>Hey I am Manoj Solanki.</p>
      <QuestionList/>
    </div>
  );
 }
};

export default Home;