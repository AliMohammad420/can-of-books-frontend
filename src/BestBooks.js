import React from 'react';
import axios from 'axios';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount=()=>{
    const server = process.env.REACT_APP_SERVER;
  

  axios.get(`${server}/books/getbooks?books=${books}`)
  .then(result => {
    console.log(result.data);
    this.setState({
      booksData:result.data.books,
    });
    console.log(this.state.booksData)
  })
  .catch(err => {
    console.log(err ,'book collection is empty.');
  })
}

  render() {

    return (
      <Carousel className="carousel">
      {this.state.booksData.map((books)=>(
             <Carousel.Item>
            <Carousel.Caption>
              <h3>{books.name}</h3>
              <p>{books.description}</p>
              <p>{books.status}</p>
             </Carousel.Caption>
           </Carousel.Item>
      ))}

     </Carousel>
    )
  }
}

export default BestBooks;
