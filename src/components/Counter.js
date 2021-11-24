import styled from "@emotion/styled"
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  
  const ContainerCount = styled.div`
    height: 20px;
    background: #4bbd2e;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `; 

  const Num = styled.div`
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 2px;
    width: 20px;
  `;

  const SignsLeast = styled.p`
    cursor: pointer;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    padding: 6px 7px;
    margin-bottom: 2px;
  `;

  const Signs = styled.p`
    cursor: pointer;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
    padding: 6px 7px 8px 4px;
    margin-bottom: 2px;
  `;

  function handleClickLeast() {
    const minus = count - 1;
    if (minus > 0) {
      setCount(minus);
    } else {
    }
  }

  function handleClickSum() {
    const plus = count + 1
    setCount(plus);
  }

  return (
    <ContainerCount>
      <SignsLeast onClick={() => handleClickLeast()}>-</SignsLeast>
      <Num>{count}</Num>
      <Signs onClick={() => handleClickSum()}>+</Signs>
    </ContainerCount>
  )
}