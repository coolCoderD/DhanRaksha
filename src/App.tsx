
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Authentication from "./pages/Authentication";
import Security from "./pages/Security";
import Payments from "./pages/Payments";
import Transactions from "./pages/Transactions";
import Identity from "./pages/Identity";
import Storage from "./pages/Storage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/security" element={<Security />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/storage" element={<Storage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
