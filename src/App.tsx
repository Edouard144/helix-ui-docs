import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DocsLayout from "@/components/DocsLayout";
import Home from "@/pages/Home";
import Introduction from "@/pages/Introduction";
import ButtonDocs from "@/pages/ButtonDocs";
import CardDocs from "@/pages/CardDocs";
import InputDocs from "@/pages/InputDocs";
import AlertDocs from "@/pages/AlertDocs";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/components/button" element={<ButtonDocs />} />
            <Route path="/components/card" element={<CardDocs />} />
            <Route path="/components/input" element={<InputDocs />} />
            <Route path="/components/alert" element={<AlertDocs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
