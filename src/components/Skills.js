import { Progress, Grid, Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";

export const Skills = () => {
  const skills = [
    {
      name: "C++",
      value: 70,
      color: "warning",
    },
    {
      name: "Golang",
      value: 90,
      color: "primary",
    },
    {
      name: "Python",
      value: 60,
      color: "warning",
    },
    {
      name: "JavaScript",
      value: 80,
      color: "secondary",
    },
    {
      name: "NodeJS",
      value: 80,
      color: "primary",
    },
    {
      name: "Flask",
      value: 50,
      color: "gradient",
    },
    {
      name: "ReactJS",
      value: 60,
      color: "primary",
    },
    {
      name: "MySQL",
      value: 70,
      color: "gradient",
    },
    {
      name: "MongoDB",
      value: 60,
      color: "warning",
    },
    {
      name: "Docker",
      value: 60,
      color: "secondary",
    },
    {
      name: "GIT",
      value: 80,
      color: "gradient",
    },
    {
      name: "AWS",
      value: 60,
      color: "warning",
    },
  ];

  return (
    <Box id="skills" css={{ px: "$50", mt: "$8", "@xsMax": { px: "$10" } }}>
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
      <Grid.Container justify="center">
        {skills.map((skill) => (
          <Grid
          xs={12} md={6}
            css={{
              padding: "0px 0px 0px 0px",
            }}
            justify="center"
            key = {skill.name}
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
              {skill.name}
              <Spacer y={1} />
              <Progress
                value={skill.value}
                color={skill.color}
                css={{ width: "500px", "@xsMax": { width: "300px" } }}
              />
            </Text>
          </Grid>
        ))}
      </Grid.Container>
    </Box>
  );
};
