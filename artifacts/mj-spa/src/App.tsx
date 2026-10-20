import { MembresiasPage } from './components/pages/MembresiasPage';
import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnalyticsWidget } from "@/components/AnalyticsWidget";
import Home from "@/pages/home";
import { servicePages } from "@/data/services";
import AdminPage from "@/pages/AdminPage";

const NotFound          = lazy(() => import("@/pages/not-found"));
const ServicePage       = lazy(() => import("@/pages/ServicePage"));
const PoliticaDatos     = lazy(() => import("@/pages/PoliticaDatos"));
const PoliticaDevoluciones = lazy(() => import("@/pages/PoliticaDevoluciones"));
const MedicosEsteticos  = lazy(() => import("@/pages/MedicosEsteticos"));
const Nosotros          = lazy(() => import("@/pages/Nosotros"));
const Testimonios       = lazy(() => import("@/pages/Testimonios"));
const BuzonSugerencias  = lazy(() => import("@/pages/BuzonSugerencias"));
const TratamientosCorporales = lazy(() => import("@/pages/TratamientosCorporales"));
const TratamientosFaciales   = lazy(() => import("@/pages/TratamientosFaciales"));
const TratamientosPiernas    = lazy(() => import("@/pages/TratamientosPiernas"));
const SitemapPage       = lazy(() => import("@/pages/SitemapPage"));
const Paquetes          = lazy(() => import("@/pages/Paquetes"));
const SucursalPageWrapper = lazy(() => import("@/components/pages/SucursalPage").then(m => ({ default: m.SucursalPage })));
const DentalHubPageWrapper = lazy(() => import("@/components/pages/DentalHubPage").then(m => ({ default: m.DentalHubPage })));
const DentalServiceDetailPageWrapper = lazy(() => import("@/components/pages/DentalServiceDetailPage").then(m => ({ default: m.DentalServiceDetailPage })));
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
  const [location] = useLocation();

  // High-priority short-circuit for Sanity Studio
  // This ensures that /admin and all sub-paths (/admin/structure/post, etc.)
  // are handled by Sanity Studio's internal router without wouter interference.
  if (location.startsWith('/admin')) {
    return <AdminPage />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* ES Routes */}
        <Route path="/" component={Home} />
        <Route path="/sucursales/turrialba"><SucursalPageWrapper branch="turrialba" lang="es" /></Route>
        <Route path="/sucursales/siquirres"><SucursalPageWrapper branch="siquirres" lang="es" /></Route>
        <Route path="/servicios/dental"><DentalHubPageWrapper lang="es" /></Route>
        <Route path="/servicios/dental/:slug">{(params) => <DentalServiceDetailPageWrapper slug={params.slug} lang="es" />}</Route>
        <Route path="/politica-de-datos" component={PoliticaDatos} />
        <Route path="/politica-devoluciones" component={PoliticaDevoluciones} />
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
        <Route path="/blog/:slug">{(params) => <PostDetail slug={params.slug} lang="es" />}</Route>

        {/* EN Routes */}
        <Route path="/en"><Home lang="en" /></Route>
        <Route path="/en/locations/turrialba"><SucursalPageWrapper branch="turrialba" lang="en" /></Route>
        <Route path="/en/locations/siquirres"><SucursalPageWrapper branch="siquirres" lang="en" /></Route>
        <Route path="/en/services/dental"><DentalHubPageWrapper lang="en" /></Route>
        <Route path="/en/services/dental/:slug">{(params) => <DentalServiceDetailPageWrapper slug={params.slug} lang="en" />}</Route>
        <Route path="/en/data-policy"><PoliticaDatos lang="en" /></Route>
        <Route path="/en/refund-policy"><PoliticaDevoluciones lang="en" /></Route>
        <Route path="/en/medical-aesthetic"><LandingMedicos lang="en" /></Route>
        <Route path="/en/medical-aesthetic-specialists"><MedicosEsteticos lang="en" /></Route>
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
        <Route path="/en/blog/:slug">{(params) => <PostDetail slug={params.slug} lang="en" />}</Route>

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter>
        <Router />
      </WouterRouter>
      <Toaster />
      <AnalyticsWidget />
    </QueryClientProvider>
  );
}

export default App;
