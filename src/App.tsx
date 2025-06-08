import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import ArtifactDetail from "./pages/ArtifactDetail";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <pre className="text-red-500 mb-4">{error.message}</pre>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
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
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Floating LINE icon */}
            <a
              href="https://line.me/R/ti/p/@219pivft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on LINE"
              className="fixed z-50 bottom-6 right-6 bg-transparent rounded-full shadow-lg p-0 hover:scale-110 transition-transform group"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            >
              <img
                src="/line-logo.png"
                alt="Contact us on LINE"
                width={56}
                height={56}
                className="block"
                style={{ borderRadius: '20%' }}
              />
            </a>
            {/* End Floating LINE icon */}
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
