import { AppShell, Text, Stack, MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import SmsPricingTable from "./components/SmsPricingTable";
import './styles/index.scss';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <AppShell
      layout="alt"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: 'sm'}}
      padding="md"
    >
      <AppShell.Header>
        <Header />  
      </AppShell.Header>
      <AppShell.Navbar bg={"black"}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main style={{ backgroundColor: '#f4f4f7'}}>
        <Text size="xl" fw={600} style={{ paddingBottom: '2rem' }}>Overview</Text>
        <Stack w="100%" align="stretch" justify="center" gap="lg">
          <Stats />
          <SmsPricingTable />
        </Stack>
      </AppShell.Main>
    </AppShell>
    </MantineProvider>
  );
}

export default App;
