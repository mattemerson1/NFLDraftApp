import React, { useState } from 'react'


const ClickyButtonState = () => {
    const [buttonClicks, setButtonClicks] = useState(0)

    return (
        <div>
            <button onClick={() => setButtonClicks(buttonClicks + 1)}>
                State One
            </button>
            {buttonClicks}
        </div>
    )
}
export default ClickyButtonState  