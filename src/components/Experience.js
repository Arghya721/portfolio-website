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
import "../styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineCorporateFare } from "react-icons/md";
import { FaSchool, FaUniversity } from "react-icons/fa";



export const Experience = () => {

  const BobbleAI = [
    "Implemented Location-based targeting for Mint Keyboard Sticker Pack APIs using Golang.",
    "Implemented Redis to cache JSON data to reduce the latency of Mint Keyboard Sticker API which receives 10 million requests daily.",
    "Created a Dashboard using React for Content Team to manage sticker packs of Mint Keyboard."
  ]

  const HighRadius = [
    "Developed PDF and Excel parser to extract critical data from an invoice using Java and RegEx." ,
    "Designed a python bot that scraps vital data from the client’s dashboard using libraries like Beautiful Soup." ,
    "Developed a login agent API using flask which logs into the user’s account and downloads invoices with the specified ID. Deployed on AWS Lambda and currently used by the Sales team."
  ]

  const onHoverDetails = (details) => {
    return (
      
        <Card variant="bordered" css={{
          backgroundColor: "graident",
        }}>
          <Card.Body>
            <ul>
              {details.map((detail) => {
                return <li>
                  <Text>
                    {detail}
                  </Text>
                  </li>;
              })}
            </ul>
          </Card.Body>
        </Card>
    
    );
  };

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
          Experience
        </Text>
      </Grid.Container>
      {/* <Grid.Container
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

                <Text className="resume-inner-item" h5>2019</Text>
                <Text className="resume-inner-item" h5> Vidya Bharati Chinmaya Vidyalaya</Text>
                <Text className="resume-inner-item" h5>Percentage-85%</Text>
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
      </Grid.Container> */}
      <Grid.Container>
        <VerticalTimeline lineColor={"black"}>
        
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
            }}
            date="07/2022 - present"
            iconStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            icon={<MdOutlineCorporateFare />}
          >
            <Tooltip placement="top" content={onHoverDetails(BobbleAI)}>
            <h3 className="vertical-timeline-element-title">Bobble AI</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gurugram , Haryana , India
            </h4>
            <p>Full Stack Developer Intern</p>
            </Tooltip>
          </VerticalTimelineElement>

        
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
            }}
            date="2021-2022"
            iconStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            icon={<MdOutlineCorporateFare />}
          >
            <h3 className="vertical-timeline-element-title">
              High Radius Corporation
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bhubaneswar,India
            </h4>
            <p>Software Developer Intern</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
            }}
            date="2019 - 2023"
            iconStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">
              Kalinga Institute Of Industrial Technology University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bhubaneswar, Odissa
            </h4>
            <p>B.Tech:- Information Technology</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  linear-gradient(45deg,#e975a8, #726cf8)",
            }}
            date="2017 - 2018"
            iconStyle={{
              background: "linear-gradient(45deg,#e975a8, #726cf8)",
              color: "#fff",
            }}
            icon={<FaSchool></FaSchool>}
          >
            <h3 className="vertical-timeline-element-title">
              Oxford Public School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ranchi, Jharkhand
            </h4>
            <p>Intermediate</p>
            <p>PCM</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Grid.Container>
    </Box>
  );
};
