import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ServicePage from "@/pages/ServicePage";
import PoliticaDatos from "@/pages/PoliticaDatos";
import MedicosEsteticos from "@/pages/MedicosEsteticos";
import Nosotros from "@/pages/Nosotros";
import Testimonios from "@/pages/Testimonios";
import BuzonSugerencias from "@/pages/BuzonSugerencias";
import TratamientosCorporales from "@/pages/TratamientosCorporales";
import TratamientosFaciales from "@/pages/TratamientosFaciales";
import TratamientosPiernas from "@/pages/TratamientosPiernas";
import SitemapPage from "@/pages/SitemapPage";
import { servicePages } from "@/data/services";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politica-de-datos" component={PoliticaDatos} />
      <Route path="/medicos-esteticos" component={MedicosEsteticos} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/testimonios" component={Testimonios} />
      <Route path="/buzon-sugerencias" component={BuzonSugerencias} />
      <Route path="/mapa-del-sitio" component={SitemapPage} />
      <Route path="/tratamientos/corporales" component={TratamientosCorporales} />
      <Route path="/tratamientos/faciales" component={TratamientosFaciales} />
      <Route path="/tratamientos/piernas" component={TratamientosPiernas} />
      {servicePages.map((service) => (
        <Route
          key={service.slug}
          path={`/servicios/${service.slug}`}
          component={() => <ServicePage service={service} />}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
