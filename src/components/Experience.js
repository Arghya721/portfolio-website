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
  // const BobbleAI = [
  //   "Implemented Location-based targeting for Mint Keyboard Sticker Pack APIs using Golang.",
  //   "Implemented Redis to cache JSON data to reduce the latency of Mint Keyboard Sticker API which receives 10 million requests daily.",
  //   "Created a Dashboard using React for Content Team to manage sticker packs of Mint Keyboard.",
  // ];

  // const HighRadius = [
  //   "Developed PDF and Excel parser to extract critical data from an invoice using Java and RegEx.",
  //   "Designed a python bot that scraps vital data from the client’s dashboard using libraries like Beautiful Soup.",
  //   "Developed a login agent API using flask which logs into the user’s account and downloads invoices with the specified ID. Deployed on AWS Lambda and currently used by the Sales team.",
  // ];

  // const onHoverDetails = (details) => {
  //   return (
  //     <Card
  //       css={{
  //         background:
  //           "linear-gradient(162deg, rgba(241,118,180,1) 23%, rgba(66,91,246,1) 73%, rgba(146,124,235,1) 83%)",
  //       }}
  //     >
  //       <Card.Body>
  //         <ul>
  //           {details.map((detail) => {
  //             return (
  //               <li>
  //                 <Text>{detail}</Text>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </Card.Body>
  //     </Card>
  //   );
  // };

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
            {/* <Tooltip placement="top" content={onHoverDetails(BobbleAI)}> */}
            <Text
              css={{
                color: "white",
              }}
              h3
              className="vertical-timeline-element-title"
            >
              Bobble AI
            </Text>
            <Text
              css={{
                color: "white",
              }}
              h4
              className="vertical-timeline-element-subtitle"
            >
              Gurugram , Haryana , India
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              Full Stack Developer Intern
            </Text>
            {/* </Tooltip> */}
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
            {/* <Tooltip placement="topStart" content={onHoverDetails(HighRadius)}> */}
            <Text
              css={{
                color: "white",
              }}
              h3
              className="vertical-timeline-element-title"
            >
              High Radius Corporation
            </Text>
            <Text
              css={{
                color: "white",
              }}
              h4
              className="vertical-timeline-element-subtitle"
            >
              Bhubaneswar,India
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              Software Developer Intern
            </Text>
            {/* </Tooltip> */}
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
            <Text
              css={{
                color: "white",
              }}
              h3
              className="vertical-timeline-element-title"
            >
              Kalinga Institute Of Industrial Technology University
            </Text>
            <Text
              css={{
                color: "white",
              }}
              h4
              className="vertical-timeline-element-subtitle"
            >
              Bhubaneswar, Odissa
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              B.Tech:- Information Technology
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              CGPA:- 9.20
            </Text>
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
            <Text
              css={{
                color: "white",
              }}
              h3
              className="vertical-timeline-element-title"
            >
              Vidya Bharati Chinmaya Vidyalaya
            </Text>
            <Text
              css={{
                color: "white",
              }}
              h4
              className="vertical-timeline-element-subtitle"
            >
              Jamshedpur, Jharkhand
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              High Secondary
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              PCM
            </Text>
            <Text
              css={{
                color: "white",
              }}
              p
            >
              Percentage : 85%
            </Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Grid.Container>
    </Box>
  );
};
