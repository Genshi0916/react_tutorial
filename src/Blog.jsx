import React from 'react';
import Article from './Article';


class Blog extends React.Component{
    constructor(props){
      super(props);
      this.state={
        isPublished:false
      }
    }

    togglePubliched=()=>{
      this.setState({
        isPublished:!this.state.isPublished
      })
    };

    render(){
      return(
        <div>
          <Article
            title={"React"} isPublished={this.state.isPublished} toggle={()=>this.togglePubliched()} />
        </div>

      )
    }
}

export default Blog
