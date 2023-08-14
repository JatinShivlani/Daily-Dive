import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';



export default class News extends Component {
    


    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: false,
            page: 1,
            totalResult: 0
        }
    }
    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.size}`
        this.setState({ loading: true })
        this.props.progress(10)
        let data = await fetch(url);
        this.props.progress(50)
        let parsedData = await data.json();
        this.props.progress(100)
        this.setState({
            article: parsedData.articles,
            totalResult: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    prevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews()

    }
    nextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews()

    }
capitalize=(string)=>{
return string.slice(0,1).toUpperCase() + string.slice(1,string.length).toLowerCase()
}
    render() {
        return (<>
            <div className="container">
                <div className="row">
                    <h1 className="my-5 text-center">Daily Dive- Top {this.capitalize(this.props.category)} headlines</h1>
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.article.map((element) => {
                        return <div key={element.url} className="col-md-4 my-4 ">
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between container my-3">
                    <button disabled={this.state.page <= 1} onClick={this.prevClick} className="btn btn-dark"> &larr; Perv</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.size)} onClick={this.nextClick} className="btn btn-dark">Next &rarr;</button>
                </div>

            </div>
        </>)
    }
}
