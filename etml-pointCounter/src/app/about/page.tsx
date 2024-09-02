export default function about(){
    return (
        <>
            <h1 className="text-3xl text-white text-center">A propos</h1>
            <p className="text-white">PointsCounter© est un compteur de points créé pour la gamification des modules. Il a été développé par <a href="https://github.com/ThomNardou" target="_blank">
            Thomas Louis Nardou</a> et <a href="https://github.com/LucasSimoesPolvora" target="_blank">Lucas Simões Pólvora</a>. 
            </p>
            <br/>
            <h3 className="text-xl text-white">Comment est-ce que ça marche ?</h3>
            <p className="text-white">Un(e) enseignant(e) qui donne un module aura la possibilité de faire une "gamification" du module en utilisant notre outil. Grâce aux travaux des élèves, l'ensegnant(e) pourra attribuer des 
                points aux élèves. Lorsque les élèves aurront reçu un quota de points, ils pourront utiliser ces points pour obtenir des récompenses mis à disposition de l'ensegnant(e) et gagner un badge. Ces badges seront stockés
                et démontreront la compétence de l'élève dans un certain domaine. 
            </p>
        </>
    )
}