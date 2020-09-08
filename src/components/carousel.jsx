import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./card";

import blogsite from "../assets/images/blogsite.jpg";
import linkedin from "../assets/images/linkedin.jpg";
import github from "../assets/images/alt_github.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Jordan's Gym Locker",
          subTitle: "Affiliate blog site using WordPress",
          imgSrc: blogsite,
          link: "http://jordansgymlocker.com",
          selected: false
        },
        {
          id: 1,
          title: "LinkedIn",
          subTitle: "My LinkedIn Profile",
          imgSrc: linkedin,
          link: "https://www.linkedin.com/in/jordan-miles-675b20139/",
          selected: false
        },
        {
          id: 2,
          title: "Github",
          subTitle: "Github profile",
          imgSrc: github,
          link: "https://github.com/J0Miles",
          selected: false
        }
      ]
    };
  }

  handleCardClick = id => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default Carousel;
