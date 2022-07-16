import './notfound.css'
import error from './assets/404.png'

function Error(){
    return(
        <div className='notfound'>

        <img src={error} alt="404 NOT FOUND"/>
    </div>
    )
}

export default Error;