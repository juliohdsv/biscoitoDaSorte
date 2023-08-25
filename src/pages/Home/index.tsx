import { useState } from "react";
import "./style.css";

import Card from "../../components/Card/index";
import Biscoito from "../../components/Biscoito/index";

const arr = [
    "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar",
    "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito",
    "Não se aprende bem a não ser pela experiência",
    "Faça de seus sonhos um objetivo!",
    "Você pode ser tudo que quiser!",
    "A mentira enfraquece e a verdade nos faz forte, para suportar qualquer dor, e para sarar qualquer corte",
    "O que sabemos é uma gota; o que ignoramos é um oceano",
    "Os bons momentos não são só registrados na memória",
    "O segredo da felicidade é manter a felicidade em segredo",
    "Esperança é perceber que, por pior que seja aquele dia, haverá outro totalmente inesperado",
    "Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo",
    "É fácil pensar, é difícil agir, mas agir segundo o próprio pensamento é o mais difícil",
    "Oportunidades não surgem. É você que as cria",
    "Uma pequena mudança positiva pode mudar todo o seu dia",
    "A vida começa no final da sua zona de conforto",
    "Seja de verdade em tudo que você faz",
    "O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo",
    "Todo mundo começa forte. O sucesso vem para aqueles que têm um compromisso inabalável de continuar assim até o fim",
    "Não tenha pressa. Amanhã será um novo recomeço",
    "Não fique esperando o futuro para ser feliz, faça do presente a sua alegria",
]

const Home = () =>{

    const [texts, setTexts] = useState<string[]>([
  
    ]);

    function getCard(){

        const id:number = Math.floor(Math.random() * arr.length);
        setTexts([arr[id]]);
    }

    return(
        <div className="container">
            <Biscoito/>
            <h1>Biscoito da sorte</h1>
            {
                texts.map(text => {
                    return <Card text={text} />
                })
            }
            <div className="container-btn">
                <button onClick={getCard}>Abrir biscoito</button>
            </div>
        </div>
    );
}

export default Home;

