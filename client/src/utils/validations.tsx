import { Errors, UserFields } from "./types";

interface FormValidations {
    userFields: UserFields,
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
}

export const formValidations = ({ userFields, setErrors }: FormValidations) => {
    const { username, password, confPassword } = userFields;
    let errors: Errors = {};

    if (username?.trim() === "") {
        errors.username = "Username is Required"
        console.log("yes")
    }
    if (password?.length < 6) {
        errors.password = "Password should be 6 character long"
    }
    if (password?.trim() === "") {
        errors.password = "Password is Required"
    }
    if (confPassword?.trim() === "" && confPassword !== undefined) {
        errors.confPassword = "Confirm Password is Required";
    }
    if (password?.trim() !== confPassword?.trim() && confPassword !== undefined) {
        errors.confPassword = "Password and Confirm Password should be same"
    }
    console.log("errors :- ", errors);
    setErrors(errors);

    return Object.keys(errors).length === 0 ? true : false
}

