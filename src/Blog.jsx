import React from 'react';
import Article from './Article';


class Blog extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      const authorName = "hogehoge"
      return(
        <div>
          <Article
            title={"React"}
            order={2}
            flag={true}
            author={authorName}/>
          <Article title={"タイトル1"}/>
          <Article title={"タイトル2"}/>
          <Article title={"タイトル3"}/>
        </div>

      )
    }
}

export default Blog
