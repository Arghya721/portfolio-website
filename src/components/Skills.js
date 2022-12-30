import { Progress, Grid, Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";

export const Skills = () => (
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
        Skills
      </Text>
    </Grid.Container>
    <Grid.Container justify="center" >
      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          C/C++
          <Spacer y={1} />
          <Progress
            value={90}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          Golang
          <Spacer y={1} />
          <Progress
            value={80}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          Python
          <Spacer y={1} />
          <Progress
            value={70}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          React
          <Spacer y={1} />
          <Progress
            value={60}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          Node.js
          <Spacer y={1} />
          <Progress
            value={50}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          Express
          <Spacer y={1} />
          <Progress
            value={40}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          MongoDB
          <Spacer y={1} />
          <Progress
            value={30}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>

      <Grid
        xs={12}
        xl={6}
        css={{
          padding: "0px 0px 0px 0px",
        }}
        justify="center"
      >
        <Text
          css={{
            textGradient: "45deg, $black -20%, $black 50%",
            paddingLeft: "50px",
            fontSize: "30px",
            "@xsMax": { fontSize: "20px" },
          }}
          weight="bold"
        >
          Mongoose
          <Spacer y={1} />
          <Progress
            value={20}
            color="success"
            css={{ width: "500px", "@xsMax": { width: "300px" } }}
          />
        </Text>
      </Grid>
    </Grid.Container>
  </Box>
);
