import React, { Component } from 'react';

export default class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            author: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()  //prevent default for refreshing the page
        let title = this.state.title
        let author = this.state.author  
        fetch( "http://127.0.0.1:5000/book/input", { //So we can post new authors and titles
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({title: title, author: author})
        })
        .then(response => {return response.json();})
        .then(responseData =>{return responseData;})
        .then(() => this.props.history.push('/'))
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

  render() {
    return (
      <div className='books'>
        <h1>Add a book below</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            <label>Author</label>
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
            <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
