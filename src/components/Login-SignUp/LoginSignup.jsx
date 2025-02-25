import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function LoginSignup() {
    const [vantaEffect, setVantaEffect] = useState(null);
    const [action, setAction] = useState("Sign Up"); 
    const backgroundRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: backgroundRef.current,
                    THREE: THREE,
                    color: 0xff0000,
                    backgroundColor: 0x111111,
                    points: 10,
                    maxDistance: 20,
                    spacing: 15,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={backgroundRef} className="min-h-screen flex flex-col items-center justify-center p-5 relative">
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white">
                <img
                    src="https://scontent.fstv8-1.fna.fbcdn.net/v/t39.30808-1/295309219_1179245352923597_5208480181212311746_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=100&ccb=1-7&_nc_sid=fe756c&_nc_ohc=hwsiVisDXYQQ7kNvgGXdb0R&_nc_oc=AdiDA7D5gQjbSNiYXlqn2RKI2S4Kk9iqGtL7FLafqFnnV2yGhj1460gUReBFPFy-D9HtuC72gg3nvqk58GQ0Afz1&_nc_zt=24&_nc_ht=scontent.fstv8-1.fna&_nc_gid=AYSjXA5yv0CD0-JUEnnMRQn&oh=00_AYDxuzcIVtWdSZczVFNsdRZNJlvyyEa4qSDtSyi0zQ1QNg&oe=67C3EA88"
                    alt="User Avatar"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
                />

                <div className="text-center">
                    <h1 className="text-5xl font-bold font-display">{action}</h1>
                    <div className="w-[61px] h-[6px] bg-white rounded-lg mx-auto mt-2 transition-all duration-300 hover:w-[90px] hover:h-[8px]"></div>
                </div>

                <div className="mt-10 space-y-5 w-full max-w-md">
                    
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-md text-black">
                        <img
                            src="https://img.icons8.com/?size=100&id=23264&format=png&color=000000"
                            alt="User Icon"
                            className="w-6 h-6 mr-3"
                        />
                        <input type="text" placeholder="Username" className="w-full outline-none bg-transparent" />
                    </div>

                   
                    {action === "Login" && (
                        <div className="flex items-center bg-white p-3 rounded-lg shadow-md text-black">
                            <img
                                src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
                                alt="Email Icon"
                                className="w-6 h-6 mr-3"
                            />
                            <input type="email" placeholder="Email" className="w-full outline-none bg-transparent" />
                        </div>
                    )}

                   
                    <div className="flex items-center bg-white p-3 rounded-lg shadow-md text-black">
                        <img
                            src="https://img.icons8.com/?size=100&id=59855&format=png&color=000000"
                            alt="Password Icon"
                            className="w-6 h-6 mr-3"
                        />
                        <input type="password" placeholder="Password" className="w-full outline-none bg-transparent" />
                    </div>
                </div>

                
                {action === "Sign Up" && (
                    <div className="mt-5">
                        <p className="text-sm text-white">
                            Bhul Gya Na, Password? {" "}
                            <span className="cursor-pointer text-blue-300 font-semibold">Muje Dabao!</span>
                        </p>
                    </div>
                )}

               
                <div className="mt-5 flex space-x-4">
                    <button
                        onClick={() => setAction("Login")}
                        className={`px-6 py-2 rounded-lg shadow-md cursor-pointer ${action === "Login" ? "bg-blue-600 text-white" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setAction("Sign Up")}
                        className={`px-6 py-2 rounded-lg shadow-md cursor-pointer ${action === "Sign Up" ? "bg-green-600 text-white" : "bg-green-500 text-white hover:bg-green-600"}`}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
