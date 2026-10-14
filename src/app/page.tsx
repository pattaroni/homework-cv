import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Section from "@/components/Section/Section";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Timeline from "@/components/Timeline/Timeline";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import {
  codeExample,
  education,
  languages,
  navItems,
  profile,
  projects,
  skills,
} from "@/data/cv";
import css from "./page.module.scss";

export default function Home() {
  return (
    <div className={css.container}>
      <Header items={navItems} />
      <div className={css.layout}>
        <Sidebar />
        <main className={css.main}>
          <Section id="about" title="About me">
            <p className={css.text}>{profile.about}</p>
          </Section>

          <Section id="skills" title="Skills">
            <ul className={css.list}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Section>

          <Section id="code" title="Code Examples">
            <CodeBlock fileName={codeExample.fileName} code={codeExample.code} />
          </Section>

          <Section id="education" title="Education">
            {education.map((group) => (
              <Timeline key={group.title} {...group} />
            ))}
          </Section>

          <Section id="languages" title="Languages">
            <ul className={css.list}>
              {languages.map(({ name, level }) => (
                <li key={name}>
                  {name} <span className={css.muted}>({level})</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="projects" title="Projects">
            <ul className={css.projects}>
              {projects.map((project) => (
                <li key={project.name}>
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
          </Section>
        </main>
      </div>
    </div>
  );
}
