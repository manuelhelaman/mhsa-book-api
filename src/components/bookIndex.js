import React, { Component } from 'react';
import DeleteAction from './deleteAction';
import { Link } from "react-router-dom";

export default class BookIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {    //Call the API to update the information
        fetch( "https://mhsa-book-api-practice.herokuapp.com/books" , {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data =>{this.setState({books: data});})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

  render() {
    return (
      <div className='books'>
        <h1>List of books</h1>
        {this.state.books.map((book) => (
            <div key = {book[0]}>
                <h2>Book Title: {book[1]}</h2>
                <h3>Author: {book[2]}</h3>
                <DeleteAction id={book[0]} />
                <Link to={`/view_book/${book[0]}`}>View book</Link>
            </div>
        ))}
      </div>
    );
  }
}
