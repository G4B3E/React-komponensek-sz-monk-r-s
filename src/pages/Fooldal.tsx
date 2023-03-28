import  dj from '../components/dj.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Fooldal = () => {
 return (
    
    <div id='Fooldal'>
        <h1>Üdvözöllek DJ Petrik weboldalán!</h1>
        <h2>Válassz a fenti lehetőségek közül!</h2>
        <img src={dj} alt="dj" id='dj'/>
    </div>
 );
};

export default Fooldal;