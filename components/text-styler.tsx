import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlignLeft,
  Heading1,
  Heading2,
  List,
  Minimize2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function TextStyler() {
  return (
    <div className="space-y-6">
      {/* Text Style Tabs */}
      <Tabs defaultValue="h1" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="h1" className="flex items-center justify-center">
            <Heading1 className="w-4 h-4 mr-2" />
            H1
          </TabsTrigger>
          <TabsTrigger value="h2" className="flex items-center justify-center">
            <Heading2 className="w-4 h-4 mr-2" />
            H2
          </TabsTrigger>
          <TabsTrigger value="p" className="flex items-center justify-center">
            <AlignLeft className="w-4 h-4 mr-2" />P
          </TabsTrigger>
          <TabsTrigger value="li" className="flex items-center justify-center">
            <List className="w-4 h-4 mr-2" />
            LI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="h1" className="mt-4">
          <Slider defaultValue={[32]} max={72} step={1} className="w-full" />
        </TabsContent>
        <TabsContent value="h2" className="mt-4">
          <Slider defaultValue={[24]} max={64} step={1} className="w-full" />
        </TabsContent>
        <TabsContent value="p" className="mt-4">
          <Slider defaultValue={[16]} max={48} step={1} className="w-full" />
        </TabsContent>
        <TabsContent value="li" className="mt-4">
          <Slider defaultValue={[16]} max={48} step={1} className="w-full" />
        </TabsContent>
      </Tabs>

      {/* Apple-inspired Intelligence Buttons */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex rounded-full bg-gray-100 p-1">
          <Button
            variant="ghost"
            className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <Zap className="w-4 h-4 mr-2" />
            Formal
          </Button>
          <Button
            variant="ghost"
            className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <Minimize2 className="w-4 h-4 mr-2" />
            Short
          </Button>
          <Button
            variant="ghost"
            className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Gen Z
          </Button>
        </div>
      </div>
    </div>
  );
}
