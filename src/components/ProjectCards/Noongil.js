import { Card, Col, Row, Link, Text } from "@nextui-org/react";

import { SocialIcon } from "react-social-icons";

export const Noongil = () => (
  <Card css={{ w: "600px", h: "300px", mb: "30px" }}>
    <iframe
      src="https://csb-5clvwq.netlify.app/"
      style={{
        height: "100%",
        width: "100%",
        border: "none",
        overflow: "hidden",
        scrolling: "no",
      }}
    ></iframe>

    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Link href="https://csb-5clvwq.netlify.app/" target="_blank">
            <Text
              h4
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
            >
              Noongil
            </Text>
          </Link>
        </Col>
        <Col>
          <Row justify="flex-end">
            <SocialIcon
              url="https://github.com/Arghya721/Noongil"
              fgColor="white"
              target="_blank"
              style={{
                marginRight: "2rem",
              }}
            />
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
