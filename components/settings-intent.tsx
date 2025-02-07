import { Zap } from "lucide-react";

import { Minimize2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function SettingsIntent() {
  return (
    <div className="flex justify-center mt-6">
      <div className="inline-flex rounded-full bg-zinc-800 p-1">
        <Button
          variant="ghost"
          className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <Zap className="w-2 h-2 mr-2" />
          Formal
        </Button>
        <Button
          variant="ghost"
          className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <Minimize2 className="w-2 h-2 mr-2" />
          Short
        </Button>
        <Button
          variant="ghost"
          className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <Sparkles className="w-2 h-2 mr-2" />
          Gen Z
        </Button>
      </div>
    </div>
  );
}
