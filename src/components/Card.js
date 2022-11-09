import React from "react";
import './css/Card.css'
 


function Card(props){

    return(
        <>  
            <div className="card">
                <h2 className="card-title">Um pouco sobre mim</h2>
                <p className="card-text">
                Olá, eu sou Eduardo até o momento que eu estou desenvolvendo este site, ainda sou aluno de Engenharia da Computação da UFPA. Local que proporcionou um monte de experiências com tecnologia, mas sem dúvidas as mais marcantes foram com programação.
                <br/>
                O campeonato de RedCode, ou fazer um jogo 3D na Unity, fazer uma calculadora completa no Logisim, criar um Website para crianças com Discalculia, uma IA que reconhece números escritos à mão e scripts para resolver problemas matemáticos.
                <br/>
                Após essas e outras experiências, passei por diversas linguagens de programação como C, C++, Java, JavaScript, python, C#, e percebi a minha verdade e o que eu  realmente gosto de fazer, bom eu gosto de programar.
                </p>
            </div>
        </>
    )
}

export default Card