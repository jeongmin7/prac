import styled from "styled-components";
import { Link } from "react-router-dom";
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalBtn = styled.button`
  background-color: #133b37;
  padding: 20px;
  color: white;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 800px;
  height: 800px;

  > span.close-btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    color: #555;
  }
`;
export const CloseButton = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 50px;
  padding-right: 10px;
`;
export const Title = styled.div`
  font-size: 40px;
`;
export const BoxContent = styled.div`
  border: 1px solid #555;
  width: 500px;
  height: 400px;
  margin-top: 50px;
  display: flex;
  border-radius: 10px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  background-color: #133b37;
  padding: 20px;
  width: 200px;
  color: white;
  margin: 20px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
export const BtnDiv = styled.div`
  width: 500px;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 30px;
`;

export const BtnLink = styled(Link)`
  text-decoration-line: none;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
