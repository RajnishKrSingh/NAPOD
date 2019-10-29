import React from 'react';

const Photo = props => (
	<div>
	    <h3 className="tc f3">{props.photo.title}</h3>
	    <div class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
	    	<img class="mw-100" src={props.photo.url} alt={props.photo.title} />
	    </div>
        <p className="tc f4">{props.photo.explanation}</p>
    </div> 
)

export default Photo;