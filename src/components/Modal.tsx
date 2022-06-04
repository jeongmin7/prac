import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalStatus } from "../store";
import {
  Box,
  Btn,
  BoxContent,
  ModalBackdrop,
  ModalBtn,
  ModalContainer,
  ModalView,
  Title,
  BtnDiv,
  BtnLink,
} from "../styles/Modal";
import PaymentModal from "./PaymentModal";

const Modal: React.FC = () => {
  const isOpen = useSelector((state: any) => state.modalStatus.isOpen);
  const isPaymentOpen = useSelector(
    (state: any) => state.paymentModalStatus.isOpen
  );
  console.log(isOpen);
  // console.log(isOpen);
  // console.log(isPaymentOpen);

  // const [isOpen, setIsOpen] = useState(false);
  // const openModalHandler = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  // const openPaymentHandler = () => {
  //   setIsPaymentOpen(!isPaymentOpen);
  // };

  const dispatch = useDispatch();
  return (
    <div>
      <ModalContainer>
        {isOpen === true ? (
          <ModalBackdrop onClick={() => dispatch({ type: "click" })}>
            <ModalView
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.preventDefault()
              }
            >
              {/* <CloseButton
                onClick={() => dispatch({ type: "click" })}
                className="close-btn"
              >
                &times;
              </CloseButton> */}
              <div className="desc">
                <Title>주문내역</Title>
                <Box>
                  <BoxContent>hello</BoxContent>
                </Box>
              </div>
              <BtnDiv>
                <>
                  <Btn onClick={() => dispatch({ type: "clicked" })}>
                    결제하기
                  </Btn>
                  <Btn onClick={() => dispatch({ type: "hide" })}>추가하기</Btn>
                </>
              </BtnDiv>
            </ModalView>
          </ModalBackdrop>
        ) : null}
        {isPaymentOpen ? (
          <PaymentModal />
        ) : (
          // openPaymentHandler={() => dispatch({ type: "clicked" })}
          // isPaymentOpen={isPaymentOpen}
          // />
          ""
        )}
      </ModalContainer>
    </div>
  );
};

export default Modal;
