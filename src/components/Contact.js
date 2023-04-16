import { Text , Grid , Spacer , useTheme } from "@nextui-org/react";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { Box } from "./Box.js";

export const Contact = () => {
  const { isDark } = useTheme();


  return (
    <Box id="contact" css={{ px: "$50", mt: "$8", "@xsMax": { px: "$10" } }}>

      <Grid.Container justify="center" style={{
        marginTop: "5rem",
      }}>
        <Text p 
          weight="bold"
        >
          Thank you for visiting my personal portfolio website. Connect with me over socials. Keep Rising 🚀
        </Text>
      </Grid.Container>
      <Spacer y={2} />

      <Grid.Container justify="center" style={{
        marginTop: "5rem",
      }}>
      <Grid xs={4} md={4} sm={4} xl={4} css={{
              padding: "0px 0px 0px 0px",
            }}
            justify="center">
          <Text p>@Arghyadeep | Portfolio</Text>
        </Grid>
        <Grid xs={2} md={2} sm={2} xl={2} css={{
              padding: "0px 0px 0px 0px",
            }}
            justify="center">
          <a href="https://twitter.com/Arghya72" rel="noreferrer" target="_blank">
            <AiFillTwitterSquare size="2em" color={isDark ? "white" : "black"} />
          </a>
        </Grid>
        <Grid xs={2} md={2} sm={2} xl={2} css={{
              padding: "0px 0px 0px 0px",
            }}
            justify="center">
          <a href="https://www.instagram.com/_arghya.deep_/" rel="noreferrer" target="_blank">
            <AiFillInstagram size="2em" color={isDark ? "white" : "black"} />
          </a>
        </Grid>

        <Grid xs={2} md={2} sm={2} xl={2} css={{
              padding: "0px 0px 0px 0px",
            }}
            justify="center">
          <a href="https://www.linkedin.com/in/arghyadeep-ghosh-08307b1a9/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin size="2em" color={isDark ? "white" : "black"} />
          </a>
        </Grid>

        <Grid xs={2} md={2} sm={2} xl={2} css={{
              padding: "0px 0px 0px 0px",
            }}
            justify="center">
          <a href="https://github.com/Arghya721" rel="noreferrer" target="_blank">
            <AiFillGithub size="2em" color={isDark ? "white" : "black"} />
          </a>
        </Grid>
      </Grid.Container>
    </Box>
  );
};