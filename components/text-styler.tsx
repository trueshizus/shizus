import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFont } from "@/contexts/font-context";
import { AlignLeft, Heading1, Heading2, Heading3, List } from "lucide-react";

export default function TextStyler() {
  const { fontSizes, setFontSize } = useFont();

  const handleSliderChange = (
    value: number[],
    element: keyof typeof fontSizes
  ) => {
    setFontSize(element, value[0]);
  };

  return (
    <div className="space-y-6">
      {/* Text Style Tabs */}
      <Tabs defaultValue="h1" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="h1" className="flex items-center justify-center">
            <Heading1 className="w-2 h-2 mr-1" />
            H1
          </TabsTrigger>
          <TabsTrigger value="h2" className="flex items-center justify-center">
            <Heading2 className="w-2 h-2 mr-1" />
            H2
          </TabsTrigger>
          <TabsTrigger value="h3" className="flex items-center justify-center">
            <Heading3 className="w-2 h-2 mr-1" />
            H3
          </TabsTrigger>
          <TabsTrigger value="p" className="flex items-center justify-center">
            <AlignLeft className="w-2 h-2 mr-1" />P
          </TabsTrigger>
          <TabsTrigger value="li" className="flex items-center justify-center">
            <List className="w-2 h-2 mr-1" />
            LI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="h1" className="mt-4">
          <Slider
            value={[fontSizes.h1]}
            onValueChange={(value) => handleSliderChange(value, "h1")}
            max={72}
            step={1}
            className="w-full"
          />
        </TabsContent>
        <TabsContent value="h2" className="mt-4">
          <Slider
            value={[fontSizes.h2]}
            onValueChange={(value) => handleSliderChange(value, "h2")}
            max={64}
            step={1}
            className="w-full"
          />
        </TabsContent>
        <TabsContent value="h3" className="mt-4">
          <Slider
            value={[fontSizes.h3]}
            onValueChange={(value) => handleSliderChange(value, "h3")}
            max={56}
            step={1}
            className="w-full"
          />
        </TabsContent>
        <TabsContent value="p" className="mt-4">
          <Slider
            value={[fontSizes.p]}
            onValueChange={(value) => handleSliderChange(value, "p")}
            max={48}
            step={1}
            className="w-full"
          />
        </TabsContent>
        <TabsContent value="li" className="mt-4">
          <Slider
            value={[fontSizes.li]}
            onValueChange={(value) => handleSliderChange(value, "li")}
            max={48}
            step={1}
            className="w-full"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
