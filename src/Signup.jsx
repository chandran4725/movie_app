import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const Signup = () =>
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {theme,toggleTheme} = useContext(ThemeContext);

    console.log(theme);

    const handleChange = async () =>
    {
        const data = {
            name,
            email,
            password
        }

        const response = await fetch("http://localhost:3000/netflix/signup",{

            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => data)
            .catch(e => console.error(e))

        console.log(response);    
    }

    return(
        
        <div style={{background : theme == "light" ? "#fff" : "#333",color: theme == "light" ? "#333" : "#fff"}}>
            <button
                onClick={toggleTheme}
                
            >
                Toggle Theme</button> 
            <div className="flex justify-center text-3xl mt-8 font-bold">
                <h1>Netflix</h1>
            </div>

            <div className="flex justify-center">
                <div className="py-4 mt-4  font-bold w-[350px] border-2">
                    <h2 className="text-center text-2xl">Signup</h2>

                    <input 
                        type="text" 
                        placeholder="Enter Your Name" 
                        name="name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="border-2 text-lg mx-14 my-2"/>

                    <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border-2 text-lg mx-14 my-2"/>

                    <input 
                        type="password" 
                        placeholder="Enter Your Password" 
                        name="name" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border-2 text-lg mx-14 my-2"/>

                    <button 
                        onClick={handleChange}
                        className="mx-34 my-4 bg-red-700 px-4 py-2 rounded-2xl hover:bg-green-700 cursor-pointer text-white">Signup</button>

                </div>
            </div>
        </div>
    );
}

export default Signup;