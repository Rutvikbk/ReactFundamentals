import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReactNews() {
    const [results, setResults] = useState({});
    const {newsTopic} = useParams();

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${newsTopic}&sortBy=popularity&apiKey=28f1892ec64a4ea4a27e95e19a910f3d`)
            .then(res => res.json())
            .then(obj => setResults(obj));
    }, [newsTopic]);

    let output = <></>;

    if(results.status === 'ok') {
        output = results.articles.map((article, index) => (
            <div className="card mb-3" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
                    <p className="card-text">
                        {article.content}
                    </p>
                    <a href={`${article.url}`} target="_blank">View Article</a>
                </div>
            </div>
        ));
    }

    return (
        <>
            <h5>{newsTopic}</h5>
            <div>
                {output}
            </div>
        </>
    )
}

export default ReactNews;