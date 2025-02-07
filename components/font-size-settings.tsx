import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FontSizeSettings() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="h1">H1</TabsTrigger>
        <TabsTrigger value="h2">H2</TabsTrigger>
        <TabsTrigger value="h3">H3</TabsTrigger>
        <TabsTrigger value="p">p</TabsTrigger>
        <TabsTrigger value="li">li</TabsTrigger>
      </TabsList>
      <TabsContent value="h1">Make changes to your account here.</TabsContent>
      <TabsContent value="h2">Change your password here.</TabsContent>
      <TabsContent value="h3">Change your password here.</TabsContent>
      <TabsContent value="p">Change your password here.</TabsContent>
      <TabsContent value="li">Change your password here.</TabsContent>
    </Tabs>
  );
}
