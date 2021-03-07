async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    query getAllPosts {
        posts {
            title
            slug
            excerpt
            content {
                html
            }
            coverImage {
                url
                height
                width
            }
        }
    }
`);

  return data.posts;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    `
        query getPostBySlug($slug: String!) {
            post (where: {slug: $slug}) {
                title
                slug
                excerpt
                content {
                    html
                }
                coverImage{
                    url
                    width
                    height
                }
            }
        }
    `,
    {
      variables: {
        slug,
      },
    }
  );

  return data.post;
}

export async function getAllEpisodes() {
  const data = await fetchAPI(`
        query getAllEpisodes {
            episodes {
                episodeNumber
                title
                image {
                  url
                  width
                  height
                }
            }
        }
    `);
  return data.episodes;
}

export async function getEpisodeByEpisodeNumber(episodeNumber) {
  const data = await fetchAPI(
    `
        query getEpisodeBySlug($episodeNumber: Int!){
            episode (where: {episodeNumber: $episodeNumber}) {
              episodeNumber  
              title
              description
              image {
                url
                width
                height
              }
            }
        }
    `,
    {
      variables: {
        episodeNumber,
      },
    }
  );
  return data.episode;
}
