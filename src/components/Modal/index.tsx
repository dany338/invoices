import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import {
  Overlay,
  Container,
  Header,
  ButtonClose,
} from './styled';

export interface IModalProps {
  children: React.ReactElement;
  state: boolean;
  changeState?: (state: boolean) => void | null;
  title: string;
  showHeader: boolean;
  showOverlay: boolean;
  positionModal: string;
  padding: string;
};

const Modal: React.FC<IModalProps> = ({
  children,
  state,
  changeState = () => ({}),
  title,
  showHeader,
  showOverlay,
  positionModal,
  padding
}) => {
  const navigate: any = useNavigate();

  return <>
    {state && (
      <Overlay showOverlay={showOverlay} positionModal={positionModal}>
        <Container padding={padding}>
          {showHeader && (
            <Header>
              <h3>{title}</h3>
            </Header>
          )}
          <ButtonClose onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </ButtonClose>
          {children}
        </Container>
      </Overlay>
    )}
  </>
}

export default Modal;