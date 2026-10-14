import Icon from "@/components/Icons/Icon";
import css from "./ProjectCard.module.scss";

type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  live: string;
  repo: string;
};

export default function ProjectCard({ name, description, stack, live, repo }: ProjectCardProps) {
  return (
    <article className={css.card}>
      <h3 className={css.name}>{name}</h3>
      <p className={css.description}>{description}</p>
      <ul className={css.stack}>
        {stack.map((tech) => (
          <li key={tech} className={css.tag}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={css.links}>
        <a href={live} target="_blank" rel="noopener noreferrer" className={css.link}>
          <Icon name="external" /> Live
        </a>
        <a href={repo} target="_blank" rel="noopener noreferrer" className={css.link}>
          <Icon name="github" /> Code
        </a>
      </div>
    </article>
  );
}
