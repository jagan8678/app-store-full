
function Home(){
  const backgroundImageStyle = {
    backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.a2a1E_P9IdejQRurjgnphwHaEF&pid=Api&P=0&h=180")',
    backgroundSize: 'cover',
    padding: '50px 0' // Optional: Adds some padding to the top and bottom
  };

  return (
   <>
     <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src="https://tse4.mm.bing.net/th?id=OIP.gKTPSQroJo1dqNlDiFt_GAHaEK&pid=Api&P=0&h=180" height={600} class="d-block w-100" alt="..."/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Welcome to AppStore</h1>
            <p>Discover the latest and greatest applications across diverse categories tailored to fit your needs and interests.</p>

          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} class="d-block w-100" alt="..."/>
        <div className="container">
          <div className="carousel-caption">
            <h1>Your App Hub</h1>
            <p>Find, review, and enjoy the best apps available, curated just for you, with easy navigation and detailed insights.</p>
          
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP.Q3BBjXX-OSaWp0QkouJ3FgHaEK&pid=Api&P=0&h=180" height={600} class="d-block w-100" alt="..."/>
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Explore Apps</h1>
            <p>Browse and explore a wide range of applications, from games and fashion to health and beauty, all in one place.</p>
  
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


<div style={backgroundImageStyle}>
  <div className="container marketing mt-5">

      <div className="row">
        <div className="col-lg-4"> 
          <img src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
            
            
          <h2 className="fw-normal">Games</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View Details
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        
      </div>
      <div class="modal-body">
      Goto Lists Section You will find All Details
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="col-lg-4"> 
          <img src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
           
            
          <h2 className="fw-normal">Beauty</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View Details
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        
      </div>
      <div class="modal-body">
      Goto Lists Section You will find All Details
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div> 
        <div className="col-lg-4">
        <img src="https://tse2.mm.bing.net/th?id=OIP.bnVXuBCYHZfYnXea9yzkEAHaE8&pid=Api&P=0&h=180" height={500} class="d-block w-100" alt="..."/>
           
           
          <h2 className="fw-normal">Fashion</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View Details
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        
      </div>
      <div class="modal-body">
      Goto Lists Section You will find All Details
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="col-lg-4">
        <img src="https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
            
            
          <h2 className="fw-normal">Health</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View Details
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        
      </div>
      <div class="modal-body">
      Goto Lists Section You will find All Details
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="col-lg-4">
        <img src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} class="d-block w-100" alt="..."/>
            
           
          <h2 className="fw-normal">Women</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View Details
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
        
      </div>
      <div class="modal-body">
      Goto Lists Section You will find All Details
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

          
        </div>
      </div>

      
    </div> 

      
      </div>
      </>
  )
}
export default Home;