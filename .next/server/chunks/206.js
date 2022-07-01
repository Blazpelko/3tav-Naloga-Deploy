"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const countryOptions = [
    {
        key: "af",
        value: "af",
        flag: "af",
        text: "Afghanistan"
    },
    {
        key: "ax",
        value: "ax",
        flag: "ax",
        text: "Aland Islands"
    },
    {
        key: "al",
        value: "al",
        flag: "al",
        text: "Albania"
    },
    {
        key: "dz",
        value: "dz",
        flag: "dz",
        text: "Algeria"
    },
    {
        key: "as",
        value: "as",
        flag: "as",
        text: "American Samoa"
    },
    {
        key: "ad",
        value: "ad",
        flag: "ad",
        text: "Andorra"
    },
    {
        key: "ao",
        value: "ao",
        flag: "ao",
        text: "Angola"
    },
    {
        key: "ai",
        value: "ai",
        flag: "ai",
        text: "Anguilla"
    },
    {
        key: "ag",
        value: "ag",
        flag: "ag",
        text: "Antigua"
    },
    {
        key: "ar",
        value: "ar",
        flag: "ar",
        text: "Argentina"
    },
    {
        key: "am",
        value: "am",
        flag: "am",
        text: "Armenia"
    },
    {
        key: "aw",
        value: "aw",
        flag: "aw",
        text: "Aruba"
    },
    {
        key: "au",
        value: "au",
        flag: "au",
        text: "Australia"
    },
    {
        key: "at",
        value: "at",
        flag: "at",
        text: "Austria"
    },
    {
        key: "az",
        value: "az",
        flag: "az",
        text: "Azerbaijan"
    },
    {
        key: "bs",
        value: "bs",
        flag: "bs",
        text: "Bahamas"
    },
    {
        key: "bh",
        value: "bh",
        flag: "bh",
        text: "Bahrain"
    },
    {
        key: "bd",
        value: "bd",
        flag: "bd",
        text: "Bangladesh"
    },
    {
        key: "bb",
        value: "bb",
        flag: "bb",
        text: "Barbados"
    },
    {
        key: "by",
        value: "by",
        flag: "by",
        text: "Belarus"
    },
    {
        key: "be",
        value: "be",
        flag: "be",
        text: "Belgium"
    },
    {
        key: "bz",
        value: "bz",
        flag: "bz",
        text: "Belize"
    },
    {
        key: "bj",
        value: "bj",
        flag: "bj",
        text: "Benin"
    }
];
//test
const SubmitForm = (selectedItems)=>{
    const { 0: { name , email , address , country , submittedName , submittedEmail , submittedAddress , submittedCountry  } , 1: setParams  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        address: "",
        country: "",
        submittedName: "",
        submittedEmail: "",
        submittedAddress: "",
        submittedCountry: ""
    });
    function cena() {
        let sum = 0;
        selectedItems.selectedItems.forEach(function(i) {
            sum += i.cena;
        });
        return sum;
    }
    const handleChange = (e, data)=>{
        setParams((currentState)=>({
                ...currentState,
                [data.name]: data.value
            }));
    };
    const handleSubmit = (event)=>{
        setParams({
            name: "",
            email: "",
            address: "",
            country: "",
            submittedName: name,
            submittedEmail: email,
            submittedAddress: address,
            submittedCountry: country
        });
        //Da se stran ne redirecta
        event.preventDefault();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            margin: 10
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
                    width: 10,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
                        raised: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Za naro\u010Dilo izpolnite podatke:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
                                            label: "Vnesite ime",
                                            required: true,
                                            placeholder: "Ime",
                                            name: "name",
                                            value: name,
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
                                            label: "Vnesite email",
                                            required: true,
                                            placeholder: "Email",
                                            name: "email",
                                            value: email,
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
                                            label: "Vnesite naslov",
                                            required: true,
                                            placeholder: "Naslov",
                                            name: "address",
                                            value: address,
                                            onChange: handleChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Dropdown, {
                                            label: "Dr\u017Eava",
                                            required: true,
                                            placeholder: "Country",
                                            name: "country",
                                            value: country,
                                            onChange: handleChange,
                                            fluid: true,
                                            search: true,
                                            selection: true,
                                            options: countryOptions
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Button, {
                                        disabled: name.length === 0 || address.length === 0 || email.length === 0 || country.length === 0,
                                        content: "Potrdi"
                                    })
                                ]
                            }),
                            submittedName.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Naro\u010Dilo kerirano:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Naslovnik: ",
                                                    submittedName
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Email: ",
                                                    submittedEmail
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Naslov: ",
                                                    submittedAddress
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Dr\u017Eava: ",
                                                    submittedCountry
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    "Za pla\u010Dilo: ",
                                                    cena(),
                                                    "$"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid.Column, {
                    width: 6,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
                            raised: true,
                            children: (typeof selectedItems.selectedItems !== "undefined" && selectedItems.selectedItems.length) === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "V ko\u0161arici ni elementov "
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "V ko\u0161arici so elementi:"
                                    }),
                                    typeof selectedItems.selectedItems !== "undefined" && selectedItems.selectedItems.map((temp)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                temp.id,
                                                " | ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                    children: [
                                                        temp.cena,
                                                        " $ "
                                                    ]
                                                })
                                            ]
                                        }, temp.id))
                                ]
                            })
                        }),
                        (typeof selectedItems.selectedItems !== "undefined" && selectedItems.selectedItems.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
                            raised: true,
                            children: [
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Skupaj: ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                            children: [
                                                cena(),
                                                "$"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitForm);


/***/ })

};
;