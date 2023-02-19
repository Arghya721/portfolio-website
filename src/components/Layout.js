import { Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";
import { Content } from "./Content.js"
import { Skills } from "./Skills";
import {Experience} from "./Experience";
import {Projects} from "./Projects";
 

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
    <Spacer />
    <Skills />
    <Experience />
    <Projects />
  </Box>
);
