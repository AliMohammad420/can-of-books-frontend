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

  getBooks = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({ books: res.data });
    console.log(this.state);
  }


  componentDidMount() {
    console.log("inside the componentDidMount");
    this.getBooks();
  }

  render() {


    return (
      <>
        <h2 style={{textAlign: 'center'}}>Your Books Library</h2>

        {this.state.books.length ? (
           <Carousel style={{margin: '50px 10%'}}>
            {
              this.state.books.map(bb=>{ 
                return(
           <Carousel.Item>
             <img
               className="d-block w-100"
               alt={bb.title}
             />
             <Carousel.Caption style={{backgroundColor: 'darkgray'}}>
               <h3>{bb.title}</h3>
               <p>{bb.description}</p>
               <p>{bb.status}</p>
             </Carousel.Caption>
           </Carousel.Item>
                )})
            }
         </Carousel>
          
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;