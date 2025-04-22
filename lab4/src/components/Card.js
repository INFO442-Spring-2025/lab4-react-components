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
        <div class="card">
            <img src={img} class="card-img-top" alt={desc}/>
            <div class="card-body">
                <h5 class="card-title">{name}, {age}</h5>
                <p class="card-text">{major}</p>
                <a href="https://canvas.uw.edu" class="btn btn-primary">Go to Canvas</a>
                <button onClick={increment} class="btn btn-success">Go up 1</button>
                <button onClick={decrement} class="btn btn-danger">Go down 1</button>
            </div>
        </div>
    )


}