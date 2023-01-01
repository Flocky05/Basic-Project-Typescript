import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Center,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import BasicUsage from "./components/modal";
import Card from "./components/Card";
import { useEffect, useState } from "react";

export const App = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((_) => setUsers(_));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Grid mt="20" templateColumns={"repeat(4, 1fr)"} gap="10">
        {users?.map((user) => (
          <GridItem key={user.id}>
            <Card {...user} />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export type User = {
  id: string;
  image: string;
  name: string;
  test: [
    {
      examinerName: string;
      mark: number;
      duration: number;
    }
  ];
};
