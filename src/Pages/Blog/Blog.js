import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogPage'>
            <section className="blogHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='a_title'>My Blogs</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="questions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ques">
                                <h3>Difference between javascript and nodejs?</h3>
                                <p className='mb-0'>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages.Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser.</p>
                            </div>
                            <div className="ques">
                                <h3> When should you use nodejs and when should you use mongodb?</h3>
                                <p className='mb-0'>When we want to store some data we can use mongodb, on the other hand NodeJS helps us to to connect our client site to database by it's server site.MongoDB represents the data as a collection of documents and We can access and show the data to you client site with Node JS</p>
                            </div>
                            <div className="ques">
                                <h3>Differences between sql and nosql databases?</h3>
                                <p className='mb-0'>Main difference SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. Compared to SQL database NoSQL databases provide much more flexibility and scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;