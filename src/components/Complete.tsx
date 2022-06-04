import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ModalBackdrop,
  ModalContainer,
  ModalView,
  CloseButton,
} from "../styles/Modal";
import { ModalBtn } from "../styles/Modal";
import LogoCompo from "./LogoCompo";

// interface handleCompleteProps {
//   isOpen: boolean;
//   openHandler: () => void;
// }
const Complete: React.FC = () => {
  const dispatch = useDispatch();
  const isFinalOpen = useSelector(
    (state: any) => state.finalModalStatus.isOpen
  );
  // { isOpen, openHandler }: handleCompleteProps
  return (
    <div>
      <ModalContainer>
        {isFinalOpen === true ? (
          <ModalBackdrop onClick={() => dispatch({ type: "finalClicked" })}>
            <ModalView
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.preventDefault()
              }
            >
              {/* <CloseButton
                onClick={() => dispatch({ type: "finalClicked" })}
                className="close-btn"
              >
                &times;
              </CloseButton> */}
              <div className="desc">
                <LogoCompo />
                <div>결제가 완료되었습니다.</div>
                <div>잠시만 기다려주세요 </div>
                <Link to="/">
                  <ModalBtn
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    확인
                  </ModalBtn>
                </Link>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </div>
  );
};

export default Complete;
