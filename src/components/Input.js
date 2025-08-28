import React from "react"

const Input = ({ value, type, placeholder, label, name, parentDivCss = "", onChange = () => { }, required = false }) => {
    // console.log("input render....");
    return (
        <div className={`input_container ${parentDivCss}`}>
            <span className="input_label_pos">{label}{required && <span className="required-star"> * </span>}</span>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
export default React.memo(Input)