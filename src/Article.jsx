import React from 'react';

const Article = (props)=>{
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">状態</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={()=>props.toggle()}/>
    </div>
  )
};


export default Article;
