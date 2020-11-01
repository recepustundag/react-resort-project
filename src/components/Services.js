import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../components/Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free FaCocktail",
        info:
          "Lorem İpsum dolor sit amet consectetur Lorem İpsum dolor sit amet consectetur",
      },
      {
        icon: <FaHiking />,
        title: "free FaHiking",
        info:
          "Lorem İpsum dolor sit amet consectetur Lorem İpsum dolor sit amet consectetur",
      },
      {
        icon: <FaShuttleVan />,
        title: "free FaShuttleVan",
        info:
          "Lorem İpsum dolor sit amet consectetur Lorem İpsum dolor sit amet consectetur",
      },
      {
        icon: <FaBeer />,
        title: "free FaBeer",
        info:
          "Lorem İpsum dolor sit amet consectetur Lorem İpsum dolor sit amet consectetur",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
