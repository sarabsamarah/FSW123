import {useState, useEffect} from 'react'

function GiphySearch({initialQuery}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [imgSrc, setImageSrc] = useState('');
    const [alt, setAlt] = useState('');

    const fetchImage= (query = initialQuery) => {
        
        setLoading(true);
        const encodedQuery = encodeURIComponent(query);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=CJ8SHAasEqNzxMie1pqFXmibnzHcwng7&tag=${encodedQuery}`;

        fetch(url, { method: 'GET',
        }).then(function(response){
            if(response.ok){
                return response.json()
            }
            return Promise.reject(response);
        }).then(function({data}) {
        
        setLoading(false);
        setImageSrc(data.fixed_height_downsampled_url);
        console.log(data.fixed_height_downsampled_url);
        setAlt(data.title);
    }).catch(function(error) {
        setLoading(false);
        setError(true);
        console.warn('That was not right', error);
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchImage(e.target.query.value)
        console.log(e.target.query.value)
    }

    useEffect(fetchImage, [initialQuery]);

    return(
        <div>
            <h1>Game Of GIFS</h1>
            <br /><br/>
            <header>
                <form onSubmit={handleSubmit}>
                    <input type="text" name= "query" placeholder='Enter Search Term' style= {{width:'225px'}} /> &nbsp;
                    <button type='submit'>Search</button>
                </form>
            </header>
            <br /><br />
            <main>
                <section>
                    
                    {loading &&<div>Loading...</div>}
                    {error && <div>Error</div>}
                    {/* {!loading && !error && imgSrc &&<div>Returned 0 results</div>}
                    {!loading && !error && !imgSrc && 
                    <div><img src={imgSrc} alt={alt} style={{width:'300px'}}/></div>} */}
                    <img src={imgSrc} alt={alt}/>
                </section>
            </main>
        </div>
    )
}

export default GiphySearch