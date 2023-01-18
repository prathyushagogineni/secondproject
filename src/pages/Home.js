import React, { useContext } from "react";

import { Container, Header, Image, Label } from "semantic-ui-react";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  const { user } = context;

  const greeting = user ? (
    <div>
      <Label size="massive" color="teal">
        Welcome, {user.email}
      </Label>
    </div>
  ) : (
    <div>
      
        
      
    </div>
  );

  return (
    <Container textAlign="center">
      <img
        src="https://www.shutterstock.com/image-vector/round-card-sport-icons-260nw-125354189.jpg"
        size="large"
        centered
      />
      <Header as="h1" color="purple">
      Sport Accessories Store
      </Header>
      <Header as="h3">
        
      </Header>
      {greeting}
    </Container>
  );
}
