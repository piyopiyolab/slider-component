//imports

import './Slider.css'
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import { useState } from 'react'



function Slider({ sliderData }) {

    const [sliderIndex, setSliderIndex] = useState(1);

    const toggleImage = (indexPayload) => {
        let newIndex;
        if (indexPayload + sliderIndex > sliderData.length) {
            newIndex = 1;
        } else if (indexPayload + sliderIndex < 1) {
            newIndex = sliderData.length
        } else {
            newIndex = indexPayload + sliderIndex
        }

        return setSliderIndex(newIndex);
    }

    return (
        <>


            <p className="index-info">{sliderIndex} / {sliderData.length}</p>
            <div className="slider">



                <p className="img-info">{sliderData.find(dataIndex => dataIndex.id === sliderIndex).description}</p>


                <img src={`/images/img-${sliderIndex}.jpg`} alt="" className="slider-img" />

                <button
                    onClick={() => toggleImage(-1)}
                    className="navigation-button prev-button">
                    <img src={leftChevron} alt="left icon" />
                </button>

                <button
                    onClick={() => toggleImage(+1)}
                    className="navigation-button next-button">
                    <img src={rightChevron} alt="right icon" />
                </button>


            </div>

        </>
    )
}
export default Slider