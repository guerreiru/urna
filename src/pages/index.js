import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Snack } from "./Snack";
import { Drink } from "./Drink";
import { End } from "./End";
import { Statistics } from "./Statistics";
import { Container, Content } from "./styles";


export const Pages = () => {
  return (
    <Container>
      <Content>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="snack" exact element={<Snack />} />
          <Route path="drink" exact element={<Drink />} />
          <Route path="end" exact element={<End />} />
          <Route path="statistics" exact element={<Statistics />} />
        </Routes>
      </Content>
    </Container>
  );
};

