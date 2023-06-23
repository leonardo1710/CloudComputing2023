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
          { text: "03 IaaS", link: "/lectures/03-iaas/03-iaas" }
        ],
      },
      {
        text: 'Exercises',
        items: [
          { text: "01 Cloud Provider Recherche", link: "/exercises/01-cloud-intro/01-cloud-intro" },
          { text: "03 OpenStack Installation", link: "/exercises/02-openstack/02-openstack-devstack-install" }
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