import './prova.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Prova() {

    function primaryRequest() {
        var url = 'https://opentdb.com/api.php?amount=30&category=15';

        fetch(url)
         .then((response) => {
             return response.json()
         })
         .then((result) => {
            for (var i = 0; i < result.length; i++) {
                videogame.push(result[i]);
            }
            
            
            renderizar();
            
         })

    }

    return (
        <>
            <Header />
            <div>
                <h5>Video Games (<span id="countGames"></span>)</h5>

            </div>
            <Footer />
                
        </>
    )
}

export default Prova; 