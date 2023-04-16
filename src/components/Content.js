import { Text, Spacer , Grid , Image, useTheme } from "@nextui-org/react";
import { Box } from "./Box.js";
import MyPic from "../images/ArghyaPic.jpeg";

export const Content = () => {
  
  const { isDark } = useTheme();
  
  return (
  <Box css={{ px: "$50", mt: "$8", "@xsMax": { px: "$10" } }}>
    <Grid.Container justify="center" css={{paddingTop : "50px"}}>
      <Grid xs={12} xl={6} css={{
      padding: "0px 0px 0px 0px",
    }}>
        <Text
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            //give left padding to the text
            paddingLeft: "50px",
            fontSize:"70px",
            "@xsMax": { fontSize: "50px" },
          }}
          weight="bold"
        >
          I'm a Full Stack 
          <br />
          Developer
          <Text size={20} weight="bold" css={{ 
            // text graident will be black
            textGradient: !isDark ? "45deg, $black -20%, $black 50%" : "45deg, $blue600 -20%, $pink600 50%",
           }}>
          Hey there! I'm a Full Stack Developer from India. I'm passionate about building web applications and learning new technologies. 
          <br />
          I'm currently working on a few projects and learning new technologies.
          </Text>
        </Text>
      </Grid>
      <Spacer y={1} />
      <Grid xs={12} xl={6}>
        <Image
         // give image a rounded corner
          css={{ 
            borderRadius:"10%",
            overflow:"hidden",
            width: "500px", height: "500px", "@xsMax": { width: "300px", height: "300px" }
          }}
         src={MyPic}
         alt="Default Image"
         objectFit="cover"
        />
      </Grid>
    </Grid.Container>

    <Spacer y={1} />
  </Box>
)};
