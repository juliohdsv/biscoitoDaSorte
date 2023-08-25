import "./style.css";

type CardProps = {
    text:string
}

export default function Card(props: CardProps){

    return(
        <div className="card">
            <h3>{props.text}</h3>
        </div>
    );
}
