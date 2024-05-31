import { defineConfig } from 'vitepress'
import markdownlists from 'markdown-it-task-lists'

export default defineConfig( {
  appearance: true,
  title: 'Cloud Computing Modul 2024',
  description: 'Lecture Page for Cloud Computing 2024',
  base: '/CloudComputing2023/',
  lastUpdated: true,
  
  markdown: {
    config: (md) => {
      md.use(markdownlists)
    }
  },
  themeConfig: {

    nav: [
      {
        text: 'Exercises',
        items: [
          { text: "01 Cloud Provider Recherche", link: "/exercises/01-cloud-intro/01-cloud-intro" },
          { text: "02 Linux Bash", link: "/exercises/02-linux-bash/02-linux-bash-exercises" },
          //{ text: "02 Linux Bash Lösungen", link: "/exercises/02-linux-bash/02-linux-bash-exercises_solutions" },
          { text: "03 IaaS in OpenStack", link: "/exercises/03-iaas/03-openstack-intro" },
          { text: "04 Python", link: "/exercises/04-python/04-python" },
          { text: "05.1 Git", link: "/exercises/05-paas/05-git" },
          { text: "05.2 Team Git", link: "/exercises/05-paas/05-git2" },
          { text: "05.3 CI/CD", link: "/exercises/05-paas/05-cicd" },
          { text: "06.1 Container Playground", link: "/exercises/06-containerization/06-containerization" },
          { text: "06.2 Docker", link: "/exercises/06-docker/06-docker" },
          { text: "07 Docker Compose", link: "/exercises/07-docker-compose/07-docker-compose" },
          { text: "08 Cloud Monitoring", link: "/exercises/08-monitoring/08-monitoring" },
          //{ text: "09 Migration Case Study", link: "/exercises/09-casestudy/09-casestudy" },
          //{ text: "10 Abschlussprojekt", link: "/exercises/12-exam/12-exam" },

        ],
      },
      { text: 'Glossar', link: '/glossary/glossary' },
      { text: 'Kursmodalitäten', link: '/about/index' },
    ],
  },
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © FH Campus Wien",
  }
})