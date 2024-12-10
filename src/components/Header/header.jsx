import logo from '../../assets/logo.png'
import busca from "../../assets/busca.png"
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from '../../Pages/Inicio/inicio';
import Doados from '../../Pages/Doados/doados';
import QueroDoar from '../../Pages/QueroDoar/querodoar';
import S from '../Header/header.module.scss'

export default function header(){
   
   return (
   <BrowserRouter>
    <header  className={S.header}>
     <section className={S .logoHeader}>
          <img src={logo} alt="imagem de um livro" />
          <h1>Livro Vai na web</h1>
     </section>
     <nav className={S.navHeader}>
        <ul>
          <li><Link className={S.link} to="/">Inicio</Link></li>
          <li><Link className={S.link}  to="/doados">Livros de doados</Link></li>
          <li><Link className={S.link}  to="/querodoar">Quero doar</Link></li>
        </ul>
     </nav>
     <section className={S.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={busca} alt="Icone de lupa branca" />
          </button>
        </section>
    </header>
    <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/doados" element={<Doados/>}/>
        <Route path="/querodoar" element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
  );
}



    
