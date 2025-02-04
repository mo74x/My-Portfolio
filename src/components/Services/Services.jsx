import { Canvas } from '@react-three/fiber';
import './Services.css';
import Computer from './3d-models/Computer';
const services = [

    {

        id: 1,
        title: 'Front-End Development',
        image: '/reactjs-svgrepo-com.png',

    },
    {
        id: 2,
        title: 'Back-End Development',
        image: '/nodejs-icon-logo-svgrepo-com.png',

    },
    {
        id: 3,
        title: 'Software Development',  
        image: '/computer-svgrepo-com.png',
    }
]
const Services = () => {
    return (
        <div className="services">
            <div className='left-side1'>
                <h1 className='tilte-text'>How Can I Help?</h1>
                <div className="servicestomake">
                    {services.map((service) => (
                        <div key={service.id} className="service">
                           <div className="icon">
                            <img src={service.image} alt={service.title} />
                           </div>
                           <div className="sevicetitle">
                            <h2>{service.title}</h2>
                           </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className='right-side'>
                <Computer />
            </div>
        </div>
    );
}
export default Services;