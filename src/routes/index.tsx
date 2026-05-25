import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Squad Split — Real-time Group Expense Splitter" },
      {
        name: "description",
        content:
          "Split trip and group expenses fairly with Squad Split. Track who paid, equal/custom/percent splits, and settle up with minimum transactions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/squad-split.html"
      title="Squad Split"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
