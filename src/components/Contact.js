import {
    Progress,
    Grid,
    Text,
    Spacer,
    css,
    Tooltip,
    Card,
  } from "@nextui-org/react";
  
  import { Box } from "./Box.js";
  
  
  export const Contact = () => {
    return (
      <Box css={{ px: "$50", mt: "$8", "@xsMax": { px: "$10" } }}>
        <Grid.Container justify="center">
          <Text
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              fontSize: "70px",
              "@xsMax": { fontSize: "50px" },
            }}
            weight="bold"
          >
            Contact Me
          </Text>
        </Grid.Container>
        <Spacer y={2} />
        <Grid.Container justify="center" >
          
        </Grid.Container>
      </Box>
    );
  };
  