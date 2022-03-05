function TourList({tours,deleteTour,readMore,setReadMore}){
    return (
        <div className="cardList">
            {tours.map((tour)=>(
                <div className="card" key={(tour.id)}>
                    <img className="resim" src={tour.image} alt="" />

                    <div className="card-header">
                        <p className="left">{tour.name}</p>
                        <p className="right">${tour.price}</p> 
                    </div>

                    <div className="card-body">
                        <p>{readMore ? tour.info : `${tour.info.substring(0,200)}...`} <button className="toggleButton" onClick={()=>setReadMore(!readMore)}>{readMore ? "See Less" : "See More"}</button></p>
                    </div>

                    <div className="card-footer">
                        <button onClick={()=>deleteTour(tour.id)}>Not Interested</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TourList