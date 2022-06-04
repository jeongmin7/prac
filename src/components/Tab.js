"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const dummyData_1 = __importDefault(require("../dummyData"));
const OptionModal_1 = __importDefault(require("./OptionModal"));
const TabMenu = styled_components_1.default.ul`
  background-color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  text-align: center;
  list-style: none;

  .submenu {
    width: 100%;
    background-color: white;
    cursor: pointer;
  }

  .focused {
    background-color: #036635;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;
const MenuTab2 = styled_components_1.default.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
`;
const MenuContainer = styled_components_1.default.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  border: 1px solid black;
`;
const MenuImgContainer = styled_components_1.default.div`
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  cursor: pointer;

  &.menu {
    border: 1px solid black;
  }
`;
const MenuImg = styled_components_1.default.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
const MenuPrice = styled_components_1.default.div`
  width: 100%;
  height: 20%;
  margin-top: -42px;
  border: 1px solid black;
  text-align: center;
  font-weight: bold;
`;
// const Desc = styled.div`
//   text-align: center;
// `;
const Tab = ({ select, setSelect }) => {
  const [currentTab1, setCurrentTab1] = (0, react_1.useState)(0);
  const [currentTab2, setCurrentTab2] = (0, react_1.useState)(0);
  const [openModal, setOpenModal] = (0, react_1.useState)(false);
  //   const menuArr = [
  //     { name: 'Tab1', content: 'Tab menu ONE' },
  //     { name: 'Tab2', content: 'Tab menu TWO' },
  //     { name: 'Tab3', content: 'Tab menu THREE' }
  //   ];
  const menuArr1 = dummyData_1.default.map((el) => {
    return { name: el.name };
  });
  const menuArr2 = dummyData_1.default[currentTab1].children.map((el) => {
    return { name: el.name };
  });
  const selectTabHandler1 = (index) => {
    setCurrentTab1(index);
    setCurrentTab2(0);
  };
  const selectTabHandler2 = (index) => {
    setCurrentTab2(index);
  };
  const selectMenuHandler = (e) => {
    const selectedMenu = {
      name: e.target.name.split("  ")[0],
      price: Number(e.target.name.split("  ")[1]),
      quantity: select.quantity,
    };
    setSelect(selectedMenu);
    if (selectedMenu.name !== "undefined") {
      setOpenModal(!openModal);
    }
    console.log(selectedMenu);
  };
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
    children: (0, jsx_runtime_1.jsxs)("div", {
      children: [
        (0, jsx_runtime_1.jsx)(TabMenu, {
          children: menuArr1.map((ele, index) => {
            return (0, jsx_runtime_1.jsx)(
              "li",
              Object.assign(
                {
                  className:
                    currentTab1 === index ? "submenu focused" : "submenu",
                  onClick: () => selectTabHandler1(index),
                },
                { children: ele.name }
              ),
              index
            );
          }),
        }),
        currentTab1 !== 3
          ? (0, jsx_runtime_1.jsx)(TabMenu, {
              children: menuArr2.map((ele, index) => {
                return (0, jsx_runtime_1.jsx)(
                  "li",
                  Object.assign(
                    {
                      className:
                        currentTab2 === index ? "submenu focused" : "submenu",
                      onClick: () => {
                        selectTabHandler2(index);
                      },
                    },
                    { children: ele.name }
                  ),
                  index
                );
              }),
            })
          : (0, jsx_runtime_1.jsx)(TabMenu, { children: "-" }),
        (0, jsx_runtime_1.jsx)(MenuContainer, {
          children:
            currentTab1 !== 3
              ? dummyData_1.default[currentTab1].children[
                  currentTab2
                ].children.map((el, index) => {
                  return (0, jsx_runtime_1.jsxs)(
                    MenuImgContainer,
                    Object.assign(
                      { className: "menu", onClick: selectMenuHandler },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(MenuImg, {
                            name: el.name + "  " + el.price,
                          }),
                          el.price
                            ? (0, jsx_runtime_1.jsxs)(
                                MenuPrice,
                                Object.assign(
                                  { name: el.name + "  " + el.price },
                                  { children: [el.price, "\uC6D0"] }
                                )
                              )
                            : null,
                        ],
                      }
                    ),
                    index
                  );
                })
              : dummyData_1.default[currentTab1].children.map((el, index) => {
                  return (0, jsx_runtime_1.jsxs)(
                    MenuImgContainer,
                    Object.assign(
                      { className: "menu", onClick: selectMenuHandler },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(MenuImg, {
                            name: el.name + "  " + el.price,
                          }),
                          el.price
                            ? (0, jsx_runtime_1.jsxs)(
                                MenuPrice,
                                Object.assign(
                                  { name: el.name + "  " + el.price },
                                  { children: [el.price, "\uC6D0"] }
                                )
                              )
                            : null,
                        ],
                      }
                    ),
                    index
                  );
                }),
        }),
        openModal
          ? (0, jsx_runtime_1.jsx)(OptionModal_1.default, {
              setOpenModal: setOpenModal,
              select: select,
              setSelect: setSelect,
            })
          : null,
      ],
    }),
  });
};
exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map
