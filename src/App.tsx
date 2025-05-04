import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import ArtifactDetail from "./pages/ArtifactDetail";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <pre className="text-red-500 mb-4">{error.message}</pre>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => window.location.reload()}
      >
        Try again
      </button>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/artifact/:id" element={<ArtifactDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
