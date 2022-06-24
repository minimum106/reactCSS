import styled from "styled-components";

export const StyledComopents = () => {
  return (
    <Container>
      <p> - CSS Modules - </p>
      <button>FIGHT!</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid;
  border-radius: 20px;
  padding: 8pt;
  margin: 8pt;
`;
