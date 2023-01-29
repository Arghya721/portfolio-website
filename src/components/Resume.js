import { Progress, Grid, Text, Spacer, css } from "@nextui-org/react";
import { Box } from "./Box.js";
import "../styles/Resume.css";

export const Resume = () => {
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
          Resume
        </Text>
      </Grid.Container>
      <Grid.Container
        justify="center"
        css={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Grid
          xs={12}
          md={6}
          css={{
            padding: "0px 0px 0px 0px",
          }}
          justify="center"
        >
          <div>
            <Text h1>
              Summary
              <Spacer y={1} />
              <Text className="resume-item" h5>
                ARGHYADEEP GHOSH
                <Text h5>
                  I am a computer programmer and a web developer. I am seeking a
                  role that will allow me to demonstrate my expertise and unlock
                  my full potential in delivering value to the company.
                </Text>
                <Text
                  h6
                  css={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  <li>Jhargram , West Bengal , India</li>
                  <Spacer y={1} />
                  <li>imarghyadeep@gmail.com</li>
                </Text>
              </Text>
            </Text>

            <Text h1>
              Education
              <Spacer y={1} />
              <Text
                className="resume-item"
                h5
                css={{
                  marginBottom: "0px",
                }}
              >
                COMPUTER SCIENCE AND ENGINEERING (B.TECH)
                <Text h5>2019-2023</Text>
                <h5
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Kalinga Institute of Industrial Technology
                </h5>
                <h6
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  CGPA- 9.23/10
                </h6>
              </Text>
              <h5
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
                className="resume-item"
              >
                HIGHER SECONDARY

                <Text h5>2019</Text>
                <Text h5> Vidya Bharati Chinmaya Vidyalaya</Text>
                <Text h5>Percentage-85%</Text>
              </h5>

              <h5
                style={{
                  marginTop: "0px",
                }}
                className="resume-item"
              >
                HIGH SCHOOL

                <Text h5>2017</Text>
                <Text h5> West End High School</Text>
                <Text h5>Percentage-88%</Text>
              </h5>
            </Text>

            <Text h1 className="resume-item">
              Summary
              <h6>
                Hey there! I'm a Full Stack Developer from India. I'm passionate
                about building web applications and learning new technologies.
              </h6>
            </Text>

            <Text h1 className="resume-item">
              Summary
              <h6>
                Hey there! I'm a Full Stack Developer from India. I'm passionate
                about building web applications and learning new technologies.
              </h6>
            </Text>
          </div>
        </Grid>

        <Grid
          xs={12}
          md={6}
          css={{
            padding: "0px 0px 0px 0px",
          }}
          justify="center"
        >
          <div>
            <Text h1 className="resume-item">
              Summary
              <h6>
                Hey there! I'm a Full Stack Developer from India. I'm passionate
                about building web applications and learning new technologies.
              </h6>
            </Text>

            <Text h1 className="resume-item">
              Summary
              <h6>
                Hey there! I'm a Full Stack Developer from India. I'm passionate
                about building web applications and learning new technologies.
              </h6>
            </Text>

            <Text h1 className="resume-item">
              Summary
              <h6>
                Hey there! I'm a Full Stack Developer from India. I'm passionate
                about building web applications and learning new technologies.
              </h6>
            </Text>

            <Text h1 className="resume-item">
              Summary
              <h6>
                Hey there! I'm a Full Stack Developer from India. I'm passionate
                about building web applications and learning new technologies.
              </h6>
            </Text>
          </div>
        </Grid>
      </Grid.Container>
    </Box>
  );
};
