import GiphySearch from './GiphySearch'
import './GiphyStyle.css'

function SearchApp(){

    return (
        <div className = 'GiphyDiv'>
            <GiphySearch initialQuery='dog'/>
        </div>
    );
}  

export default SearchApp