import HeadNext from "next/head";

interface PrimaryHeadProps {
  title?: string;
  icon?: string;
  aditional?: any;
}

export const PrimaryHead = ({ aditional, title, icon }: PrimaryHeadProps) => {
  const localTitle = title
    ? `${title} | Universo Jardinagem`
    : "Universo Jardinagem";
  const localIcon = icon ?? "/favicon.ico";

  return (
    <HeadNext>
      <title>{localTitle}</title>
      <meta name="Description" content="UniversoJardinagem" />
      <meta name="keywords" content="Universo Jardinagem" />
      <link rel="icon" href={localIcon} />
      {aditional}
    </HeadNext>
  );
};
