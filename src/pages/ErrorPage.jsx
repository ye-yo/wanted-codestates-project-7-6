import React from 'react';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <Error>
      <div>
        <h1>π¨ββοΈ</h1>
        <h2>μλ¬κ° λ°μνμμ΅λλ€.</h2>
        <h5>κ΄λ¦¬μμκ² λ¬Έμν΄μ£ΌμΈμ!</h5>
      </div>
    </Error>
  );
}

export default ErrorPage;

const Error = styled.div`
  display: grid;
  place-items: center;
  min-height: 60vh;
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
`;
