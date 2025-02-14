import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFontSizes from "@/hooks/useFontSizes";
import { FontSizes, maxFontSize, minFontSize } from "@/lib/fonts";
import { AlignLeft, Heading1, Heading2, Heading3, List } from "lucide-react";

type TabConfig = {
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  key: keyof FontSizes;
};

const tabsConfig: TabConfig[] = [
  { value: "h1", icon: Heading1, label: "H1", key: "h1" },
  { value: "h2", icon: Heading2, label: "H2", key: "h2" },
  { value: "h3", icon: Heading3, label: "H3", key: "h3" },
  { value: "p", icon: AlignLeft, label: "P", key: "p" },
  { value: "li", icon: List, label: "LI", key: "li" },
];

type Props = {
  isLoading?: boolean;
};

export default function FontSizeSelector({ isLoading = false }: Props) {
  const [fontSizes, setFontSizes] = useFontSizes();

  const handleSliderChange = (value: number[], key: keyof FontSizes) => {
    setFontSizes({
      ...fontSizes,
      [key]: value[0],
    });
  };

  return (
    <div className="border border-zinc-700 bg-zinc-800">
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

        {tabsConfig.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="px-2 py-4">
            <div className="grid grid-cols-5">
              <Slider
                value={[fontSizes[tab.key]]}
                onValueChange={(value) => handleSliderChange(value, tab.key)}
                max={maxFontSize}
                min={minFontSize}
                step={1}
                aria-label={`${tab.label} font size slider`}
                disabled={isLoading}
                className="col-span-4"
              />
              <p className="text-sm relative text-zinc-500 col-span-1 text-center">
                {fontSizes[tab.key]}px
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
