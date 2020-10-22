import React from 'react';
import './IndexTemplate.css';

const IndexTemplate = ({form, children}) => {
    return (
	<main className="index-template">
	  <div className="title">
	    말씀통통
	  </div>
	  <section className="form-wrapper">
	    {form}
	  </section>
	  <section className="todos-wrapper">
	    {children}
	  </section>
	</main>
    );
};

export default IndexTemplate;
