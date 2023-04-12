import {
  Progress,
  Grid,
  Text,
  Spacer,
  css,
  Tooltip,
  Input,
  Col,
  Textarea,
  Card,
  Row,
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

      <Grid.Container justify="center" style={{
          paddingLeft : "50px",     
        }}>
        <Grid justify="center" xs={6} style={{
          display : "block",
        }}>
 

        <Grid xl={12} justify="center" style={{
          paddingBottom : "50px",
        }}>
        <Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Email"
              color="success"
            />

        </Grid>
        <Grid xs={12} justify="center" style={{
          paddingBottom : "50px",
        }}>

<Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Name"
              color="success"
            />
        </Grid>

        <Grid xs={12} justify="center" style={{
          paddingBottom : "50px",
        }}>

          <Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Subject"
              color="success"
            />
        </Grid>

        <Grid xs={12} justify="center" style={{
          paddingBottom : "50px",
        }}>

         <Textarea
              style={{
                width: "25rem",
                height: "10rem",
              }}
              size="xl"
              // maxRows={20}
              // maxCols={10}
              bordered
              color="success"
              labelPlaceholder="Message"
            />
        </Grid>

        {/* <Grid xs={12} md={12} sm={12} xl={12}>
        
        </Grid> */}

        
        </Grid>

        <Grid justify="center" xs={6}  >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40927405212!2d85.75041319959854!3d20.30103122293105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1621972194069!5m2!1sen!2sin"
            frameborder="0"
          ></iframe>
          </Grid>
      </Grid.Container>
    </Box>
  );
};

{/* <Col>
        <Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Email"
              color="success"
            />
        </Col>
          <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.40927405212!2d85.75041319959854!3d20.30103122293105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1621972194069!5m2!1sen!2sin"
            frameborder="0"
          ></iframe>
          </Col>
        {/* <Grid
          justify="center"
          xs={12}
          md={6}
          xl={6}
          style={{
            padding: "0px 0px 0px 0px",
          }}
        >
          <Grid
            xs={12}
            md={6}
            sm={6}
            xl={6}
            style={{
              padding: "0px 0px 0px 0px",
            }}
          >
            <Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Email"
              color="success"
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sm={6}
            xl={6}
            style={{
              paddingBottom: "50px",
            }}
          >
            <Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Name"
              color="success"
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sm={6}
            xl={6}
            style={{
              paddingBottom: "50px",
            }}
          >
            <Input
              bordered
              size="xl"
              width="400px"
              labelPlaceholder="Subject"
              color="success"
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sm={6}
            xl={6}
            style={{
              paddingBottom: "50px",
            }}
          >
            <Textarea
              style={{
                width: "25rem",
                height: "10rem",
              }}
              size="xl"
              // maxRows={20}
              // maxCols={10}
              bordered
              color="success"
              labelPlaceholder="Message"
            />
          </Grid>
        </Grid> */}
        // <Grid
        //   justify="center"
        //   xs={12}
        //   md={6}
        //   xl={6}
        //   style={{
        //     paddingLeft: "50px",
        //   }}
        // >
        //   {/* <Grid xs={12} md={6} sm={6} xl={6} style={{
        //   paddingBottom : "50px",
        // }}> */}
          
        //   {/* </Grid> */}
        // </Grid> */}