"use strict";
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const elementi = [
    {
        id: "Izdelek 1",
        value: "Opis izdelka 1",
        cena: 4
    },
    {
        id: "Izdelek 2",
        value: "Opis izdelka 2",
        cena: 2
    },
    {
        id: "Izdelek 3",
        value: "Opis izdelka 3",
        cena: 4
    },
    {
        id: "Izdelek 4",
        value: "Opis izdelka 4",
        cena: 12
    },
    {
        id: "Izdelek 5",
        value: "Opis izdelka 5",
        cena: 6
    },
    {
        id: "Izdelek 6",
        value: "Opis izdelka 6",
        cena: 3
    },
    {
        id: "Izdelek 7",
        value: "Opis izdelka 7",
        cena: 6
    },
    {
        id: "Izdelek 8",
        value: "Opis izdelka 8",
        cena: 3
    },
    {
        id: "Izdelek 9",
        value: "Opis izdelka 9",
        cena: 3
    },
    {
        id: "Izdelek 10",
        value: "Opis izdelka 10",
        cena: 3
    },
    {
        id: "Izdelek 11",
        value: "Opis izdelka 11",
        cena: 3
    },
    {
        id: "Izdelek 12",
        value: "Opis izdelka 12",
        cena: 3
    },
    {
        id: "Izdelek 13",
        value: "Opis izdelka 13",
        cena: 3
    },
    {
        id: "Izdelek 14",
        value: "Opis izdelka 14",
        cena: 3
    },
    {
        id: "Izdelek 15",
        value: "Opis izdelka 15",
        cena: 3
    },
    {
        id: "Izdelek 16",
        value: "Opis izdelka 16",
        cena: 3
    },
    {
        id: "Izdelek 17",
        value: "Opis izdelka 17",
        cena: 3
    },
    {
        id: "Izdelek 18",
        value: "Opis izdelka 18",
        cena: 3
    }
];
const CreateCard = ({ childToParent  })=>{
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    function addItem(element) {
        setItems([
            ...items,
            element
        ]);
    }
    function removeItem(element) {
        let temp = items.filter((i)=>i !== element);
        setItems(temp);
    }
    //Vprašaj za tale useEffect ali je vredu!!
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        childToParent(items);
    }, [
        childToParent,
        items
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            margin: 10
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
            children: elementi.map((element)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
                                    children: element.id
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
                                    children: [
                                        element.cena,
                                        "$"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
                                    children: element.value
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
                            extra: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ui two buttons",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        disabled: items.some((i)=>i === element),
                                        primary: true,
                                        color: "green",
                                        onClick: ()=>addItem(element),
                                        children: "Dodaj v ko\u0161arico"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        disabled: !items.some((i)=>i === element),
                                        color: "red",
                                        onClick: ()=>removeItem(element),
                                        children: "Odstrani"
                                    })
                                ]
                            })
                        })
                    ]
                }, element.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCard);


/***/ })

};
;