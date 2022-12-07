import React from "react";
import { Text , Container } from "@nextui-org/react";

export const About = () => {
  return (
    <Container 
      css={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "flex-start",
        justifyContent: "center",
        height: "25vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Text h1>About Page</Text>
    </Container>
  );
};
