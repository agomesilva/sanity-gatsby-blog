export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6231259419e42f506db1f27f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-easuw2rc",
                  apiId: "84f8ccee-6309-4aae-9e22-b2ba33ef1f0f",
                },
                {
                  buildHookId: "62312595000b5e4d8421ac4e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-c2auk5sj",
                  apiId: "eb0feca9-b445-4095-af2c-e749be5b1983",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gladsml/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-c2auk5sj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
