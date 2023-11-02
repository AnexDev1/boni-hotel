import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>Boni Hotel</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="number of guests"></Input>
        <Input type="number" placeholder="number of guests"></Input>
      </StyledApp>
    </>
  );
}
export default App;
