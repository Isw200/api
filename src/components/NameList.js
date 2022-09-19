import React, { Component } from "react";
import Button from "./Button";
import "./NameListStyles.css";
import Person from "./Person";

class NameList extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          id: 0,
          name: "Isuru",
          email: "isu@123.com",
          avatar:
            "https://robohash.org/expeditainvoluptatem.png?size=300x300&set=set1",
        },
        {
          id: 1,
          name: "John",
          email: "jhon@123.com",
          avatar:
            "https://robohash.org/etveniamoccaecati.png?size=300x300&set=set1",
        },
      ],
    };
    this.add_newPerson = this.add_newPerson.bind(this);
  }

  add_newPerson() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
      },
    };

    fetch("https://random-data-api.com/api/v2/users", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let newPerson = {
          id: response.id,
          name: response.first_name,
          email: response.email,
          avatar: response.avatar,
        };
        console.log(newPerson);

        const newList = [...this.state.person, newPerson];

        // console.log(newList);

        this.setState({
          person: newList,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <Button addBtn={this.add_newPerson} />
        <div>
          {this.state.person.map((user) => (
            <Person key={user.id} user={user} />
          ))}
        </div>
        {console.log(this.state.person)}
      </div>
    );
  }
}

export default NameList;
