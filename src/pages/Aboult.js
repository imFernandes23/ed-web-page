import React from "react";
import './css/Aboult.css'
import Card from "../components/Card";
import ColorDrop from "../components/ColorDrop";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as SiIcons from 'react-icons/si'





function Aboult(props){
    

    return(
        <div className={props.state > 1 ? 'page' : 'page active'} onClick={() =>  props.click(1)}>
            <div className={props.state === 1 ? 'content active' : 'content'}>
            <Card/>
            <ColorDrop 
                color={'#EBE55A'} 
                icon={<SiIcons.SiJavascript/>} 
                posiX={'20%'} posiX2={'42.5%'}
                cardTitle={'Desenvolvimento Web'}
                cardText={<p>
                    O desenvolvimento web surgiu apenas como um hobbie, aprendendo o básico de HMTL, CSS e JavaScript, meu primeiro uso acadêmico dessa tecnologia foi no desenvolvimento de um protótipo de uma plataforma chamada Contei, ela tinha alguns jogos infantis que estimulava a contagem e escrita para crianças com Discalculia, um problema que dificulta que elas reconheçam números, no protótipo tinha um quadro feito Canvas para as crianças escreverem com o toque ou mouse os resultados dos jogos e a API do Google faz o reconhecimento dos números. O protótipo funciona e está ativo até hoje no github pages, fazer a interface e criar jogos em JavaScript sem nenhum framework de um trabalhão.
                    <br/>
                    Hoje o desenvolvimento front-end se tornou uma das minhas principais buscas de estudo, e é a área que eu pretendo atuar no mercado.
                </p>}    
                />
            <ColorDrop 
                color={'#3D92CB'} 
                icon={<FaIcons.FaReact/>} 
                posiX={'40%'} posiX2={'47.5%'}
                cardTitle={'React.js'}
                cardText={<p>
                    O React.js foi uma das primeiras ferramentas para desenvolvimento front-end que eu tive contato, ela abriu um leque de possibilidades nunca antes visto por mim, este site inclusive foi todo desenvolvido em React.js.
                    <br/>
                    Eu gostei tanto da biblioteca que resolvi usar ela para fazer meu TCC, que é uma interface interativa de mapas digitais, que carrega várias informações bem regionais de Belém, o link dela vai está na página de projetos.
                    <br/>
                    Bom, no momento estou de olho também no React Native para desenvolvimento Mobile, acredito que será bastante interessante expandir o alcance dos meus projetos no futuro.
                </p>}
                />
            <ColorDrop
                color={'#7127F2'} 
                icon={<FaIcons.FaPython/>} 
                posiX={'60%'} posiX2={'52.5%'}
                cardTitle={'Python'}
                cardText={<p>
                    O meu primeiro contato com python foi para gerar transformadas de Fourier em tempo discreto de algumas funções através de plataforma Google Collaboratory, e através dessas tarefas aprendi bastante utilizar a biblioteca numpy e a biblioteca matplotlib, e gerar rotinas para solucionar alguns problemas matemáticos, sem dúvidas conhecimentos de cálculo e matrizes ajudaram nesse processo de aprendizado.
                    <br/>
                    Eu ainda pretendo fazer alguns projetos mais interativos com python, algo que difere de cálculo e que seja mais atrativo para o público em geral, para colocar aqui nessa página.
                </p>}
                />
            <ColorDrop 
                color={'#DE6B57'} 
                icon={<AiIcons.AiOutlineDatabase/>} 
                posiX={'80%'} posiX2={'57.5%'}
                cardTitle={'Scikit-learn e Pandas'}
                cardText={<p>
                    Um assunto que também me motivou bastante a me aprimorar em python foi a possibilidade de criar sistemas inteligentes, como o curso de engenharia conta com uma base bastante sólida em cálculo e probabilidade e estatística, adicionar alguns algoritmos de aprendizado de máquina na caixa de ferramentas não foi uma tarefa difícil. 
                    <br/>
                    Aprendizado de máquina se tornou tema de algumas pesquisas pessoais, e as ferramentas Pandas, Scikit-learn e mais atualmente Tensor-Flow sempre geram bastante interesse e em breve projetos com essas ferramentas estarão disponíveis. 
                </p>}
                />
        </div>
        </div>  
    )
}

export default Aboult