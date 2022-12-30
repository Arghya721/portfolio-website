import { Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";
import { Content } from "./Content.js"
import { Skills } from "./Skills";


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
  </Box>
);
