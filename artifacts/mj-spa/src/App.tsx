import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import { servicePages } from "@/data/services";

const NotFound          = lazy(() => import("@/pages/not-found"));
const ServicePage       = lazy(() => import("@/pages/ServicePage"));
const PoliticaDatos     = lazy(() => import("@/pages/PoliticaDatos"));
const MedicosEsteticos  = lazy(() => import("@/pages/MedicosEsteticos"));
const Nosotros          = lazy(() => import("@/pages/Nosotros"));
const Testimonios       = lazy(() => import("@/pages/Testimonios"));
const BuzonSugerencias  = lazy(() => import("@/pages/BuzonSugerencias"));
const TratamientosCorporales = lazy(() => import("@/pages/TratamientosCorporales"));
const TratamientosFaciales   = lazy(() => import("@/pages/TratamientosFaciales"));
const TratamientosPiernas    = lazy(() => import("@/pages/TratamientosPiernas"));
const SitemapPage       = lazy(() => import("@/pages/SitemapPage"));
const Paquetes          = lazy(() => import("@/pages/Paquetes"));
const LandingReductivos = lazy(() => import("@/pages/LandingReductivos"));
const LandingFaciales   = lazy(() => import("@/pages/LandingFaciales"));
const LandingMedicos    = lazy(() => import("@/pages/LandingMedicos"));
const Blog              = lazy(() => import("@/pages/Blog"));
const PostDetail        = lazy(() => import("@/pages/PostDetail"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 30 },
  },
});

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* ES Routes */}
        <Route path="/" component={Home} />
        <Route path="/politica-de-datos" component={PoliticaDatos} />
        <Route path="/medicos-esteticos" component={MedicosEsteticos} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/testimonios" component={Testimonios} />
        <Route path="/buzon-sugerencias" component={BuzonSugerencias} />
        <Route path="/mapa-del-sitio" component={SitemapPage} />
        <Route path="/paquetes" component={Paquetes} />
        <Route path="/servicios/corporales" component={TratamientosCorporales} />
        <Route path="/servicios/faciales" component={TratamientosFaciales} />
        <Route path="/servicios/piernas" component={TratamientosPiernas} />
        <Route path="/reductivos-turrialba" component={LandingReductivos} />
        <Route path="/faciales" component={LandingFaciales} />
        <Route path="/medicina-estetica" component={LandingMedicos} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={PostDetail} />

        {/* EN Routes */}
        <Route path="/en"><Home lang="en" /></Route>
        <Route path="/en/data-policy"><PoliticaDatos lang="en" /></Route>
        <Route path="/en/medical-aesthetic"><MedicosEsteticos lang="en" /></Route>
        <Route path="/en/about-us"><Nosotros lang="en" /></Route>
        <Route path="/en/testimonials"><Testimonios lang="en" /></Route>
        <Route path="/en/suggestion-box"><BuzonSugerencias lang="en" /></Route>
        <Route path="/en/sitemap"><SitemapPage lang="en" /></Route>
        <Route path="/en/packages"><Paquetes lang="en" /></Route>
        <Route path="/en/services/body-treatments"><TratamientosCorporales lang="en" /></Route>
        <Route path="/en/services/facials"><TratamientosFaciales lang="en" /></Route>
        <Route path="/en/services/leg-treatments"><TratamientosPiernas lang="en" /></Route>
        <Route path="/en/facial-harmonization"><LandingMedicos lang="en" /></Route>
        <Route path="/en/blog"><Blog lang="en" /></Route>
        <Route path="/en/blog/:slug"><PostDetail lang="en" /></Route>

        {/* Dynamic Service Routes */}
        {servicePages.map((service) => (
          <Route
            key={`es-${service.es.slug}`}
            path={`/servicios/${service.es.slug}`}
          >
            <ServicePage service={service.es} lang="es" />
          </Route>
        ))}
        {servicePages.map((service) => (
          <Route
            key={`en-${service.en.slug}`}
            path={`/en/services/${service.en.slug}`}
          >
            <ServicePage service={service.en} lang="en" />
          </Route>
        ))}

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// Prefetch the most-visited secondary pages during browser idle time
function usePrefetchRoutes() {
  useEffect(() => {
    const prefetch = () => {
      // Trigger lazy imports so browsers download chunks in the background
      void import("@/pages/ServicePage");
      void import("@/pages/MedicosEsteticos");
      void import("@/pages/LandingMedicos");
      void import("@/pages/TratamientosCorporales");
      void import("@/pages/TratamientosFaciales");
    };
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(prefetch, 3000);
      return () => clearTimeout(t);
    }
  }, []);
}

function App() {
  usePrefetchRoutes();
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
