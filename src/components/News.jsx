import React, {useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';



const News=(props)=>{

    const[article,setArcticle]=useState([]);
    const[page,setPage]=useState(1);
    const[loading,setLoading]=useState(false);
    const[totalResult,setTotalResult]=useState(0);
   
    
    
    const updateNews = async (pageNo) => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.size}`
        setLoading( true );
        props.progress(10)
        let data = await fetch(url);
        props.progress(50)
        let parsedData = await data.json();
        props.progress(100)
        setArcticle(parsedData.articles)
        setTotalResult(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(()=>{
      updateNews(page);
      // eslint-disable-next-line
    },[])
    
   const prevClick =  () => {
    setPage(page- 1)
    updateNews(page - 1)
    console.log(page)

    }
    const nextClick = () => {
        setPage(page +1)
        updateNews(page +1)
        console.log(page)

    }
const capitalize=(string)=>{
return string.slice(0,1).toUpperCase() + string.slice(1,string.length).toLowerCase()
}
    
        return (<>
            <div className="container">
                <div className="row">
                    <h1 className="my-5 text-center">Daily Dive- Top {capitalize(props.category)} headlines</h1>
                    {loading && <Spinner />}
                    {!loading && article.map((element) => {
                        return <div key={element.url} className="col-md-4 my-4 ">
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between container my-3">
                    <button disabled={page <= 1} onClick={prevClick} className="btn btn-dark"> &larr; Perv</button>
                    <button disabled={page + 1 > Math.ceil(totalResult / props.size)} onClick={nextClick} className="btn btn-dark">Next &rarr;</button>
                </div>

            </div>
        </>)
    

                }
                export default News;