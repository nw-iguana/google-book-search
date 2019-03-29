import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    searchUpdateState(event) {
        this.setState({search: event.target.value})
    } 
    render() {
        return (
        <div>
            <form>
                <label for="search-box">Search:
                    <input type="text" name="search" value={this.state.search} onChange={this.searchUpdateState.bind(this)} />
                    <button type="submit" onClick={(event) => this.props.searchSubmit(event, this.state.search)}>Search</button>
                </label>
            </form>
        </div>
    )}
}


export default SearchBox