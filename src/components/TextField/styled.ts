import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export interface ITextFieldSearchBoxProps {
  type: string | any;
};

export const Container = styled.div`
  background: ${Colors.white};
  box-sizing: border-box;
  border-radius: 6px;
  height: 3.125rem;
  width: auto;
  margin: 0.938rem 0rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 81.25rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const SearchBox = styled.div<ITextFieldSearchBoxProps>`
  position: relative;
  width: 100%;
  max-width: 81.25rem;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .icons{
    position: absolute;
    vertical-align: middle;
    /* padding: 0.563rem 0.563rem;
    margin: 0.563rem 0.563rem;
    right: 4.0rem; */
    svg {
      vertical-align: middle;
      right: 4.0rem;
      width: 5.25rem !important;
      height: 2.625rem !important;
      color: ${Colors.colorTextResultsFounded};
      z-index: 1;
      cursor: pointer;
      padding: 0.563rem 0.563rem;
      margin: 0.563rem 0.563rem;
      fill: ${({ type }) => type === 'password' ? `none` : `${Colors.colorUhOh}` };
    }
  }

  input {
    width: 18.438rem;
    border: 1px solid #D9E2EF;
    outline: none;
    color: ${Colors.backgroundColorModal};
    top: 0;
    left: 0;
    height: 100%;
    padding: 0.625rem 1.25rem;
    border-radius: 6px;
    font-size: 1.063rem;
    font-weight: 900;
    line-height: 1.625rem;
    font-family: Roboto, "Helvetica Neue", sans-serif;

    &::placeholder {
      color: ${Colors.colorTextResultsFounded}
    }
  }

  textarea {
    width: 18.438rem;
    border: 1px solid #D9E2EF;
    outline: none;
    color: ${Colors.backgroundColorModal};
    top: 0;
    left: 0;
    height: 100%;
    padding: 0.625rem 1.25rem;
    border-radius: 6px;
    font-size: 1.063rem;
    font-weight: 900;
    line-height: 1.625rem;
    font-family: Roboto, "Helvetica Neue", sans-serif;

    &::placeholder {
      color: ${Colors.colorTextResultsFounded}
    }
  }

  .container-errors {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0.625rem 0rem;
    width: 100%;
    height: 1.25rem;
    color: ${Colors.colorUhOh};
    font-size: 0.75rem;
    font-weight: 900;
    line-height: 1.125rem;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    .errors {
      font-size: 14px;
      color: ${Colors.backgroundColorBadgeRed};
    }
  }
`;