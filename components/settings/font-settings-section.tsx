import FontSelector from "./font-selector";
import FontSizeSelector from "./font-size-selector";

type Props = {
  disabled: boolean;
};

export default function FontSettingsSection({ disabled }: Props) {
  return (
    <section className="flex flex-col gap-2.5 p-2">
      <h3 className="text-sm font-medium text-center">Font & Sizes</h3>
      <FontSelector disabled={disabled} />
      <FontSizeSelector disabled={disabled} />
    </section>
  );
}
