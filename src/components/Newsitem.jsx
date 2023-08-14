import React from 'react'

const Newsitem=(props)=>{
        let { title, description, imageUrl, url, author, time, source} = props

        return (
            <div className='container'>
                <div className="card">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
                        {source?source:'Unknown'}
                    </span>
                    <img src={!imageUrl ? 'https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg' : imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{!description ? `To access the full report with in-depth analysis, expert perspectives, and comprehensive coverage, click on 'Read More.' Dive into the complete story to gain a deeper understanding of the issues that matter most."` : description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : 'Unknown'} <br /> On " {time ? new Date(time).toGMTString() : 'Unknown time'} "</small></p>
                        <a href={url} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
export default Newsitem;