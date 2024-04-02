import './Count.scss';
import { Link } from "react-router-dom";
import samosa from "../../assets/images/samosa.jpeg"
import { useEffect, useState } from 'react';
import axios from "axios";
import Contributions from './count-subcomponent/Contributions';
const { REACT_APP_BACKEND_URL } = process.env;



function Count() {
    // console.log("hello");
    const [count, setCount] = useState(0);
    const [contributors, setContributors] = useState([])

    useEffect( () => {
        const getContributors = async () => {
        try {
            const response = await axios.get(
                `${REACT_APP_BACKEND_URL}/`
            );
            // console.log(response.data);
            setContributors(response.data);
        }
        catch (e) {
            console.log(e);
        }
        setCount(10);
    };
    getContributors();

    }, [])



    return (
        <>
            <section className='count'>
                <div className="count-main">
                    <div className="seva-header">
                        <h1 className="seva-header__title">
                            SEVA
                        </h1>
                    </div>
                    <div className="count__title">
                        <h2>Samosas</h2>
                    </div>
                    <div className="count__date">
                        March 24, 2024
                    </div>
                    <div className="count-container">
                        <div className="count-target">
                            <div className="count-target__label">
                                TARGET:
                            </div>
                            100
                        </div>
                        <div className="count-live">
                            {count}
                            <img className='count-live__samosa-image' src={samosa} />
                        </div>
                    </div>
                    <div className="deadline">
                        Deadline: <br />Saturday March 23, 2024 at 12:00 am
                    </div>
                    <div className="payment-links">
                        <div className="payment-value">
                            <Link to="/paymentFive" className="payment-value__link">
                                $ 5 CAD
                            </Link>
                        </div>
                        <div className="payment-value">
                            <Link to="/paymentTen" className="payment-value__link">
                                $ 10 CAD
                            </Link>
                        </div>
                    </div>
                </div>
                <Contributions contributors= {contributors}/>
            </section>
        </>
    )
}

export default Count;