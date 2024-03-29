import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-05-24T00:00:00.000Z",
      "2022-05-25T00:00:00.000Z",
      "2022-05-26T00:00:00.000Z",
      "2022-05-27T00:00:00.000Z",
      "2022-05-28T00:00:00.000Z",
      "2022-05-29T00:00:00.000Z",
      "2022-05-30T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as const;

const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 51, 18, 109],
  },
];

export default function Dashboard() {
  const [assembleGraphics, setAssembleGraphics] = useState(false);

  useEffect(() => {
    setAssembleGraphics(true);
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Dashboard | dashgo.</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        {assembleGraphics && (
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
            <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
