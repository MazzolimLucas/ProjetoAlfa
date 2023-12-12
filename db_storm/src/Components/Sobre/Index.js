import {animate, inView, motion, useInView, useMotionValue, useTransform} from 'framer-motion'; 
import { useEffect, useRef } from 'react';
import "./Sobre.css";
import reuniaoFoto from "../../img/AmbienteDBstorm.jpg";
import historiaFoto from "../../img/HistoriaDBstorm.jpg";
import criadorFoto from "../../img/CriadorDBstorm.jpg";


export default function Index(){

    const referencia = useRef(null);
    const view = useInView(referencia, {once: true});

    const Contador = ({start, end, className}) => {
        const ref = useRef();

        useEffect(() => {
            const valorAtual = ref.current;

            if(view){
            console.log(referencia);
            animate(start, end , {
                duration: 1.75,
                onUpdate(latest) {
                    valorAtual.textContent = Math.round(latest);
                },
                ease: 'linear'
            })}
        }, []);

        return(
            <span ref={ref} className={className}>{ref.current}</span>
        );
    };

    return(
        <div className="Sobre">
            <h1 className="titulo-sobre">Sobre nós</h1>

            <AnimacaoFadeInX direita={true}>
            <div className="banner-sobre-1 banner-sobre">
                <div className="texto-sobre">
                    <h1>Propósito</h1>
                    <p className="texto-principal-banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est leo, venenatis at urna ut, gravida tincidu
                        nt ligula. Nullam eget justo at lorem pulvinar vestibulum quis non diam. Duis magna dui, tempus ut nisl et, 
                        molestie pulvinar libero. Aenean vel venenatis lorem. Mauris at scelerisque ligula. Nam accumsan est nulla, 
                        in lobortis eros porttitor a. Aenean commodo vehicula scelerisque. Aliquam hendrerit tortor at ornare faucib
                        us. Nullam ornare, augue vel tincidunt posuere, metus purus elementum nunc, sed venenatis metus sapien sit 
                        amet dui. Ut eget sapien eu turpis euismod tempus. Donec ac diam lorem. Mauris nec faucibus mi. Nullam ornar
                        e efficitur elit non sagittis. Nunc tristique congue nunc sed tincidunt.</p>
                </div>
                <div className="foto-sobre"><img src={reuniaoFoto}/></div>
            </div>
            </AnimacaoFadeInX>


            <AnimacaoFadeInY baixo={false}>
            <div className="dados-container-sobre" ref={referencia}>

                    <div className='contador'>
                    <Contador start={0} end={70} className={'contador-1'} ligar={false}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
                       Fusce est leo, venenatis at urna ut, gravida</p>
                    </div>

                    <div className='contador'>
                    <Contador start={0} end={300} className={'contador-2'} ligar={false}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
                       Fusce est leo, venenatis at urna ut, gravida</p>
                    </div>

                    <div className='contador'>
                    <Contador start={0} end={30} className={'contador-3'} ligar={false}/> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
                       Fusce est leo, venenatis at urna ut, gravida</p>
                    </div>

            </div>
            </AnimacaoFadeInY>


            <AnimacaoFadeInX direita={false}>
            <div className="banner-sobre-2 banner-sobre">
                <div className="foto-sobre">
                    <img src={historiaFoto}/>
                </div>
                <div className="texto-sobre">
                    <h1>História</h1>
                    <p className="texto-principal-banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est leo, venenatis at urna ut, gravida tincidu
                        nt ligula. Nullam eget justo at lorem pulvinar vestibulum quis non diam. Duis magna dui, tempus ut nisl et, 
                        molestie pulvinar libero. Aenean vel venenatis lorem. Mauris at scelerisque ligula. Nam accumsan est nulla, 
                        in lobortis eros porttitor a. Aenean commodo vehicula scelerisque. Aliquam hendrerit tortor at ornare faucib
                        us. Nullam ornare, augue vel tincidunt posuere, metus purus elementum nunc, sed venenatis metus sapien sit 
                        amet dui. Ut eget sapien eu turpis euismod tempus. Donec ac diam lorem. Mauris nec faucibus mi. Nullam ornar
                        e efficitur elit non sagittis. Nunc tristique congue nunc sed tincidunt.</p>
                </div>
            </div>
            </AnimacaoFadeInX>

            <AnimacaoFadeInX direita={true}>
            <div className="banner-sobre-3 banner-sobre">
                <div className="texto-sobre">
                    <h1>Fundador</h1>
                    <p className="texto-principal-banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est leo, venenatis at urna ut, gravida tincidu
                        nt ligula. Nullam eget justo at lorem pulvinar vestibulum quis non diam. Duis magna dui, tempus ut nisl et, 
                        molestie pulvinar libero. Aenean vel venenatis lorem. Mauris at scelerisque ligula. Nam accumsan est nulla, 
                        in lobortis eros porttitor a. Aenean commodo vehicula scelerisque. Aliquam hendrerit tortor at ornare faucib
                        us. Nullam ornare, augue vel tincidunt posuere, metus purus elementum nunc, sed venenatis metus sapien sit 
                        amet dui. Ut eget sapien eu turpis euismod tempus. Donec ac diam lorem. Mauris nec faucibus mi. Nullam ornar
                        e efficitur elit non sagittis. Nunc tristique congue nunc sed tincidunt.</p>
                </div>
                <div className="foto-sobre">
                    <img src={criadorFoto}/>
                </div>
            </div>
            </AnimacaoFadeInX>
        </div>
    )
}

function AnimacaoFadeInX({direita, children}){
    
    const ref = useRef(null);
    const view = useInView(ref, {once: true});
    const lado = direita ? 'translateX(-200px)' : 'translateX(200px)' ;
    
    return(
        <div ref={ref}>
            <motion.div>
                <span style={{
                    transform: view ?  "none" : lado,
                    opacity: view ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}>
                    {children}
                </span>
            </motion.div>
        </div>
    );
}

function AnimacaoFadeInY({baixo, children}){
    
    const ref = useRef(null);
    const view = useInView(ref, {once: true});
    const lado = baixo ? 'translateY(-200px)' : 'translateY(200px)' ;
    
    return(
        <div ref={ref}>
            <motion.div>
                <span style={{
                    transform: view ?  "none" : lado,
                    opacity: view ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}>
                    {children}
                </span>
            </motion.div>
        </div>
    );
}

