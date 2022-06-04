import styled from "styled-components";
export const Title = styled.div`
  color: #555;
  font-size: 40px;
`;
export const BigBtnDiv = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const BigBtn = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 60%;
  height: 20px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 10px;
  margin: 20px;
  color: #fff;
  background-color: rgba(19, 59, 55, 0.8);

  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
export const SmallBtnDiv = styled.div`
  display: flex;
  width: 800px;
  justify-content: center;
  align-items: center;
`;
export const SmallBtn = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 25%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  margin: 20px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
export const CancelBtnDiv = styled.div`
  display: flex;
  width: 800px;
  justify-content: center;
  align-items: center;
`;
export const CancelBtn = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  margin: 10px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;

export const CompleteDiv = styled.div`
  color: #555;
  font-size: 50px;
  margin-top: 50px;
`;

export const ContentDiv = styled.div`
  color: #555;
  font-size: 30px;
  margin-top: 100px;
`;
