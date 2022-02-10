"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/registration";
exports.ids = ["pages/registration"];
exports.modules = {

/***/ "./components/Registration/Registration.jsx":
/*!**************************************************!*\
  !*** ./components/Registration/Registration.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst initialValues = {\n    username: '',\n    password: '',\n    first_name: '',\n    last_name: ''\n};\nconst SignupSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({\n    username: yup__WEBPACK_IMPORTED_MODULE_4__.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),\n    password: yup__WEBPACK_IMPORTED_MODULE_4__.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Введите пароль!'),\n    first_name: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('Введите Имя корректно!'),\n    last_name: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('Введите Фамилию корректно!')\n});\nfunction Registration() {\n    const handleSubmit = (values)=>{\n        console.log(values);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: true,\n            validate: SignupSchema,\n            onSubmit: (values)=>handleSubmit(values)\n            ,\n            children: ({ values , errors , touched , handleChange , handleSubmit  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            id: \"outlined-basic\",\n                            label: \"Username\",\n                            variant: \"outlined\",\n                            name: \"username\",\n                            value: values.username,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this),\n                        errors.username && touched.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: 'text-danger',\n                            children: errors.username\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            id: \"outlined-basic\",\n                            label: \"Password\",\n                            variant: \"outlined\",\n                            name: \"password\",\n                            value: values.password,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        errors.password && touched.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: 'text-danger',\n                            children: errors.password\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            id: \"outlined-basic\",\n                            label: \"First name\",\n                            name: \"first_name\",\n                            variant: \"outlined\",\n                            value: values.first_name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        errors.first_name && touched.first_name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: 'text-danger',\n                            children: errors.first_name\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            id: \"outlined-basic\",\n                            label: \"Last name\",\n                            variant: \"outlined\",\n                            name: \"last_name\",\n                            value: values.last_name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        errors.last_name && touched.last_name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: 'text-danger',\n                            children: errors.last_name\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            type: \"submit\",\n                            variant: \"contained\",\n                            children: \"Регистрация\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aibek/Desktop/kavKev/KavKev/components/Registration/Registration.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1k7QUFDVTtBQUNyQjtBQUNlO0FBRXpDLEtBQUssQ0FBQ00sYUFBYSxHQUFHLENBQUM7SUFDckJDLFFBQVEsRUFBRSxDQUFFO0lBQ1pDLFFBQVEsRUFBRSxDQUFFO0lBQ1pDLFVBQVUsRUFBRSxDQUFFO0lBQ2RDLFNBQVMsRUFBRSxDQUFFO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsWUFBWSxHQUFHUCx1Q0FBVSxHQUFHUyxLQUFLLENBQUMsQ0FBQztJQUN2Q04sUUFBUSxFQUFFSCx1Q0FBVSxHQUNqQlcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFZLGFBQ25CQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQVcsWUFDbkJDLFFBQVEsQ0FBQyxDQUFVO0lBQ3RCVCxRQUFRLEVBQUVKLHVDQUFVLEdBQ2pCVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQVksYUFDbkJDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBVyxZQUNuQkMsUUFBUSxDQUFDLENBQWlCO0lBQ2hCUixVQUFILEVBQUVMLHVDQUFVLEdBQUdhLFFBQVEsQ0FBQyxDQUF3QjtJQUN2Q1AsU0FBVixFQUFFTix1Q0FBVSxHQUFHYSxRQUFRLENBQUMsQ0FBNEI7QUFDeEMsQ0FBdEI7U0FFUUMsWUFBWSxHQUFHLENBQUM7SUFDdkIsS0FBSyxDQUFDQyxZQUFZLElBQUlDLE1BQU0sR0FBSyxDQUFDO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtJQUNwQixDQUFDO0lBRUQsTUFBTSw2RUFDSEcsQ0FBRzs4RkFDRHRCLDBDQUFNO1lBQ0xLLGFBQWE7WUFDYmtCLFFBQVEsRUFBRWIsWUFBWTtZQUN0QmMsUUFBUSxHQUFHTCxNQUFNLEdBQUtELFlBQVksQ0FBQ0MsTUFBTTs7dUJBRXZDLENBQUMsQ0FBQ0EsTUFBTSxHQUFFTSxNQUFNLEdBQUVDLE9BQU8sR0FBRUMsWUFBWSxHQUFFVCxZQUFZLEVBQUMsQ0FBQywrRUFDdERqQix3Q0FBSTs7b0dBQ0ZDLGdFQUFTOzRCQUNSMEIsRUFBRSxFQUFDLENBQWdCOzRCQUNuQkMsS0FBSyxFQUFDLENBQVU7NEJBQ2hCQyxPQUFPLEVBQUMsQ0FBVTs0QkFDbEJDLElBQUksRUFBQyxDQUFVOzRCQUNmQyxLQUFLLEVBQUViLE1BQU0sQ0FBQ2IsUUFBUTs0QkFDdEIyQixRQUFRLEVBQUVOLFlBQVk7Ozs7Ozt3QkFFdkJGLE1BQU0sQ0FBQ25CLFFBQVEsSUFBSW9CLE9BQU8sQ0FBQ3BCLFFBQVEsZ0ZBQ2pDNEIsQ0FBQzs0QkFBQ0MsU0FBUyxFQUFFLENBQWE7c0NBQUdWLE1BQU0sQ0FBQ25CLFFBQVE7Ozs7OztvR0FFOUNKLGdFQUFTOzRCQUNSMEIsRUFBRSxFQUFDLENBQWdCOzRCQUNuQkMsS0FBSyxFQUFDLENBQVU7NEJBQ2hCQyxPQUFPLEVBQUMsQ0FBVTs0QkFDbEJDLElBQUksRUFBQyxDQUFVOzRCQUNmQyxLQUFLLEVBQUViLE1BQU0sQ0FBQ1osUUFBUTs0QkFDdEIwQixRQUFRLEVBQUVOLFlBQVk7Ozs7Ozt3QkFFdkJGLE1BQU0sQ0FBQ2xCLFFBQVEsSUFBSW1CLE9BQU8sQ0FBQ25CLFFBQVEsZ0ZBQ2pDMkIsQ0FBQzs0QkFBQ0MsU0FBUyxFQUFFLENBQWE7c0NBQUdWLE1BQU0sQ0FBQ2xCLFFBQVE7Ozs7OztvR0FFOUNMLGdFQUFTOzRCQUNSMEIsRUFBRSxFQUFDLENBQWdCOzRCQUNuQkMsS0FBSyxFQUFDLENBQVk7NEJBQ2xCRSxJQUFJLEVBQUMsQ0FBWTs0QkFDakJELE9BQU8sRUFBQyxDQUFVOzRCQUNsQkUsS0FBSyxFQUFFYixNQUFNLENBQUNYLFVBQVU7NEJBQ3hCeUIsUUFBUSxFQUFFTixZQUFZOzs7Ozs7d0JBRXZCRixNQUFNLENBQUNqQixVQUFVLElBQUlrQixPQUFPLENBQUNsQixVQUFVLGdGQUNyQzBCLENBQUM7NEJBQUNDLFNBQVMsRUFBRSxDQUFhO3NDQUFHVixNQUFNLENBQUNqQixVQUFVOzs7Ozs7b0dBRWhETixnRUFBUzs0QkFDUjBCLEVBQUUsRUFBQyxDQUFnQjs0QkFDbkJDLEtBQUssRUFBQyxDQUFXOzRCQUNqQkMsT0FBTyxFQUFDLENBQVU7NEJBQ2xCQyxJQUFJLEVBQUMsQ0FBVzs0QkFDaEJDLEtBQUssRUFBRWIsTUFBTSxDQUFDVixTQUFTOzRCQUN2QndCLFFBQVEsRUFBRU4sWUFBWTs7Ozs7O3dCQUV2QkYsTUFBTSxDQUFDaEIsU0FBUyxJQUFJaUIsT0FBTyxDQUFDakIsU0FBUyxnRkFDbkN5QixDQUFDOzRCQUFDQyxTQUFTLEVBQUUsQ0FBYTtzQ0FBR1YsTUFBTSxDQUFDaEIsU0FBUzs7Ozs7O29HQUUvQ0wsNkRBQU07NEJBQUNnQyxJQUFJLEVBQUMsQ0FBUTs0QkFBQ04sT0FBTyxFQUFDLENBQVc7c0NBQUMsQ0FFMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0FBRUQsaUVBQWViLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2thdmtldi8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi5qc3g/ZWZjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgdXNlcm5hbWU6ICcnLFxuICBwYXNzd29yZDogJycsXG4gIGZpcnN0X25hbWU6ICcnLFxuICBsYXN0X25hbWU6ICcnLFxufTtcblxuY29uc3QgU2lnbnVwU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgJ1RvbyBTaG9ydCEnKVxuICAgIC5tYXgoNTAsICdUb28gTG9uZyEnKVxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAgIC5taW4oMiwgJ1RvbyBTaG9ydCEnKVxuICAgIC5tYXgoNTAsICdUb28gTG9uZyEnKVxuICAgIC5yZXF1aXJlZCgn0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMIScpLFxuICBmaXJzdF9uYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ9CS0LLQtdC00LjRgtC1INCY0LzRjyDQutC+0YDRgNC10LrRgtC90L4hJyksXG4gIGxhc3RfbmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSDQpNCw0LzQuNC70LjRjiDQutC+0YDRgNC10LrRgtC90L4hJyksXG59KTtcblxuZnVuY3Rpb24gUmVnaXN0cmF0aW9uKCkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXNcbiAgICAgICAgdmFsaWRhdGU9e1NpZ251cFNjaGVtYX1cbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZVN1Ym1pdCh2YWx1ZXMpfVxuICAgICAgPlxuICAgICAgICB7KHsgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xuICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWUgJiYgKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyd0ZXh0LWRhbmdlcid9PntlcnJvcnMudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xuICAgICAgICAgICAgICBsYWJlbD0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyd0ZXh0LWRhbmdlcid9PntlcnJvcnMucGFzc3dvcmR9PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xuICAgICAgICAgICAgICBsYWJlbD0nRmlyc3QgbmFtZSdcbiAgICAgICAgICAgICAgbmFtZT0nZmlyc3RfbmFtZSdcbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlyc3RfbmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmZpcnN0X25hbWUgJiYgdG91Y2hlZC5maXJzdF9uYW1lICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsndGV4dC1kYW5nZXInfT57ZXJyb3JzLmZpcnN0X25hbWV9PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9J291dGxpbmVkLWJhc2ljJ1xuICAgICAgICAgICAgICBsYWJlbD0nTGFzdCBuYW1lJ1xuICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgbmFtZT0nbGFzdF9uYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxhc3RfbmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmxhc3RfbmFtZSAmJiB0b3VjaGVkLmxhc3RfbmFtZSAmJiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J3RleHQtZGFuZ2VyJ30+e2Vycm9ycy5sYXN0X25hbWV9PC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnPlxuICAgICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRm9ybSIsIlRleHRGaWVsZCIsIll1cCIsIkJ1dHRvbiIsImluaXRpYWxWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIlNpZ251cFNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwic3RyaW5nIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJSZWdpc3RyYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidmFsaWRhdGUiLCJvblN1Ym1pdCIsImVycm9ycyIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJpZCIsImxhYmVsIiwidmFyaWFudCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicCIsImNsYXNzTmFtZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Registration/Registration.jsx\n");

/***/ }),

/***/ "./pages/registration.jsx":
/*!********************************!*\
  !*** ./pages/registration.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Registration_Registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Registration/Registration */ \"./components/Registration/Registration.jsx\");\n\n\n\nfunction registration() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Registration_Registration__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/aibek/Desktop/kavKev/KavKev/pages/registration.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3RyYXRpb24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUM7U0FFekRFLFlBQVksR0FBRyxDQUFDO0lBQ3ZCLE1BQU07OEZBRURELDZFQUFZOzs7Ozs7QUFHbkIsQ0FBQztBQUVELGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXZrZXYvLi9wYWdlcy9yZWdpc3RyYXRpb24uanN4PzA2YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9SZWdpc3RyYXRpb24vUmVnaXN0cmF0aW9uJztcblxuZnVuY3Rpb24gcmVnaXN0cmF0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UmVnaXN0cmF0aW9uIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJhdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/registration.jsx\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/registration.jsx"));
module.exports = __webpack_exports__;

})();