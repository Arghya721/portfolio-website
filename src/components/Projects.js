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

import { Crypto } from "./ProjectCards/Crypto";
import { Blog } from "./ProjectCards/Blog.js";

export const Projects = () => {
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
          Projects
        </Text>
      </Grid.Container>
      <Spacer y={2} />
      <Grid.Container justify="center" >
        <Grid xs={12} md={6} sm={4}>
          <Crypto />
        </Grid>
        {/* <Grid xs={12} sm={4}>
          <Blog />
        </Grid> */}
      </Grid.Container>
    </Box>
  );
};
