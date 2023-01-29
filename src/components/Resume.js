import { Progress, Grid, Text, Spacer } from "@nextui-org/react";
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
      <Grid.Container justify="center" 
        css = {{
            paddingLeft: "2rem",
            paddingRight: "2rem",
        }}
      
      >
        <Grid
          xs={12} md={6}
          css={{
            padding: "0px 0px 0px 0px",
          }}
          justify="center"
          
        >

            <div>
            <Text h1 className="resume-item">
            Summary
            <h6 >
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

        <Grid
          xs={12} md={6}
          css={{
            padding: "0px 0px 0px 0px",
          }}
          justify="center"
          
        >

            <div>
            <Text h1 className="resume-item">
            Summary
            <h6 >
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
