import React from "react";
import OrganismLoginPanel from "../organisms/OrganismRegisterPanel";

const TemplateCenter = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-01">
      <div className="w-full max-w-md">
        <OrganismLoginPanel />
      </div>
    </main>
  );
};

export default TemplateCenter;
