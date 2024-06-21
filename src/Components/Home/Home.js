
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const [data, setData] = useState(false)

  const navigate = useNavigate()

  const visit = () => {
    setData(true)
    navigate('/signup')
  }

  return (
    <div>

      <div className='home'>
        <div>
          <h2>
            Discover The Perfect Balance
            Of Hospitality, Luxury And
            Comfort.
          </h2>
          <h3>We are focused on providing clients with the highest level
            of comfort and excellent affordable rates</h3>
        </div>
      </div>
      <div>
        <h4>Client Reviews</h4>
        <h6>We are very proud of the services we offer to our customers.
          Read every word from our happy customers.</h6>
      </div>

      <div className="row cards row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card caaar">
            <img src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <button onClick={visit}>Visit here</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card caaar">
            <img src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <button onClick={visit}>Visit here</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card caaar">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/900/805/small_2x/beautiful-luxury-umbrellas-and-chairs-around-an-outdoor-swimming-pool-in-hotel-and-resort-with-coconut-palm-trees-on-sunset-or-sunrise-sky-holiday-and-vacation-concept-photo.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <button onClick={visit}>Visit here</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card caaar">
            <img src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <button onClick={visit}>Visit here</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home