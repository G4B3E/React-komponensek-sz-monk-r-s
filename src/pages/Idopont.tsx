import  dj from '../components/dj.jpg'

const Idopont = () => {
    
 return (
    <div>
        <h1 id='centerh1'>Időpont foglalás</h1>
        <div id='urlap'>
            

            <form >
                <label>
                <input type="text" name="name" placeholder="Név"/>
                </label><br /><br />
                <label>
                <input type="date" name="datum" placeholder="Rendezvény dátuma"/>
                </label><br /><br />
                <textarea name="leiras" placeholder="Leírás" id='leiras'></textarea>
                <br /><br />
                <button type="submit" value="Küldés">Küldés</button>
            
            </form>
        </div>
    </div>
 );
};


export default Idopont;