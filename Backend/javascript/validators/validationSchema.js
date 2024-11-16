export const facultyValidation = {
    facultyName: {
        notEmpty: true,
        isString: {
            errorMessage: "FacultyName Must be a String",
        },
        isLength: {
            options: {
                min: 2,
                max: 20,
            },
            errorMessage: "FacultyName min 2 and max 20 characters",
        },
    },
    mobileNumber: {
        isMobilePhone: {
            errorMessage: "pls check your Mobile Number",
        },
    },
    qualification: {
        notEmpty: true,
        isString: {
            errorMessage: "Qualification Must be a String",
        },
    },
    experience: {
        isNumeric: {
            errorMessage: "Experience must be a Number",
        },
    },
    email: {
        isEmail: {
            errorMessage: "pls check your Email",
        },
    },
    address: {
        isString: {
            errorMessage: "Address Must be a String",
        },
    },
};
export const studentValidation = {
    studentName: {
        notEmpty: true,
        isString: {
            errorMessage: "StudentName Must be a String",
        },
        isLength: {
            options: {
                min: 2,
                max: 20,
            },
            errorMessage: "StudentName min 2 and max 20 characters",
        },
    },
    studentEmail: {
        isEmail: {
            errorMessage: "pls check your Email",
        },
    },
    mobileNumber: {
        isMobilePhone: {
            errorMessage: "pls check your Mobile Number",
        },
    },
    semester: {
        isString: {
            errorMessage: "Semester Must be a String",
        },
    },
    address: {
        isString: {
            errorMessage: "Address Must be a String",
        },
    },
};
