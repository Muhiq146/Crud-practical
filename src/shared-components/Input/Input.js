import React from "react";
import { Field } from "formik";

function Input(props) {
    const { mainClass, labelChildren, labelChildrenSpace, name,
        label, inputType, type, children, iconClassname,
        iconChildren, labelClassname, inputClassname,
        value, inputDisabled, maxLength, placeholder,
        touched, error, formik, ...rest } = props;

    return (
        <div className={mainClass}>
            {label && <label className={labelClassname} htmlFor={name}>{label}</label>}
            {children}

            {(<Field
                name={name} value={value}
                type={inputType} maxLength={maxLength}
                disabled={inputDisabled} placeholder={placeholder}
                className={inputClassname}
                {...rest}
            />)
            }
            {touched && error && (
                <div className="fv-plugins-message-container text-danger">
                    <div className="fv-help-block">
                        <span role="alert">{error}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Input;
