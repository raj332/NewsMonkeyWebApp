import React from 'react'

const NewsItem=(props)=> {

    
        let { title, description ,imgurl,newsurl,author,date} = props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgurl} className="card-img-top" alt="/"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='text-muuted'>by {author?author:'unknown'} on {date}</small></p>
                            <a href={newsurl} target=" blank"className="btn btn-dark">Read more</a>
                        </div>
                </div>
            </>
        )
    }


export default NewsItem