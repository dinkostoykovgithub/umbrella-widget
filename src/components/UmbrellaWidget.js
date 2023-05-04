import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import { Rating } from 'react-simple-star-rating'

const UmbrellaWidget = () => {
    return (
        <div className="wrapper">
            <div className="heading-container">
                <div className="main-heading">Les meilleurs casinos en ligne du moment</div>
                <div className="sub-heading-area">
                    Tous nos casinos:<span className="sub-heading-item"><span className="lock-icon"></span> Autorise</span> <span className="sub-heading-item">< BsFillCheckCircleFill className="svg-green-colored" /> Revu par nos experts</span>
                </div>
            </div>
            <div className="content-area">
                <div className="grid-area">
                <div className="area__item area__item1">
                    <div className="area__user-choice">
                    <span className="area-label">User choice</span>
                    <span className="area__user-num">01</span>
                    </div>
                </div>
                <div className="area__item area__item2">
                    <div className="info-area">
                    <span className="info-icon">< IoIosInformationCircleOutline /></span>
                    </div>
                </div>
                <div className="area__item area__item3">
                    <div className="rating-area">
                    <div className="rating-heading">PlayOjo Casino</div>
                        <div className="rating">
                            <div className="rating__stars">
                            {/* < BsStarFill />< BsStarFill />< BsStarFill />< BsStarFill />< BsStarHalf /> */}
                            <Rating
                                allowFraction
                                initialValue={4.5}
                                emptyIcon={<BsStar size={32} fill="#ffc400" />}
                                fillIcon={<BsStarFill size={32} fill="#ffc400" />}
                            />
                            </div>
                            <div className="rating__score">4.5/5</div>
                        </div>
                    </div>
                </div>
                <div className="area__item area__item4">
                    <div className="bonus">
                        <span className="bonus__top-label"><span className="bonus__top-label-text">Bonus</span></span>
                        <span className="area-label">Exclusivite</span>
                        <div className="bonus__info">
                            <div className="bonus__info-title">250 CA$</div>
                            <div className="bonus__info-subtitle">+80 Tours Gratuits</div>
                        </div>
                    </div>
                </div>
                <div className="area__item area__item5">
                    <div className="checklist">
                        <div className="checklist__item">
                            <BsFillCheckCircleFill className="svg-green-colored"/><span className="checklist__item-label">Retraits rapides</span>
                        </div>
                        <div className="checklist__item">
                            <BsFillCheckCircleFill className="svg-green-colored"/><span className="checklist__item-label">Enregistrement en douceur</span>
                        </div>
                        <div className="checklist__item">
                            <BsFillCheckCircleFill className="svg-green-colored"/><span className="checklist__item-label">Benefices non imposables</span>
                        </div>
                    </div>
                </div>
                <div className="area__item area__item6">
                    <div className="play-area">
                        <span className="primary-button">Jouer</span>
                    </div>
                </div>
                <div className="area__item area__item7">
                    <div className="terms-area">
                    <span className="bold-text">18+</span>
                    <span className="regular-text"> - Minimum bet amount - 100 - Some other important information - Terms&Conditions text - </span> <a href='/' className='terms__link'><span className="bold-text">Terms&ConditiionsLink.com</span></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default UmbrellaWidget;