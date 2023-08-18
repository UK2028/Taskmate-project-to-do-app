import { useState,useEffect } from 'react';
import '../styles/Header.css';
import Logo from '../assets/logo(Taskmate)(cropped).jpg';

export const Header = () => {

    const [theme, setTheme] = useState( JSON.parse(localStorage.getItem("theme")) || "light");

    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme));
        document.body.removeAttribute("class");
        document.body.classList.add(theme);
    },[theme]);

    return (
        <>
            <div className='header mt-2'>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div><img src={Logo} alt="Taskmate Logo" className='logo' /></div>
                    <div className='appName'>Taskmate</div>
                    <div className='theme d-flex align-items-center flex-wrap'>
                        <div onClick={() => setTheme("light")} className={theme === "light" ? 'light themeActive' : "light"}></div>
                        <div onClick={() => setTheme("dark")} className={theme === "dark" ? 'dark themeActive' : "dark"}></div>
                        <div onClick={() => setTheme("medium")} className={theme === "medium" ? 'medium themeActive' : "medium"}></div>
                        <div onClick={() => setTheme("gOne")} className={theme === "gOne" ? 'gOne themeActive' : "gOne"}></div>
                        <div onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? 'gTwo themeActive' : "gTwo"}></div>
                        <div onClick={() => setTheme("gThree")} className={theme === "gThree" ? 'gThree themeActive' : "gThree"}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
