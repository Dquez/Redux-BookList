import React, { Component } from 'react';
import { connect } from "react-redux";


class BookDetail extends Component {
    render(){
        if (!this.props.book){
            return <div>No book selected yet</div>
        }
       
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    // whatever is returned from here will show up as props inside of book detail component
    return {
        book: state.activeBook
    }
}

// Promote BookDetail from a component to a container
export default connect(mapStateToProps)(BookDetail);