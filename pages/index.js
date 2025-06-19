import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const widgetConfig = {
  theme: {
    container: {
      border: "1px solid rgb(234, 234, 234)",
      borderRadius: "16px",
    },
  },
};

export default function Home() {
  return <LiFiWidget integrator="BBBPump" config={widgetConfig} />;
}
