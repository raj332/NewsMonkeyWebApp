import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
   document.title=`${props.category}-NewsMonkey`;


    const updatenews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=faaefb6f84c44b6b83327d90c03de668&page=${page}&pageSize=${props.pagesize}`;
        setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults)
        setloading(false);

        props.setProgress(100)
    }

    useEffect(() => {
    updatenews();
    }, [])

    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=faaefb6f84c44b6b83327d90c03de668&page=${page+1}&pageSize=${props.pagesize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
      

    }

    return (
        <> 

            <div className='container my-3'>
                <h3 className="text-center" style={{marginTop:'5rem'}}>NewsMonkey Top Headlines</h3>
                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                ><div className='container'>
                        <div className='row my-3'>

                            {articles.map((element) => {
                                return (
                                    <div className='col-md-4' key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage ? element.urlToImage : "https://i.hurimg.com/i/hdn/75/200x200/6274f3c74e3fe02e8851d3ca.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
            </div>
        </>
    )
}
News.defaultProps = {
    counrty: 'in',
    pagesize: 9,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}
export default News 