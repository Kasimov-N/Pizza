function Card(a) {
    return (
            <div className="card">
                <img src={a.img} alt="" />
                <h1>{a.h1}</h1>
                <div className="parag">
                    <p>{a.p}</p>
                </div>
                <h2>{a.h2}</h2>
                <select name="" id="">
                    <option value="">Regular</option>
                    <option value="">one time</option>
                </select>
                <button>Add to cart</button>
            </div>
    )
}

export default Card