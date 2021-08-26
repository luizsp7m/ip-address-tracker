import styled from 'styled-components';

export const Container = styled.div`
  background: url('/images/pattern-bg.png');
  background-position: center;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  
  padding: 6rem 0 11rem 0;

  position: relative;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 2.8rem;
  color: #fafafa;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  > input {
    padding: 1.8rem;
    border: 0;
    outline: 0;
    width: 425px;
    font-size: 1.45rem;
    color: #555;
    font-weight: 500;

    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;

    ::placeholder {
      
    }
  }

  > button {
    background-color: #000;
    border: 0;
    outline: 0;
    height: 5.3rem;
    width: 5.3rem;

    font-size: 0;

    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;

    cursor: pointer;
  }
`;

export const Display = styled.div`
  display: grid;
  width: 85%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5rem;
  background: #fafafa;
  padding: 3rem;
  border-radius: .5rem;
  z-index: 10;

  position: absolute;
  top: 20rem;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, .25);
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-self: center;
  width: 100%;

  > span {
    color: #9A9A9A;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: .1rem;
  }

  > h3 {
    color: #2C2C2C;
    font-size: 2rem;
    font-weight: 700;
  }
`