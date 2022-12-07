import React from "react";
import { Navbar, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "./Acemelogo";

export const Topbar = () => {
  const collapseItems = [
    "About Me",
    "Skill Section",
    "Experience",
    "Contact Me",
  ];

  return (
    <Navbar variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ARGHYA
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link isActive href="#">
          About Me
        </Navbar.Link>
        <Navbar.Link href="#">Skill Section</Navbar.Link>
        <Navbar.Link href="#">Experience</Navbar.Link>
        <Navbar.Link href="#">Contact Me</Navbar.Link>
      </Navbar.Content>
      

      <Navbar.Collapse showIn="xs">
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              // isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
    </Navbar>
  );
};
