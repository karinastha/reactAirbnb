import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Star from "./components/Star";
import data from "./data"
import cardImage from './images/img2.jpg';

export default function App() {
  // return (
  // <div>
  //   {data.map(item =>
  //     <Card
  //       img={item.coverImg}
  //       rating={item.stats.rating}
  //       reviewCount={item.stats.reviewCount}
  //       location={item.location}
  //       title={item.title}
  //       price={item.price}
  //       openSpots={item.openSpots}
  //     />)}
  // </div>
  //     <div>asdasd</div>
  //   )
  // }

  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        {data.map((dat, index) => <Card key={index} />)}
      </section>
      {/* <Card
        img={cardImage}
        rating={5.0}
        reviewCount={6}
        country="Australia"
        title="Adventure with Jason Mark"
        price={136}
      />
      <Card
        img="../images/img2.jpg"
        rating={8.0}
        reviewCount={10}
        country="Nepal"
        title="Life Lessons with Pasang Sherpa"
        price={150}
      />
      <Card
        img="../images/img2.jpg"
        rating={9.0}
        reviewCount={4}
        country="USA"
        title="Kayoking with Katie Jeff"
        price={114}
      />
      <Card
        img="../images/img2.jpg"
        rating={9.0}
        reviewCount={4}
        country="USA"
        title="Kayoking with Katie Jeff"
        price={114}
      /> */}
      {/* <section className="card--list">
        {cards}
      </section> */}

      {/* <Star isFilled={contact.isFavourite}/> */}
    </div>
  )
}
// function Holiday(destination, days) {
//   this.destination = destination;
//   this.day = days;
//   Holiday.prototype.info = function () {
//     console.log(this.destination + ' | ' + this.days + 'days');

//   };
// }
