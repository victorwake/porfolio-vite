import React, { useRef, useState } from "react";
import { useEffect } from "react";
import sun from "../img/sun.png";
import moon from "../img/moon.png";
import uk from "../img/uk-rec.png";
import arg from "../img/arg-rec.png";
import scrollRevealConfig from "../util/scrollRevealConfig";
import { useTranslation } from "react-i18next";


export default function Header() {
  const [imagenSrc, setImagenSrc] = useState(uk); //Estado de la imagen del idioma
  const imgModoRef = useRef(null); //Referencia a la imagen del modo
  const [activeSection, setActiveSection] = useState(""); //Estado activo del nav
  const [t, i18n] = useTranslation("global"); //Traduccion
  const [isMenuOpen, setIsMenuOpen] = useState(false); //Estado del menu



//Cambio de idioma y modo ----------------------------------------------------------------
useEffect(() => {
    // Verificar el estado del idioma guardado en el localStorage
    const idiomaGuardado = localStorage.getItem("idioma");
    if (idiomaGuardado) {
        setImagenSrc(idiomaGuardado === "en" ? arg : uk);
        i18n.changeLanguage(idiomaGuardado);
    } else {
    // Si no hay un idioma guardado en el localStorage, establecer "es" como idioma por defecto
        setImagenSrc(uk); // Cambiar la imagen al idioma por defecto
        i18n.changeLanguage("es");
        localStorage.setItem("idioma", "es"); // Guardar el idioma por defecto en el localStorage
    }

    const modoImg = localStorage.getItem("modo");// Verificar el estado del modo guardado en el localStorage
    const imgModo = imgModoRef.current;
    if (modoImg === "dark") {// comprobar el modo guardado en el localStorage
        imgModo.setAttribute("src", sun);
    } else {
        imgModo.setAttribute("src", moon);
    }


    // Verificar el estado del modo guardado en el localStorage
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado) {
        const body = document.body;
        body.classList.toggle("light-theme", modoGuardado === "light");
        body.classList.toggle("dark-theme", modoGuardado === "dark");
    }
}, []);

const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    const modo = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("modo", modo);
    cambiarModo();
};

const cambiarModo = () => {
    const imgModo = imgModoRef.current;

    if (imgModo.getAttribute("src") === moon) {
        imgModo.setAttribute("src", sun);
    } else {
        imgModo.setAttribute("src", moon);
    }
    
};

const cambiarTexto = () => {
    if (imagenSrc === uk) {
        setImagenSrc(arg);
        i18n.changeLanguage("en");
        localStorage.setItem("idioma", "en"); // Actualizar el idioma en el localStorage
    } else {
        setImagenSrc(uk);
        i18n.changeLanguage("es");
      localStorage.setItem("idioma", "es"); // Actualizar el idioma en el localStorage
    }
};

//----------------------------------------------------------------------//

// Funcion para abrir y cerrar el menu
const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
};


//----------------------------------------------------------------------//
//Estado activo del nav
useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("header nav a");
        const top = window.scrollY;

        sections.forEach((sec) => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                    setActiveSection(id);
                }
            });
        }
});

const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
};
    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

//Fin estado activo del nav

//----------------------------------------------------------------------//

//Scroll reveal
useEffect(() => {
    const sr = ScrollReveal(scrollRevealConfig);

    sr.reveal(".home-content, .heading", { origin: "top" });
    sr.reveal(".home-img, .skills-container, .porfolio-box, contacto form", {
    origin: "bottom",
    });
    sr.reveal(".home-content h1, .about-img", { origin: "left" });
    sr.reveal(".home-content p, .about-content", { origin: "right" });

    return () => {
        sr.destroy();
    };
}, []);

//Fin scroll reveal

//----------------------------------------------------------------------//


    return (
        <>
            <header className="header">
                <a href="#" className="logo">Porfolio</a>
                <i className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`} id="menu-icon" onClick={handleMenuClick}></i>
                <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
                    <a id="inicio" href="#home" className="active" style={{ "--i": 1 }}>{t("nav.0")}</a>
                    <a id="acerca" href="#about" style={{ "--i": 2 }}>{t("nav.1")}</a>
                    <a id="servis" href="#skills" style={{ "--i": 3 }}>{t("nav.2")}</a>
                    <a id="porf" href="#porfolio" style={{ "--i": 4 }}>{t("nav.3")}</a>
                    <a id="contact" href="#contacto" style={{ "--i": 5 }}>{t("nav.4")}</a>
                </nav>
            </header>
            <div id="floatingDiv">
                <a className="light-mode-button" aria-label="Toggle Light Mode" onClick={toggleTheme}>
                    <img className="transition-modo" src={moon} height="28px" id="cambiarModoBtn" alt="Imagen 1" ref={imgModoRef}/>
                </a>
                <a className="modo-mode-button" aria-label="Toggle Light Mode">
                <img className="fade-transition" src={imagenSrc} height="25px" id="cambiarTextoBtn" alt="Imagen 1" onClick={cambiarTexto}/>
                </a>
            </div>
        </>
    );
}
