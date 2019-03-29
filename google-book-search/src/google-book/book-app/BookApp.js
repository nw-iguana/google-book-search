import React, {Component} from 'react';
import Header from '../header/Header';
import SearchBox from '../search-box/SearchBox';

class BookApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
             results: []
        };
    }

    searchSubmit(event, search) {
        event.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                results: responseJson.items
            });
        })
    }     

    render() {
        return (
            <div>
                <Header />
                <SearchBox searchSubmit={this.searchSubmit}/>
            </div>
        )}
}

export default BookApp