import { useState } from "react";

export default function Test() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">
            {sidebarOpen ? "Menu" : "☰"}
          </span>
          {sidebarOpen && (
            <button onClick={() => setSidebarOpen(false)}>❌</button>
          )}
        </div>
        {!sidebarOpen && (
          <div className="flex justify-center mt-4">
            <button onClick={() => setSidebarOpen(true)}>➡️</button>
          </div>
        )}
        {sidebarOpen && (
          <nav className="flex flex-col gap-2 p-4">
            <button
              className={`p-2 rounded ${
                activeTab === "tab1" ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Tab 1
            </button>
            <button
              className={`p-2 rounded ${
                activeTab === "tab2" ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Tab 2
            </button>
          </nav>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">
          {activeTab === "tab1" ? "Tab 1 Content" : "Tab 2 Content"}
        </h1>
        <div className="text-gray-800">
          {activeTab === "tab1" ? (
            <p>This is the content for Tab 1. You can add anything here.</p>
          ) : (
            <p>This is the content for Tab 2. Completely different stuff!</p>
          )}
        </div>
      </div>
    </div>
  );
}
