import React from 'react'
import "./flex.css"

const Rows = ({children, centered, justify, align, width, height, padding}) => {

    const classes = "rows " + (centered ? "centered" : "")

    const rowStyles = {
        justifyContent: justify || "",
        alignItems: align || "",
        width: width || "100%",
        height: height || "100%",
        padding: padding || "0",
    };

    return (
        <div
            className={classes}
            style={rowStyles}
        >
            {children}
        </div>  
    )
}

export { Rows }