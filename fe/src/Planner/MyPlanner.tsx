import styled from "styled-components";
import { FaRunning } from "react-icons/fa";
import MyLogo from "../components/Logo";

const Myplanner = () => {
  return (
    <MainWrapper>
      <Sidebar>
        <MyLogo />
        <SidebarTitle>완료바구니 🧺</SidebarTitle>
        <ChatBox>
          <ChatItem>
            <Day>day 300</Day>
            <Message>하루 30분 런닝하기</Message>
            <Date>10월 10일</Date>
          </ChatItem>
          <ChatItem>
            <Day>day 100</Day>
            <Message>react 공부하기</Message>
            <Date>10월 9일 </Date>
          </ChatItem>
          <ChatItem>
            <Day>day 20</Day>
            <Message>물 3L 마시기</Message>
            <Date>10월 2일</Date>
          </ChatItem>
        </ChatBox>
      </Sidebar>
      <MainContent>
        <RegisterButton>신규등록</RegisterButton>
        <MainTitle>계획을 시작할 때에요!</MainTitle>
        <TaskBox>
          <Task>
            <TaskTitle>하루 30분 런닝하기</TaskTitle>
            <RunningIcon />
          </Task>
          <Task>
            <TaskTitle>리액트 마스터하기</TaskTitle>
            <RunningIcon />
          </Task>
          <Task>
            <TaskTitle>자바스크립트 마스터하기</TaskTitle>
            <RunningIcon />
          </Task>
        </TaskBox>
      </MainContent>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.color.third};
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.color.second};
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #ecf0f1;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: 400px;
  padding-right: 10px;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.color.third};
`;

const ChatItem = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: #ecf0f1;
  padding: 20px;
  border-radius: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Day = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.color.third};
`;

const Message = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: #bdc3c7;
`;

const Date = styled.div`
  font-size: 12px;
  text-align: right;
  color: #7f8c8d;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
`;

const MainTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #2c3e50;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const RegisterButton = styled.button`
  background-color: ${(props) => props.theme.color.third};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 15px;
  cursor: pointer;
  align-self: flex-end;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.third};
    transform: translateY(-2px);
  }
`;

const TaskBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Task = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const TaskTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  color: #2c3e50;
  font-weight: 600;
`;

const RunningIcon = styled(FaRunning)`
  font-size: 60px;
  color: ${(props) => props.theme.color.main};
  animation: running 1.5s infinite alternate;

  @keyframes running {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(20px);
    }
  }
`;

export default Myplanner;
