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
          { text: "04 PaaS - VCS", link: "/lectures/05-paas/05-paas" }
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