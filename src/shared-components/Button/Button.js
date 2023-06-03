import React from 'react'

const Button = ({ mainClassname, style, buttonClassname, type, onClick, disabled, loading, name, loadingName }) => {
    return (
        <div className={mainClassname} style={style}>
            <button
                className={buttonClassname}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {!loading ? (
                    <span className="indicator-label">{name}</span>
                ) : (
                    <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                    >
                        {loadingName}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                )}
            </button>
        </div>
    )
}

export default Button