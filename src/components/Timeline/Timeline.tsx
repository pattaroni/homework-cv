import Icon, { type IconName } from "@/components/Icons/Icon";
import css from "./Timeline.module.scss";

type TimelineProps = {
  icon: IconName;
  title: string;
  items: readonly { name: string; period: string }[];
};

export default function Timeline({ icon, title, items }: TimelineProps) {
  return (
    <div className={css.timeline}>
      <div className={css.head}>
        <span className={css.icon}>
          <Icon name={icon} />
        </span>
        <h3 className={css.title}>{title}</h3>
      </div>
      <ol className={css.list}>
        {items.map(({ name, period }) => (
          <li key={name} className={css.item}>
            <h4 className={css.name}>{name}</h4>
            <span className={css.period}>{period}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
