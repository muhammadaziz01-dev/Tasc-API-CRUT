import "./style.scss";
import { useEffect, useState, useRef } from "react";
// import AXIOS
import axios from 'axios';
// import UUID
import { v4 as uuidv4 } from 'uuid';
// import TOASTIFY
import { ToastContainer, toast } from 'react-toastify';


// import UI CONTENT
import { Loader } from "@ui";
import { Container } from "@containers"

function index() {

    
    const form = useRef(null);
    const [loading, setLoading] = useState(true);
    const [data , setData] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // let URL = import.meta.evn.VITE_BASE_URL;
   

    // FUN GET DATA================================================================
    async function getData(){
        try {
            const response = await axios.get('http://localhost:8888/users');
            setData(response.data);
            setLoading(false);
            
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }


    // FUN USEEFFECT ===============================================
    useEffect(() => {
        getData();
    }, []);


    // FUN DELET DATA ===============================================
    let deletUser = (id) =>{
        axios.delete(`http://localhost:8888/users/${id}`);
        toast.info("Delete user !", {
            position: "top-right"
          });
        setTimeout(()=>{
            window.location.reload();
        }, 2000)
    }


 // FUN ADD USER ===============================================
    let addUsers = ()=> {
        let newUser = {
            id: uuidv4(),
            name: form.current[0].value,
            age: form.current[1].value,
            phone: form.current[2].value
        }
        axios.post('http://localhost:8888/users', newUser);
        toast.success("addit user !", {
            position: "top-right"
          });
        setTimeout(()=>{
            window.location.reload();
        }, 2000)
    }

    // FUN EDIT USER ===============================================

    let editUser = (itim) =>{

         form.current[0].value=itim.name;
         form.current[1].value=itim.age;
         form.current[2].value=itim.phone;
        setSuccess(itim.id);
    }

    let editeUsers = () => {
        let newUser = {
            name: form.current[0].value,
            age: form.current[1].value,
            phone: form.current[2].value
        }
        axios.put(`http://localhost:8888/users/${success}`, newUser);
        setSuccess(null)
        toast.info("edit user !", {
            position: "top-right"
          });
        setTimeout(()=>{
            window.location.reload();
        }, 2000)
    }



    // HTML CONTENT =================================================

    return <section id="main-section">
        <ToastContainer />
        <Container>
            <div className="mai-wrapper">
                <form ref={form}  className="w-[500px] mx-auto p-10 border shadow-md mt-20">

                    <input type="text"   className="w-[100%] py-2 px-5 outline-none border-2 rounded-md" placeholder="Name  . . ." />
                    <input type="number"  className="w-[100%] py-2 px-5 my-3 outline-none border-2 rounded-md" placeholder="Age . . ." />
                    <input type="tel"  className="w-[100%] py-2 px-5 mb-3 outline-none border-2 rounded-md" placeholder="Phone . . ." />

                    {
                        success ? <button onClick={()=>editeUsers()} type="submit"  className="bg-orange-500  w-[100%] text-[20px] text-white py-[10px]  px-7 rounded-md  "> <i className="bi bi-pencil-square mr-2"></i>edit
                        </button>:<button onClick={()=>addUsers()} type="submit"  className="bg-green-500  w-[100%] text-[20px] text-white py-[10px]  px-7 rounded-md  "> <i className="bi bi-file-earmark-plus-fill mr-2"></i>add
                        </button>
                    }
                </form>
                {
                    loading ? <Loader/>: 
                        data.length > 0 ? data.map((itim)=>{
                            return <>
                              <div key={itim.id} className="flex items-center justify-between border-b pb-2 max-w-[800px] mx-auto mt-[30px]">
                                    <div className="flex items-center gap-[40px]">
                                        <p className="text-[18px] font-medium">
                                             {itim.name}
                                        </p>
                                        <p className="text-[18px] font-medium">
                                             {itim.age}
                                        </p>
                                        <p className="text-[18px] font-medium">
                                             {itim.phone}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-[20px]">
                                       <button onClick={()=>deletUser(itim.id)} className="py-2 px-4 rounded-md flex items-center justify-center gap-2  bg-red-500 text-white"><i className="bi bi-trash-fill"></i>delet</button>
                                       <button onClick={()=>{editUser(itim)}} className="py-2 px-4 rounded-md flex items-center justify-center gap-2  bg-orange-500 text-white "><i className="bi bi-pencil-square"></i>edit</button>
                                    </div>
                              </div>
                            </>
                        }): <div className="flex items-center justify-center mt-[30px]">
                            <h1 className="text-[red] text-[28px] font-semibold mt-[50px] py-3">{error} NOT FOUND !!!</h1>
                        </div>
                    
                }
            </div>

        </Container>
    </section>
}

export default index;