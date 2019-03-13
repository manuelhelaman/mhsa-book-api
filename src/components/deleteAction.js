import React from 'react';
import { Link } from 'react-router-dom';

export default function DeleteAction(props) {

    function bookDelete() {
        fetch(`http://127.0.0.1:5000/delete/${props.id}`, {
            method: "Delete",
            headers: {
                "content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    return(
        <div>
            <Link onClick={bookDelete} to={"/deleted_book"}>Delete</Link>
            {console.log(props.id)}
        </div>
    )

} 