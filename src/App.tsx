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
              className="fixed z-50 bottom-6 right-6 bg-white rounded-full shadow-lg p-3 hover:bg-tibet-amber transition-colors group"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="40"
                height="40"
                className="block"
              >
                <circle cx="20" cy="20" r="20" fill="#06C755" />
                <path
                  d="M20 10c-6.075 0-11 3.675-11 8.2 0 2.6 1.95 4.9 5.025 6.425-.15.525-.975 3.425-1.05 3.75 0 0-.025.15.075.2.1.05.225.025.225.025.3-.05 3.45-2.275 4.025-2.65.9.125 1.85.2 2.7.2 6.075 0 11-3.675 11-8.2S26.075 10 20 10z"
                  fill="#fff"
                />
                <text x="50%" y="60%" textAnchor="middle" fontSize="10" fill="#06C755" fontWeight="bold" dy=".3em"></text>
              </svg>
            </a>
            {/* End Floating LINE icon */}
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
