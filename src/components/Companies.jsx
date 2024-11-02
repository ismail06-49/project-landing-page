import adira from '../assets/Adira-Finance.png'
import adhimix from '../assets/Adhimix-RMC.png'
import holcim from '../assets/Holcim.png'
import mnx from '../assets/Mnc .png'
import telkomsel from '../assets/Telkomsel.png'

export default function Companies() {

    return (
        <div className='container'>
            <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center">
                <li><img src={adira} alt="Adira logo" /></li>
                <li><img src={adhimix} alt="Adhimix logo" /></li>
                <li><img src={holcim} alt="Holcim logo" /></li>
                <li><img src={mnx} alt="Mn logo" /></li>
                <li><img src={telkomsel} alt="Telkomsel logo" /></li>
            </ul>
        </div>
    )
}