import { useState } from "react";
import styled from "styled-components";
import menu from "../dummyData";
import OptionModal from "./OptionModal";
import { useDispatch, useSelector } from "react-redux";
interface IInnerType {
  name: string;
}

const TabMenu = styled.ul`
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

const MenuTab2 = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  border: 1px solid black;
`;

const MenuImgContainer = styled.div`
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

const MenuImg = styled.img<IInnerType>`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const MenuPrice = styled.div<IInnerType>`
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

export const Tab: Function = ({ select, setSelect }: any) => {
  const [currentTab1, setCurrentTab1] = useState(0);
  const [currentTab2, setCurrentTab2] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const isOpen = useSelector((state: any) => state.optionModalStatus.isOpen);
  console.log(isOpen);

  //   const menuArr = [
  //     { name: 'Tab1', content: 'Tab menu ONE' },
  //     { name: 'Tab2', content: 'Tab menu TWO' },
  //     { name: 'Tab3', content: 'Tab menu THREE' }
  //   ];

  const menuArr1 = menu.map((el) => {
    return { name: el.name };
  });

  const menuArr2 = menu[currentTab1].children.map((el: any) => {
    return { name: el.name };
  });

  const selectTabHandler1 = (index: number) => {
    setCurrentTab1(index);
    setCurrentTab2(0);
  };

  const selectTabHandler2 = (index: number) => {
    setCurrentTab2(index);
  };

  const selectMenuHandler = (e: any) => {
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
  return (
    <>
      <div>
        <TabMenu>
          {menuArr1.map((ele, index) => {
            return (
              <li
                key={index}
                className={
                  currentTab1 === index ? "submenu focused" : "submenu"
                }
                onClick={() => selectTabHandler1(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        {currentTab1 !== 3 ? (
          <TabMenu>
            {menuArr2.map((ele: any, index: number) => {
              return (
                <li
                  key={index}
                  className={
                    currentTab2 === index ? "submenu focused" : "submenu"
                  }
                  onClick={() => {
                    selectTabHandler2(index);
                  }}
                >
                  {ele.name}
                </li>
              );
            })}
          </TabMenu>
        ) : (
          <TabMenu>-</TabMenu>
        )}
        <MenuContainer>
          {currentTab1 !== 3
            ? menu[currentTab1].children[currentTab2].children.map(
                (el: any, index: number) => {
                  return (
                    <MenuImgContainer
                      key={index}
                      className="menu"
                      onClick={selectMenuHandler}
                    >
                      <MenuImg name={el.name + "  " + el.price}></MenuImg>
                      {el.price ? (
                        <MenuPrice name={el.name + "  " + el.price}>
                          {el.price}원
                        </MenuPrice>
                      ) : null}
                    </MenuImgContainer>
                  );
                }
              )
            : menu[currentTab1].children.map((el: any, index: number) => {
                return (
                  <MenuImgContainer
                    key={index}
                    className="menu"
                    onClick={selectMenuHandler}
                  >
                    <MenuImg name={el.name + "  " + el.price}></MenuImg>
                    {el.price ? (
                      <MenuPrice name={el.name + "  " + el.price}>
                        {el.price}원
                      </MenuPrice>
                    ) : null}
                  </MenuImgContainer>
                );
              })}
        </MenuContainer>
        {openModal ? (
          <OptionModal
            setOpenModal={setOpenModal}
            select={select}
            setSelect={setSelect}
          ></OptionModal>
        ) : null}
      </div>
    </>
  );
};
