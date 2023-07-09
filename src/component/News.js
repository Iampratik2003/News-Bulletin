import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general',
        
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
        
    }
    capitalize=(s)=>
{
    return s[0].toUpperCase() + s.slice(1);
}
    constructor(props){
        super(props);
        // console.log("hello");
        this.state = {
            articles : [],
            page: 1,
            loading:'hidden',
        }
        document.title = `${this.capitalize(this.props.category)}-NewsBulletin`;
    }


    

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a84d92bdd3af4c1ca494d4e7b6ad9347&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:'none'});
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: 'hidden',
        })
        
    }
    
    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a84d92bdd3af4c1ca494d4e7b6ad9347&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:'none'});
        let data = await fetch(url);
        let parsedData = await data.json();
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        this.setState({
            page : this.state.page-1,
            articles : parsedData.articles,
            loading: 'hidden',
        })
    }
    
    

    handleNextClick = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a84d92bdd3af4c1ca494d4e7b6ad9347&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        this.setState({loading:'none'});
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page : this.state.page+1,
            articles : parsedData.articles,
            loading: 'hidden',
        })
    }
    }

  render() {
    return (
    <div className='container my-3'>
        <h2 className="text-center">NewsBulletin - Top Updates on {this.capitalize(this.props.category)} Category</h2>
        <div className={`visually-${this.state.loading} text-center`}>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        {/* {this.state.loading && <Spin/>} */}

        <div className="row">
            {this.state.loading==='hidden' && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} 
                author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
            })}
            
            
        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Prev</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
        
        
    </div>
    )
  }
}

export default News