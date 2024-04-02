import "./Contributions.scss"
import lotus from "../../../assets/icons/lotus.svg"
import nameTag from "../../../assets/icons/name-tag.svg"

function Contributions({ contributors }) {

    return (
        <div className="contributions">
            <div className="contributions__container">
                <div className="contributions__title">
                    <h2 className="contributions__header">
                        Contributions
                    </h2>
                </div>
                <ul className="contributors__list">
                    {
                        contributors?.map((contributor) => (
                            <li className="contributors" key={contributor.id}>
                                <div className="contributors__card">
                                    <div className="contributors-emoji">
                                        <img className="contributors__image" src={nameTag} alt="lotus emoji" />
                                    </div>
                                    <div className="contributors__name">
                                        <div className="contributor-first-name">
                                            {contributor.first_name}
                                        </div>
                                        <div className="contributors-last-name">
                                            {contributor.last_name}
                                        </div>
                                    </div>
                                    <div className="contributors__amount">
                                        $ {contributor.amount}
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>

            </div>
        </div>
    )

}

export default Contributions;
