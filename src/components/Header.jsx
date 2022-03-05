function Header({tours,refreshPage}){
    return (
        <div className="header">
            {tours.length>0 ? (<h3 className="headerList">Our Tours</h3>) : (<> <h3>No Tours Left</h3> <button onClick={refreshPage} className="header-button">Refresh</button> </>)}
        </div>
    )
}

export default Header;