import css from "./CodeBlock.module.scss";

type CodeBlockProps = {
  fileName: string;
  code: string;
};

export default function CodeBlock({ fileName, code }: CodeBlockProps) {
  return (
    <figure className={css.window}>
      <figcaption className={css.bar}>
        <span className={css.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={css.fileName}>{fileName}</span>
      </figcaption>
      <pre className={css.pre}>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
