import './Slider.css'
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
function Slider() {
    return (
        <>

            =<p className="index-info">3 / 5</p>
            <div className="slider">
                <p className="image-info">image info</p>
                <img src="/images/img-3.jpg" alt="" className="slider-img" />
            </div>
            <button className="navigation-button prev-button">
                <img src={leftChevron} alt="left icon" />
            </button>
            <button className="navigation-button next-button">
                <img src={rightChevron} alt="right icon" />
            </button>
        </>
    )
}
export default Slider