import React from 'react';

const Article = (props)=>{
  let publishState = "";
  if(props.flag)
  {
    publishState="trueやで";
  }
  else
  {
    publishState="falseやで";
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.order}</p>
      <p>{publishState}</p>
      <p>{props.author}</p>
    </div>
  )
};


export default Article;
