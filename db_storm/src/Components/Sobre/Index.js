import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import './Sobre.css';

const cards = [
  {
    foto: 'https://dummyimage.com/300x300',
    titulo: 'Uma ideia inovadora',
    texto: "consectetur adipiscing elit, sed do magna aliqua m ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua",
    ano: 1994,
    mes: 'Novembro'
  },
  {
    foto: 'https://dummyimage.com/300x300',
    titulo: 'Uma ideia inovadora',
    texto: "consectetur adipiscing elit, sed do magna aliqua m ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua",
    ano: 2006,
    mes: 'Setembro'
  },
  {
    foto: 'https://dummyimage.com/300x300',
    titulo: 'Uma ideia inovadora',
    texto: "consectetur adipiscing elit, sed do magna aliqua m ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua",
    ano: 2010,
    mes: 'Outubro'
  },
  {
    foto: 'https://dummyimage.com/300x300',
    titulo: 'Uma ideia inovadora',
    texto: "consectetur adipiscing elit, sed do magna aliqua m ipsum dolor sit amet, consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua consectetur adipiscing elit, sed do magna aliqua",
    ano: 2014,
    mes: 'Dezembro'
  }
]

export default function App(){

  const innerSlide = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(innerSlide.current.offsetWidth - window.outerWidth + 550); // Quanto o slide poder deslizar para a direita.
  }, []);

  return(
    <div className='Sobre'>
        <h1 className='titulo-sobre'>A inovação mora aqui</h1>
        <p className='apresentacao-sobre'>{cards[0].texto}</p>
        <h2 className='titulo-slider-sobre'>Uma breve história da <br/> DB Storm</h2>

            <motion.div whileTap={{cursor: 'grabbing'}} className='slider'>
                    <motion.div className='inner-slider'
                    ref={innerSlide}
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    >
                        {cards.map((item, index) => (
                            <Card key={index} foto={item.foto} titulo={item.titulo} textoSlide={item.texto} ano={item.ano} mes={item.mes}/>
                        ))}
                    </motion.div>
            </motion.div>
        
    </div>
  )
}

function Card(props){

  return(
    <motion.div className='slide-sobre'
    initial={{opacity: 0.5}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    viewport={{margin: '0px -500px 0px -500px'}}
    >
        <div className='imagem-slide'>
            <img src={props.foto}/>
        </div>
        <div className='texto-slide'>
            <h6>{props.titulo}</h6>
            <p>{props.textoSlide}</p>
        </div>

            <motion.h6 className='mes-acontecimento-contato'
            initial={{opacity: 0, y: 70, x: 100}}
            whileInView={{y: 0, x: 0, opacity: 1}}
            viewport={{margin: '0px -750px 0px 0px'}}
            >
                {props.mes}
            </motion.h6>

            <motion.h6 className='ano-acontecimento-contato'
            initial={{opacity: 0, y: -70, x: -100}}
            whileInView={{y: 0, x: 0, opacity: 1}}
            viewport={{margin: '0px 0px 0px -225px'}}
            transition={{delay: 0.3}}
            >
                {props.ano}
            </motion.h6>
    </motion.div>
  )
}