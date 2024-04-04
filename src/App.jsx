import Header from "@component/header";
import Footter from "@component/footer";
import { Main , Container} from "@containers";
import { Loader } from "@ui";

import { Intro , MainSection } from "@sections";


const App = () => {
  return (
    <>
    <Header />
    <Main>
     <Container>
       <MainSection/>
     </Container>
    </Main>
    <Footter />
    </>
  );
};

export default App;