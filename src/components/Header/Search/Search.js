import React, {Component} from 'react';
import axios from 'axios';


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
            axios.get(`https://itunes.apple.com/search?term=${this.state.searchTerm}`)
            .then(res => {
                console.log(res)
            })
            this.setState({
                searchTerm: ''
            })
        }
    }
    
    handleInput(e) {
        this.setState({searchTerm: e.target.value})
    }

    render() {
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

export default Search;