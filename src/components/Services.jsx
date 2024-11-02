import ser1 from '../assets/service1.png'
import ser2 from '../assets/service2.png'
import ser3 from '../assets/service3.png'


export default function Services() {
    return (
        <div className="container">
            <div className="service d-flex flex-row justify-content-between align-items-center py-4">
                <h2>Our Excellent Services</h2>
                <p>Check out our best service you can possibly orders in building your company and don&apos;t forget to ask via our email or our customer service if you are interested in using our services</p>
            </div>
            <div className="items d-flex flex-row justify-content-between align-items-center my-5">
                <div className="item">
                    <img src={ser1} alt="Service 1" />
                    <h3>Industrial</h3>
                    <p>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
                </div>
                <div className="item">
                    <img src={ser2} alt="Service 2" />
                    <h3>Commercial</h3>
                    <p>Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings</p>
                </div>
                <div className="item">
                    <img src={ser3} alt="Service 3" />
                    <h3>Resedential</h3>
                    <p>Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments</p>
                </div>
            </div>
        </div>
    )
}