import React from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";

const CustomToast = () => {
    return (
        <Toaster position="top-right" reverseOrder={true}
            toastOptions={{
                style: {
                    cursor: "pointer",
                },

                success: {
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                },
                error: {
                    style: {
                        background: "#ff6666",
                        color: "#fff",
                    },
                },
            }}
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <div className="d-flex" onClick={() => toast.dismiss(t.id)}>
                            {icon}
                            {message}
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster >
    );
};

export default CustomToast;
