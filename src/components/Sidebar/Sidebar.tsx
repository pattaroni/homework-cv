import Image from "next/image";
import Icon from "@/components/Icons/Icon";
import { profile } from "@/data/cv";
import css from "./Sidebar.module.scss";

export default function Sidebar() {
  const { firstName, lastName, status, contacts, socials } = profile;

  return (
    <aside className={css.sidebar}>
      <div className={css.info}>
        <Image
          src="/avatar.jpg"
          alt={`${firstName} ${lastName}`}
          width={140}
          height={140}
          className={css.avatar}
          preload
        />
        <h1 className={css.name}>
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className={css.status}>{status}</p>
      </div>

      <hr className={css.separator} />

      <ul className={css.contacts}>
        {contacts.map((contact) => (
          <li key={contact.type} className={css.contact}>
            <span className={css.icon}>
              <Icon name={contact.type} />
            </span>
            <div className={css.contactText}>
              <p className={css.label}>{contact.label}</p>
              {"href" in contact ? (
                <a href={contact.href} className={css.value}>
                  {contact.value}
                </a>
              ) : (
                <address className={css.value}>{contact.value}</address>
              )}
            </div>
          </li>
        ))}
      </ul>

      <hr className={css.separator} />

      <ul className={css.socials}>
        {socials.map(({ type, label, href }) => (
          <li key={type}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={css.social}
            >
              <Icon name={type} size={20} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
