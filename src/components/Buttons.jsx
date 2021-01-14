const Buttons = ({next, previous}) => {
    return (
        <div className='row align-items-center justify-content-around'>
            <button style={{width:'6rem', margin:'1rem'}} className="btn btn-primary" onClick={previous}>Previous</button>
            <button style={{width:'6rem', margin:'1rem'}} className="btn btn-primary" onClick={next}>Next</button>
        </div>
    )
}

export default Buttons;