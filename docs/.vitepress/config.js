export default {
  appearance: true,
  title: 'Cloud Computing Modul 2023',
  description: 'Lecture Page for Cloud Computing 2023',
  base: '/CloudComputing2023/',

  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lectures', link: '/lectures/index' },
      { text: 'Exercises', link: '/exercises/index' },
      { text: 'About', link: '/about/index' },
    ],
    
    /*
    sidebar: [
      {
        text: "About",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },

      {
        text: "Lectures",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Exercises",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },

      {
        //text: 'Navigation',
        items: [
          { text: 'Lectures', link: '/lectures/index' },
          { text: 'Exercises', link: '/exercises/index' },
        ]
      }
    ]
    */
  },
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present Adocs",
  },
}