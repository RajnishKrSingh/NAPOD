import React from 'react';

const DateInput = props => (
	<form class="pa4 black-80 fw7 f4" onSubmit = {props.changeDate}>
     Enter a Date
     (YYYY-MM-DD):
     <input />
     <input type="submit" />
    </form>
)


export default DateInput;