import React from "react";

const Button = ({ buttonType = 'button', extraCss = "", icon = "", label = "", onClick = () => { } }) => {
    // console.log("button rendring");
    return (
        <>
            <button type={buttonType} className={`button-base ${extraCss}`} onClick={onClick}>
                {icon} {label}
            </button>

        </>
    )
}
export default React.memo(Button)