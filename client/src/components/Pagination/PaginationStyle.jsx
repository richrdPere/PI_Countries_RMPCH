import styled from 'styled-components';

export const Pagination_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que los botones se envuelvan en dispositivos pequeños */
`;

export const Pagination_Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5em;
  background-color: ${props => (props.active ? 'orange' : 'white')};
  border: 1px solid orange;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.active ? 'orange' : 'lightgray')};
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;