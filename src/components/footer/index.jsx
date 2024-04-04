import "./style.scss";
import { Container } from "@containers";

const index = () => {
    return (
        <footer className="py-4 bg-[#1C1E53]">
            <Container>
                <h1 className="text-[20px] text-center text-white" >{
                    new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate()
                }</h1>
            </Container>
        </footer>
    );
};

export default index;