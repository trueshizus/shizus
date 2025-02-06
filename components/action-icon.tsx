import DownloadAsPdf from "@/components/download-as-pdf";
import MenuLink from "@/components/menu-link";
import Settings from "@/components/settings";

type Props = {
  icon: "download" | "close" | "settings";
};

export default function ActionIcon({ icon }: Props) {
  switch (icon) {
    case "download":
      return <DownloadAsPdf />;
    case "close":
      return <MenuLink />;
    case "settings":
      return <Settings />;
    default:
      return null;
  }
}
