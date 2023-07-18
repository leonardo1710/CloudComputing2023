export default {
  appearance: true,
  title: 'Cloud Computing Modul 2023',
  description: 'Lecture Page for Cloud Computing 2023',
  base: '/CloudComputing2023/',
  lastUpdated: true,

  themeConfig: {

    nav: [
      {
        text: "Lectures",
        items: [
          { text: "01 Cloud Intro", link: "/lectures/01-cloud-intro/01-cloud-intro" },
          { text: "03 IaaS", link: "/lectures/03-iaas/03-iaas" },
          { text: "04 PaaS", link: "/lectures/05-paas/05-paas" },
          { text: "06 Container", link: "/lectures/06-containerization/06-containerization" },
          { text: "07 Cloud Native", link: "/lectures/07-cloud-native/07-cloud-native" },
          { text: "08 Monitoring", link: "/lectures/08-monitoring/08-monitoring" },
          { text: "10 XaaS", link: "/lectures/09-xaas/09-xaas" },

        ],
      },
      {
        text: 'Exercises',
        items: [
          { text: "01 Cloud Provider Recherche", link: "/exercises/01-cloud-intro/01-cloud-intro" },
          { text: "02 OpenStack Installation", link: "/exercises/02-openstack/02-openstack-devstack-install" },
          { text: "03 IaaS in Openstack", link: "/exercises/03-iaas/03-vm-openstack" },
          { text: "04.1 Paas - Git", link: "/exercises/04-git/04-git" },
          { text: "04.2 Paas - Team Git", link: "/exercises/04-git/04-git2" },
          { text: "05 Paas - CI/CD", link: "/exercises/05-cicd/05-cicd" },
          { text: "06.1 Container Playground", link: "/exercises/06-containerization/06-containerization" },
          { text: "06.2 Docker", link: "/exercises/06-docker/06-docker" },
          { text: "07 Docker Compose", link: "/exercises/07-docker-compose/07-docker-compose" },
          { text: "08 Cloud Monitoring", link: "/exercises/08-monitoring/08-monitoring" },
          { text: "09 Migration Case Study", link: "/exercises/09-casestudy/09-casestudy" },
          { text: "10 Abschlussprojekt", link: "/exercises/12-exam/12-exam" },

        ],
      },
      { text: 'About', link: '/about/index' },
    ],
  },
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present Adocs",
  },
}