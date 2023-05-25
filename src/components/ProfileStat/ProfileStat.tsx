interface ProfileStatProps {
  label: string;
  value: string | number;
  primary?: boolean;
}

export default function ProfileStat({
  label,
  value,
  primary,
}: ProfileStatProps) {
  return (
    <div className="flex flex-col">
      <div className={`${primary ? "text-primary" : "text-zinc-400"} text-sm`}>
        {label}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
