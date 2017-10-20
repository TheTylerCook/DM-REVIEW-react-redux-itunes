import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResults} from './../../../redux/main_reducer';


class Search extends Component {
    constructor(props) {
        super(props)

        this.state={
            searchTerm: ''
        }
        
        this.handleInput = this.handleInput.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    
      
    handleSearch(e){
        if(e.keyCode === 13){

            //when we want to make our request, we dispatch the action passing in any
            //parameters we'll use:
            this.props.getResults(this.state.searchTerm)

            this.setState({searchTerm: ''})
        }
    }
    
    handleInput(e) {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input placeholder="Search iTunes"
                       onChange={this.handleInput}
                       onKeyDown={this.handleSearch}
                       value={this.state.searchTerm}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {getResults})(Search);