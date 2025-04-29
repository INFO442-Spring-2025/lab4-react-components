import styles from '../styles/card.css';

export default function Card(props) {
    const data = props.data;
    const increment = props.increment;
    const decrement = props.decrement;

    const name = data.name;
    const age = data.age;
    const major = data.major;
    const img = data.img;
    const desc = data.desc;

    return (
        <div className="card">
            <img src={img} className={styles.card} alt={desc}/>
            <div className="card-body">
                <h5 className="card-title">{name}, {age}</h5>
                <p className="card-text">{major}</p>
                <a href="https://canvas.uw.edu" className="btn btn-primary">Go to Canvas</a>
                <button onClick={increment} className="btn btn-success">Go up 1</button>
                <button onClick={decrement} className="btn btn-danger">Go down 1</button>
            </div>
        </div>
    )


}