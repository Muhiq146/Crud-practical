import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import toast from "react-hot-toast";

// Components Imports
import Header from "../Header";
import { requiredValidation } from "../../../Helper/SmallFunctions/SmallFunctions";
import { ProcessingLoader } from "../../../Helper/ProcessingLoader/Processing";
import Input from "../../../shared-components/Input/Input";
import Button from "../../../shared-components/Button/Button";

const EmployeeForm = () => {
    // Others
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect
    useEffect(() => {
        if (location.pathname.includes("add-employee")) {
            setform(true);
        } else if (location.pathname.includes("edit-employee")) {
            if (location.state?.id) {
                setform(false);
                getEmployeeData(location.state.id);
            } else {
                navigate("/employee");
            }
        }
    }, []);

    const getEmployeeData = async (id) => {
        setisloading(true);
        // api fetch
        const response = {}
        if (response?.data.code) {
            setdata(response.data.data.rows[0]);
        }
        setisloading(false);
    };

    // States
    const [isloading, setisloading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setform] = useState(true);
    const [data, setdata] = useState("");


    //   Validation Format
    const validationFormat = Yup.object().shape({
        name: Yup.string().required(requiredValidation("Employee name")),
        experience: Yup.string().required(requiredValidation("Experience")),
        team: Yup.string().required(requiredValidation("Team")),
        designation: Yup.string().required(requiredValidation("Designation")),
    });

    // Initial values
    const initialValues = {
        name: data?.name || "",
        experience: data?.experience || "",
        team: data?.team || "",
        designation: data?.designation || "",
    };

    // Form submit
    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        setLoading(true);
        try {
            const response = {}
            // const response = await Api(
            //     `buildings${form ? "" : "/" + location.state?.id}`,
            //     `${form ? "POST" : "PATCH"}`,
            //     auth.token,
            //     {
            //         hotel_id: values.hotel,
            //         name: values.name,
            //         is_active: values.isActive,
            //     }
            // );
            if (response?.data.code) {
                setLoading(false);
                setSubmitting(false);
                navigate(-1);
                toast.success((response?.data.message));
            } else {
                toast.error((response?.data.message));
                setSubmitting(false);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setSubmitting(false);
            setLoading(false);
        }
    };

    return (
        <>
            <div className="card">
                {/* Header */}
                <Header title={(form ? "Add employee" : "Edit employee")} />

                <div className="my-10 mx-10">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationFormat}
                        onSubmit={onSubmit}
                        enableReinitialize={!form}
                    >
                        {(formik) => {
                            return (
                                <>

                                    {/* Name */}
                                    <Input
                                        label={"Employee name"}
                                        labelClassname="required fw-bolder fs-5 form-label mb-2"
                                        name="name"
                                        inputClassname="form-control form-control-solid p-2"
                                        value={formik.values.name}
                                        maxLength="40"
                                        touched={formik.touched.name}
                                        onChange={formik.handleChange}
                                        error={formik.errors.name}
                                    />
                                    <Input
                                        mainClass="mt-3"
                                        label={"Experience"}
                                        labelClassname="required fw-bolder fs-5 form-label mb-2"
                                        name="experience"
                                        inputClassname="form-control form-control-solid p-2"
                                        value={formik.values.experience}
                                        maxLength="40"
                                        touched={formik.touched.experience}
                                        onChange={formik.handleChange}
                                        error={formik.errors.experience}
                                    />
                                    <Input
                                        mainClass="mt-3"
                                        label={"Team"}
                                        labelClassname="required fw-bolder fs-5 form-label mb-2"
                                        name="team"
                                        inputClassname="form-control form-control-solid p-2"
                                        value={formik.values.team}
                                        maxLength="40"
                                        touched={formik.touched.team}
                                        onChange={formik.handleChange}
                                        error={formik.errors.team}
                                    />
                                    <Input
                                        mainClass="mt-3"
                                        label={"Designation"}
                                        labelClassname="required fw-bolder fs-5 form-label mb-2"
                                        name="designation"
                                        inputClassname="form-control form-control-solid p-2"
                                        value={formik.values.designation}
                                        maxLength="40"
                                        touched={formik.touched.designation}
                                        onChange={formik.handleChange}
                                        error={formik.errors.designation}
                                    />



                                    {/* Buttons */}
                                    <div className="d-flex justify-content-center pt-10">
                                        <Button
                                            mainClassname="mt-5 me-5"
                                            style={{ textAlign: "left" }}
                                            buttonClassname="btn btn-light-primary"
                                            type="submit"
                                            onClick={() => navigate(-1)}
                                            name={("BACK")}
                                        />
                                        <Button
                                            mainClassname="mt-5"
                                            style={{ textAlign: "left" }}
                                            buttonClassname="btn btn-primary"
                                            type="submit"
                                            onClick={formik.handleSubmit}
                                            disabled={formik.isSubmitting || isloading}
                                            loading={loading}
                                            name={("SAVE")}
                                            loadingName={("PLEASE_WAIT")}
                                        />
                                    </div>
                                </>
                            );
                        }}
                        {/* Form end */}
                    </Formik>
                </div>

                {/* Loader */}
                {isloading && <ProcessingLoader />}
            </div>
        </>
    );
};

export default EmployeeForm;
