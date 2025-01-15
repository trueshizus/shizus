import Posts from "@/components/posts";
export default function Home() {
  return (
    <article className="bg-zinc-300 px-8 pt-4 pb-8">
      <h1>Jesus Herrera <small>(he/him)</small></h1>                                                      maj.herrera@pm.me | LinkedIn | GitHub
      <h2>Professional Summary</h2>
      <p>Senior Software Engineer with extensive experience in React, NextJS, and Ruby on Rails. Proven track record in full-stack development, systems design, and UI implementations. I'm always learning something new and asking questions.</p>
      <h2>Technical Skills</h2>
      <ul>
        <li>Languages & Frameworks : Javascript/Typescript, Ruby, React, NextJS, Ruby on Rails</li>
        <li>Testing & Documentation: Storybook, Capybara, Jest, Cucumber, Playwright, Cypress</li>
        <li>Version Control & CI/CD: Git, Docker.</li>
        <li>Cloud Providers: Google Cloud, Vercel, Supabase.</li>
        <li>Others: Systems Design, Microservices Architecture.</li>
      </ul>
      <h2>Professional Experience</h2>
      <h3>IKEA - Software Engineer (2022 - 2024) - Amsterdam, The Netherlands</h3>
      <p>Contributed as a Frontend Engineer using NextJs, Typescript, Cucumber, Jest.
        Work on building User Analytics metrics to understand how coworkers were receiving packages in fulfillment facilities.
        Temporary scrum master while the vacancy was empty. (5 months)
        Prepared and conducted meetings to address ways of working, product roadmap and aligning the team on SCRUM methodology.
      </p>
      <h3>SkillLab BV - Senior Software Engineer (2019 - 2022)- Amsterdam, The Netherlands</h3>
      <ul>
        <li>Led full-stack development using React and Ruby on Rails.</li>
        <li>Reduced Google Cloud costs by 20% through optimization strategies.</li>
        <li>Lead documentation processes for ISO27001 certification.</li>
        <li>Oversaw the setup of Docker-based dev/staging/production environments, reducing build and deployment time from 25 minutes to 12.</li>
        <li>Implemented a jobs feed integration from 2GB XML files, using Ruby and Hasura.</li>
        <li>Managed bi-weekly engineering meetings to decide about tooling, style guidelines, linters configuration and a migration from 60% javascript components to 100% typescript components.</li>
      </ul>
      <h3>Medallia - Software Engineer (2017 - 2019) - Buenos Aires, Argentina</h3>
      <ul>
        <li>Specialized in front-end development using Angular, React, and Redux, focusing on user interface improvements.</li>
        <li>Successfully migrated legacy Angular codebase to React.</li>
      </ul>
      <h3>Wolox - Full Stack Developer (2013 - 2017) - Buenos Aires, Argentina</h3>
      <ul>
        <li>Active participant in recruitment and technical interviews, contributing to team growth and talent acquisition.</li>
        <li>Training of 5 junior devs using Ruby on Rails.</li>
        <li>Delivered talks and presentations on frontend technologies.</li>
        <li>Led development efforts in various projects, utilizing Ruby on Rails, React, and AWS.</li>
      </ul>
      <h2>Education & Certifications</h2>
      <ul>
        <li>Certified ScrumMaster® (CSM®) - 2022</li>
        <li>Engineering on Systems of Information - UTN, Argentina - not finished</li>
      </ul>
    </article>
  );
}
