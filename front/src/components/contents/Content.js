import React, { Component } from 'react';
import Item from '../item/Item';

class Content extends Component {
    render() {
	const { contents, onToggle, onRemove } = this.props;

	return (
		<div>
		  <Item text="안녕"/>
		  <Item text="리액트"/>
		  <Item text="반가워"/>
		</div>
	);
    };
};

export default Content;
