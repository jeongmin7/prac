import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ModalBackdrop,
  ModalContainer,
  ModalView,
  CloseButton,
} from "../styles/Modal";
// import {
//   BigBtn,
//   BigBtnDiv,
//   CancelBtnDiv,
//   button,
//   SmallBtnDiv,
//   Title,
// } from "../styles/Payment";
import Complete from "./Complete";

const PaymentModal: React.FC = () => {
  const dispatch = useDispatch();
  //   {
  //   openPaymentHandler,
  //   isPaymentOpen,
  // }: paymentModalProps
  const isPaymentOpen = useSelector(
    (state: any) => state.paymentModalStatus.isOpen
  );
  console.log(isPaymentOpen);
  const isFinalOpen = useSelector(
    (state: any) => state.finalModalStatus.isOpen
  );
  // console.log(isFinalOpen);

  // const [isOpen, setIsOpen] = useState(false);
  // const openHandler = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div>
      <ModalContainer>
        {isPaymentOpen === true ? (
          <ModalBackdrop onClick={() => dispatch({ type: "clicked" })}>
            <ModalView
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.preventDefault()
              }
            >
              {/* <CloseButton
                onClick={() => dispatch({ type: "clicked" })}
                className="close-btn"
              >
                &times;
              </CloseButton> */}
              <div className="desc">
                <div>결제수단을 선택하세요 </div>
                <div>
                  <div>
                    <button onClick={() => dispatch({ type: "finalClicked" })}>
                      신용카드
                    </button>
                    <button onClick={() => dispatch({ type: "finalClicked" })}>
                      기프트카드
                    </button>
                  </div>
                  <div>
                    <button onClick={() => dispatch({ type: "finalClicked" })}>
                      카카오페이
                    </button>
                    <button onClick={() => dispatch({ type: "finalClicked" })}>
                      네이버페이
                    </button>
                  </div>
                  <div>
                    <button onClick={() => dispatch({ type: "finalClicked" })}>
                      토스
                    </button>
                    <button onClick={() => dispatch({ type: "finalClicked" })}>
                      페이코
                    </button>
                  </div>
                  <div>
                    <button onClick={() => dispatch({ type: "close" })}>
                      취소하기
                    </button>
                  </div>
                </div>
                {isFinalOpen ? (
                  <Complete />
                ) : (
                  // isOpen={isOpen} openHandler={openHandler} />
                  ""
                )}
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </div>
  );
};

export default PaymentModal;
