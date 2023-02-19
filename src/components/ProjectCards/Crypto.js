import { Card, Col, Row, Link , Text } from "@nextui-org/react";

import CryptoImage from "../../images/Crypto.png"

import { SocialIcon } from "react-social-icons";

export const Crypto = () => (
  <Card css={{ w: "600px", h: "300px", mb: "30px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={CryptoImage}
        width="100%"
        height="100%"
        objectFit="fit"
        alt="Crypto API"
      />
    </Card.Body>
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
        <Link href="https://rapidapi.com/imarghyadeep/api/crypto-update-live/" target="_blank">
          <Text
            h4
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Cryptocurrency API
          </Text>
        </Link>
        </Col>
        <Col>
          <Row justify="flex-end">
            <SocialIcon
              url="https://github.com/Arghya721/cryptoapi"
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