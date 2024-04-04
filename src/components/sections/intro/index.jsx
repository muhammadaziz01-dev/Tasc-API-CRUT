import "./stely.scss";
import { Container} from "@containers";
import IntroImg from "@images/intro-img.png";

function index() {
    return <section id="intro" className="bg-[#1C1E53] pt-[92px] pb-[132px] ">
     <Container>
         <div className="intro-wrapper flex items-center justify-between">
             <div className="intro-text">
                 <h1 className="text-[20px] text-center text-slate-700">Hello, world!</h1>
             </div>
             <img src={IntroImg} alt="img" />
         </div>

     </Container>
    </section>
}

export default index;  