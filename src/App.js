import { CssModules } from "./componets/CssModules";
import { InlineStyle } from "./componets/InlineStyle";
import { StyledJsx } from "./componets/StyledJsx";
import { Emotion } from "./componets/Emotion";
import { StyledComopents } from "./componets/StyledComopents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComopents />
      <Emotion />
    </div>
  );
}
