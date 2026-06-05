/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import DataBank from "./components/DataBank";
import InsightsESG from "./components/InsightsESG";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Hero setActiveTab={setActiveTab} />
            <AboutUs />
            <Services />
            <DataBank />
            <InsightsESG />
            <Contact />
          </>
        );
      case "about":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "databank":
        return <DataBank />;
      case "insights":
        return <InsightsESG />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-amber-500 selection:text-emerald-950" id="hht-master-app">
      {/* Shared Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Dynamic Screen Layout */}
      <main className="flex-grow transition-opacity duration-300 ease-in-out">
        {renderActiveSection()}
      </main>

      {/* Shared Strategic Legal Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

