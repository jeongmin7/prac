import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 800px;
  margin: auto;
`;
export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 200px;
  height: auto;
`;
export const Button = styled.div`
  width: 810px;
  height: 400px;
  display: flex;
  flex-grow: inherit;
`;
export const MenuLink = styled(Link)`
  text-decoration-line: none;
  color: #555;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
export const Type = styled.div`
  overflow: hidden;
  position: relative;
  width: 302px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 20px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 10px;
`;
export const Img = styled.img`
  width: 300px;
  height: 300px;

  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const CardImg = styled.img`
  width: 300px;
  min-height: 300px;
  object-fit: contain;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
