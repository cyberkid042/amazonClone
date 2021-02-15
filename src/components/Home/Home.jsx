import Product from "../Products/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id={1}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=851&q=80"
        />

        <Product
          id={2}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={1119.99}
          rating={4}
          image="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </div>

      <div className="home__row">
        <Product
          id={3}
          title="Coffee maker and mixer"
          price={89.99}
          rating={5}
          image="https://images.unsplash.com/photo-1562559214-20fd2784aa26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80"
        />

        <Product
          id={4}
          title="Kid's Fashion"
          price={22.85}
          rating={5}
          image="https://images.unsplash.com/flagged/photo-1562088440-ee50e79b2f98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=743&q=80"
        />

        <Product
          id={5}
          title="Engine Bicycles: Limited Edition"
          price={230.99}
          rating={5}
          image="https://images.unsplash.com/photo-1505898718170-efd614096394?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80"
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Old Skool Television set"
          price={99.99}
          rating={3}
          image="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </div>
    </div>
  );
};

export default Home;
