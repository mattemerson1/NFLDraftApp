import React, { useState } from 'react'

const ClickyButtonProps = (props) => {
    const { buttonClicks, setButtonClicks} = props;

    return (
        <button onClick={() => setButtonClicks(buttonClicks + 1)}>
            Props One
        </button>
    )
}

export default ClickyButtonProps