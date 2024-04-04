import "./style.scss";
import { Container } from "@containers";

const index = () => {
    return (
        <header className="bg-[#1C1E53]">
            <Container>
                <nav className="flex items-center justify-between py-5">
                    <a href="#" className="text-[24px] text-white font-bold *:">[EDUFREE]</a>
                    <div className="flex items-center gap-[72px]">
                        <ul className="flex items-center gap-7">
                            <li><a href="#" className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200">Home</a></li>
                            <li><a href="#" className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200">TENTANG KAMI</a></li>
                            <li><a href="#" className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200">KURSUS</a></li>
                            <li><a href="#" className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200">FAQ</a></li>
                            <li><a href="#" className="text-[16px] text-white font-normal border-b-[2px] border-transparent hover:border-slate-300  hover:text-slate-300 duration-200 flex items-center gap-[6px]">BLOG <i className="bi bi-arrow-up-right-square"></i></a></li>
                        </ul>
                        <a href="#" className="text-[16px] text-white font-normal hover:bg-white hover:text-[#1C1E53] duration-200 active:bg-transparent active:text-white py-[13px] px-[41px] border rounded-md">Login</a>
                    </div>
                </nav>
            </Container>

        </header>
    );
};

export default index;