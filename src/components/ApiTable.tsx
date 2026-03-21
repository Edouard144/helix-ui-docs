interface Prop {
  name: string;
  type: string;
  typeColor: "blue" | "green" | "orange" | "purple";
  defaultVal: string;
  description: string;
}

interface ApiTableProps {
  props: Prop[];
}

const badgeColors = {
  blue: "bg-accent/15 text-accent",
  green: "bg-success/15 text-success",
  orange: "bg-orange-500/15 text-orange-400",
  purple: "bg-primary/15 text-primary",
};

export default function ApiTable({ props }: ApiTableProps) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="text-left px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Default</th>
              <th className="text-left px-4 py-3 font-semibold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, i) => (
              <tr
                key={prop.name}
                className={`border-b border-border last:border-0 ${
                  i % 2 === 1 ? "bg-card/50" : ""
                }`}
              >
                <td className="px-4 py-3 font-mono text-foreground">{prop.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium font-mono ${
                      badgeColors[prop.typeColor]
                    }`}
                  >
                    {prop.type}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  {prop.defaultVal}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
