import styled from 'styled-components';

export const BottonG= styled.button

`   
font-weight: bold;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,143,38,1) 0%, rgba(150,126,197,1) 48%, rgba(0,255,222,1) 100%);
padding: 5px;
border: 1px solid red;
border-radius: 5px;
display: inline-block;
margin-bottom: 5px;
cursor: pointer;

`;

export const CountryListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HomePageContainer = styled.div`
  background-size: cover;
  background-position: center;
  text-align: center;
`;

export const PaginationContainer = styled.div`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,143,38,1) 0%, rgba(150,126,197,1) 48%, rgba(0,255,222,1) 100%);
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
export const DivG = styled.div `

  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,143,38,1) 0%, rgba(150,126,197,1) 48%, rgba(0,255,222,1) 100%);
  display: flex;
  justify-content: center;
 `;
 export const MenuGs = styled.div
 `
 left: 50%;
display: flex;
 width:300px;
 justify-content: center;
 align-items: center;
 background-color: rgb(94, 94, 224);
 border: solid rgb(230, 154, 154);  
 margin: 5px;
 border-radius:5em; 
 background: linear-gradient(150deg, rgb(231, 231, 112), rgb(170, 76, 76), rgb(42, 42, 132));
 

`;

export const CenteredContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1px;

& > div {
  margin: 0 100px; /* Espacio de 200px entre elementos */
}
`;

export const StyledLabelG = styled.div`
  font-weight: bold;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,143,38,1) 0%, rgba(150,126,197,1) 48%, rgba(0,255,222,1) 100%);
  padding: 5px;
  border: 1px solid red;
  border-radius: 100px;
  display: inline-block;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  font-weight: bold; 
  color: orange; 
`;

export const StyledSelect = styled.select`
  font-weight: bold; 
  color: orange; 
`;

export const StyledOption = styled.option`
  font-weight: bold; 
  color: orange; 
`;

export const Query = styled.div`
  @media (max-width: 768px) {
    font-size: 10px;
    display: block; /* Mostrar elementos uno debajo del otro en dispositivos móviles */
    padding: auto;
    margin-bottom: 5px;
    margin-left: auto;
    margin-rigth: auto;
  }
`;

// import styled from 'styled-components';

// export const CountryDetailContainer = styled.div
// `
//   background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,143,38,1) 0%, rgba(150,126,197,1) 48%, rgba(0,255,222,1) 100%);
//   display: flex;
//   border: 1px solid #ccc;
//   margin-top: 20px;
  
  
// `;

// export const FlagContainer = styled.div`

//   flex: 1;
//   padding: 20px;
// `;

// export const FlagImage = styled.img`
  
//   max-width: 100%;
//   height: auto;
// `;

// export const DetailContainer = styled.div`

//   flex: 1;
//   padding: 20px;
// `;

// export const DetailItem = styled.p`
//   margin: 5px 0;
//   font-weight: bold;
//   color: black; 
// `;