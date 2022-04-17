import React, { Component } from 'react'
import axios from 'axios'
import getNews from './apiUtils/api'

export class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }



    render() {
        const { posts } = this.state;

        return (
            <div className="container my-5">
                <div className="row">
                    {posts?.articles?.map((posts) => {
                        return (
                            <div className="col-md-4 mb-3" key={posts.url}>
                                <div className="card">
                                    <img src={posts.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{posts.title}</h5>
                                        <p className="card-text">{posts.description}</p>
                                        <a href={posts.url} className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    }

                </div>
            </div>
        )
    }
}
export default NewsCard