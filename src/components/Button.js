import React from "react";

const Button = ({ buttonType = 'button', extraCss = "", icon = "", label = "",totalCount="", onClick = () => { } }) => {
    // console.log("button rendring");
    return (
        <>
            <button key={totalCount} type={buttonType} className={`button-base ${extraCss}`} onClick={onClick}>
                {totalCount} {icon} {label}
            </button>

        </>
    )
}
export default Button