
const Header = ({searchCategory, setSearch}) => {
    return (
        <header className='row align-items-center justify-content-around'
                style={{backgroundColor:'red'}}>
            <h1 style={{color:'white'}} >Super</h1>
            <input placeholder='Search' type="text" onChange={e => setSearch(e.target.value)}/>
        </header>
    )
}

export default Header;