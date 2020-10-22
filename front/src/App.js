import React,{Component} from 'react';
import IndexTemplate from './components/index/IndexTemplate';
import Form from './components/form/Form';
import Content from './components/contents/Content';

class App extends Component{
    render(){
        return (
	    <IndexTemplate form={<Form/>}>
                <Content/>
            </IndexTemplate>
        );
    }
}

export default App;
