import "./Payment.scss";
import { Link, useNavigate } from "react-router-dom";
import paypal from "../../assets/icons/paypal.png"
import googlepay from "../../assets/icons/google-pay.png"
import applepay from "../../assets/icons/apple-pay.png"
import { useRef } from 'react';
import axios from "axios";


function Payment() {
    const navigate = useNavigate();
    const formRef = useRef();

    const handleUploadSubmit = (event) => {
        event.preventDefault();
        const { first_name , last_name , email , phone } = formRef.current ;

        const newContribution = {
            "first_name": `${first_name.value}`,
            "last_name": `${last_name.value}`,
            "email": `${email.value}`,
            "phone": `${phone.value}`

        }

        const postContribution = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:8080/paymentFive",
                    newContribution
                );
            } catch(e) {
                console.log(e);
            }
        }
        postContribution();
        alert("Thank you for your contribution");
        navigate('/');
    }

    return (
        <>
            <section className="payment">
                <div className="payment-header">
                    <h1 className="payment__title">Contribution</h1>
                </div>
                <div className="form">
                    <form action="" className="form__payment" ref={formRef} onSubmit={handleUploadSubmit}>
                        <div className="form__container">
                            <div className="form__name-inputs">
                                <div className="form__names">
                                    <label htmlFor="first-name" className="form__label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className= "form__names-input"
                                        name="first_name"
                                        id="first_name"
                                        placeholder="First Name..."
                                        // onChange={handleChangeName}
                                        // value={newName}
                                    />
                                </div>
                                <div className="form__names">
                                    <label htmlFor="last-name" className="form__label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className= "form__names-input"
                                        name="last_name"
                                        id="last_name"
                                        placeholder="Last Name..."
                                        // onChange={handleChangeName}
                                        // value={newName}
                                    />
                                </div>
                            </div>
                            <div className="form__email">
                                <label htmlFor="email" className="form__label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className= "form__email-input"
                                    name="email"
                                    id="email"
                                    placeholder="Email..."
                                    // onChange={handleChangeName}
                                    // value={newName}
                                />
                            </div>
                            <div className="form__phone">
                                <label htmlFor="phone" className="form__label">
                                    Phone Number
                                </label>
                                <input
                                    type="integer"
                                    className= "form__phone-input"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone number..."
                                    // onChange={handleChangeName}
                                    // value={newName}
                                />
                            </div>
                            <div className="form-submit">
                                <Link to='/' className="form-submit__button">
                                    Thank You {`>>>`}
                                </Link>
                            </div>
                            <div className="form__payment-options">
                                <div className="form__pay">
                                    <Link>
                                        <img className="form__pay-link" src={paypal} alt="paypal icon" />
                                    </Link>
                                </div>
                                <div className="form__pay">
                                    <Link>
                                        <img className="form__pay-link" src={googlepay} alt="google pay icon" />
                                    </Link>
                                </div>
                                <div className="form__pay">
                                    <Link to='https://www.paypal.com/us/signin'>
                                        <img className="form__pay-link" src={applepay} alt="apple pay icon" />
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Payment;