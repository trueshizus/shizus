import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontSizes, useFont } from "@/contexts/font-context";
import { AlignLeft, Heading1, Heading2, Heading3, List } from "lucide-react";

type TabConfig = {
  value: string;
  icon: React.ComponentType<any>;
  label: string;
  max: number;
  key: keyof FontSizes; // Assuming FontSizes is the type from your context
};

const tabsConfig: TabConfig[] = [
  { value: "h1", icon: Heading1, label: "H1", max: 72, key: "h1" },
  { value: "h2", icon: Heading2, label: "H2", max: 64, key: "h2" },
  { value: "h3", icon: Heading3, label: "H3", max: 56, key: "h3" },
  { value: "p", icon: AlignLeft, label: "P", max: 48, key: "p" },
  { value: "li", icon: List, label: "LI", max: 48, key: "li" },
];

export default function TextStyler() {
  const { fontSizes, setFontSize } = useFont();

  const handleSliderChange = (value: number[], key: keyof typeof fontSizes) => {
    setFontSize(key, value[0]);
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="h1">
        <TabsList className="grid w-full grid-cols-5">
          {tabsConfig.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center justify-center"
            >
              <tab.icon className="w-4 h-4" />
            </TabsTrigger>
          ))}
        </TabsList>

        <ul className="grid grid-cols-5 p-1">
          {tabsConfig.map((tab) => (
            <li key={tab.value} className="flex items-center justify-center">
              <p className="text-xs text-zinc-500 relative">
                {fontSizes[tab.key]}px
              </p>
            </li>
          ))}
        </ul>

        {tabsConfig.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-4">
            <Slider
              value={[fontSizes[tab.key]]}
              onValueChange={(value) => handleSliderChange(value, tab.key)}
              max={tab.max}
              step={1}
              aria-label={`${tab.label} font size slider`}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
