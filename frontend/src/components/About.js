function About(){

    const backgroundImageStyle = {
        backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.a2a1E_P9IdejQRurjgnphwHaEF&pid=Api&P=0&h=180")',
        backgroundSize: 'cover',
        padding: '50px 0' // Optional: Adds some padding to the top and bottom
      };
    return(

    
      <div style={backgroundImageStyle}>
     <div className="container text-center ">
        <h1>Welcome to AppStore</h1>
        <p className="lead">Welcome to our App Store, a one-stop destination for discovering and exploring a diverse range of applications across various categories. Whether you're looking for the latest games, beauty tips, health trackers, fashion inspiration, or resources tailored for women, we've got you covered. Our app store features a curated selection of high-quality apps, each designed to enhance different aspects of your life.</p>
        <div className="row featurette mb-5 ">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Games</h2>
            <p className="lead">Dive into the latest and greatest games, from action-packed adventures to relaxing puzzles. Whether you're a casual gamer or a hardcore enthusiast, our game category has something for you.</p>
          </div>
          <div className="col-md-5">
          <img src="https://tse1.mm.bing.net/th?id=OIP.bYSPNGXIOQQGn044AvEvxAHaEK&pid=Api&P=0&h=180" height={400} class="d-block w-100" alt="..."/>
              
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Beauty</h2>
            <p className="lead">Discover apps that offer beauty tips, makeup tutorials, skincare routines, and more. Stay updated with the latest beauty trends and techniques to keep you looking your best.</p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src="https://tse4.mm.bing.net/th?id=OIP.KwItfc0ooWeTmqzMSjt3nQHaFr&pid=Api&P=0&h=180" height={400} class="d-block w-100" alt="..."/>
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Fashion</h2>
            <p className="lead">Get fashion inspiration, style tips, and shopping guides from top designers. Stay ahead of fashion trends with curated collections and daily outfit ideas.</p>
          </div>
          <div className="col-md-5"> <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600" height={400} class="d-block w-100" alt="..."/>
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Health</h2>
            <p className="lead">Find health and wellness apps that help you track your fitness, monitor your diet, and maintain your overall well-being. Set personal goals, track your progress, and receive personalized health advice.</p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src="https://images.pexels.com/photos/2027696/pexels-photo-2027696.jpeg?auto=compress&cs=tinysrgb&w=600" height={400} class="d-block w-100" alt="..."/>
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
          </div>
        </div>

        <div className="row featurette mb-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Women</h2>
            <p className="lead">Access a dedicated platform for women, featuring resources, support, and inspiration to achieve your personal and professional goals. Connect with a community of like-minded women and explore content on career, health, and personal development.</p>
          </div>
          <div className="col-md-5"> <img src="https://tse2.mm.bing.net/th?id=OIP.RI7eY_sRbFtMSNbPY5jCdwHaEK&pid=Api&P=0&h=180" height={400} class="d-block w-100" alt="..."/>
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
          </div>
        </div>

        
        </div>
        </div>
      
       
       
    )
}

export default About;