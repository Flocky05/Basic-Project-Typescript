import {
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Card as ChakraCard,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { User } from "../App";
import BasicUsage from "./modal";

const Card = ({ image, name, test }: User) => {
  return (
    <div>
      <ChakraCard maxW="sm">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <BasicUsage>Show Details</BasicUsage>
          </ButtonGroup>
        </CardFooter>
      </ChakraCard>
    </div>
  );
};

export default Card;
