import React, {Component} from 'react';
import DeleteAction from './deleteAction';
import UpdateBook from './updateBook';

export default class ViewBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            singleBook: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params    
        fetch( `http://127.0.0.1:5000/book/${id}`, {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data =>{this.setState({singleBook: data});})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    render() {
        return (
            <div className="app">
                <h1>Book information</h1>
                <div>{this.state.singleBook[1]}</div>
                <div>{this.state.singleBook[2]}</div>
                <DeleteAction id={this.state.singleBook[0]} />
                <UpdateBook ourProp = {this.state.singleBook}/>
            </div>
        );
    }
}