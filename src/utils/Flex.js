import React from 'react'
import "./flex.css"

const Rows = ({ children, centered, justify, align, width, height, padding }) => {

    const classes = "rows " + (centered ? "centered" : "")

    const rowStyles = {
        justifyContent: justify || "",
        alignItems: align || "",
        width: width || "auto",
        height: height || "auto",
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

const Columns = ({ children, centered, justify, align, width, height, padding }) => {

    const classes = "columns " + (centered ? "centered" : "")

    const columnsStyles = {
        justifyContent: justify || "",
        alignItems: align || "",
        width: width || "auto",
        height: height || "auto",
        padding: padding || "0",
    };

    return (
        <div
            className={classes}
            style={columnsStyles}
        >
            {children}
        </div>
    )
}


export { Rows, Columns }