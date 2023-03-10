import "./App.css";
import { StyledApp } from "./App.styles";
import AnimatedText from "./AnimatedText";
import "animate.css";

function App() {
  return (
    <StyledApp className="App">
      <AnimatedText input="Hello." delay={0} duration={2} />
      <AnimatedText input="I'm Eddie." delay={2} duration={2} />
      <AnimatedText input="I'm a designer" delay={4} duration={2} />
    </StyledApp>
  );
}

export default App;
