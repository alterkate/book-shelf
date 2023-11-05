import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const Filters = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  margin-top: 15px;
`;

export const FiltersLabel = styled.h6`
  margin: 0;
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
`;
