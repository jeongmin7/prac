import { useState } from "react";
import styled from "styled-components";
import menu from "../dummyData";
import { Tab } from "../components/Tab";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const BackgroundContainer = styled.div`
  width: 98vw;
  height: 97vh;
  border: 1px solid black;
`;

const Container = styled.div`
  width: 700px;
  height: 100%;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 30px;
  border: 1px solid black;
`;

const MenuTab1 = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;
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
  border: 1px solid black;
`;

const MenuImg = styled.img`
  width: 100%;
  height: 80%;
  border: 1px solid black;
`;

const MenuPrice = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid black;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  margin-top: 20px;
  border: 1px solid black;
`;

const SumOfMoney = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-weight: bold;
  font-size: 27px;
`;

const PayButton = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid black;
  font-weight: bold;
  color: white;
  background-color: #036635;
  font-size: 27px;
  cursor: pointer;
`;

const SelectMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modalStatus.isOpen);

  const [select, setSelect] = useState({
    name: "",
    price: 0,
    quantity: 1,
  });
  const [totalPrice, setTotalPrice] = useState("10,000");

  return (
    <BackgroundContainer>
      <Container>
        <LogoContainer></LogoContainer>
        <MenuTab1>
          <Tab
            select={select}
            setSelect={setSelect}
            setTotalPrice={setTotalPrice}
          ></Tab>
          <ButtonContainer>
            <SumOfMoney>₩{totalPrice}</SumOfMoney>
            <PayButton onClick={() => dispatch({ type: "show" })}>
              결제하기
            </PayButton>
            {isOpen === true ? <Modal /> : ""}
          </ButtonContainer>
        </MenuTab1>
      </Container>
    </BackgroundContainer>
  );
};

export default SelectMenu;
