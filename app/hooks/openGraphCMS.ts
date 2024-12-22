import { createClient } from 'contentful';

const space: string | undefined = process.env.CONTENTFUL_SPACE_ID;
const environment: string | undefined = process.env.CONTENTFUL_ENVIROMENT_KEY;
const accessToken: string | undefined = process.env.CONTENTFUL_ACCESSTOKEN;
const entryId: string | undefined = process.env.CONTENTFUL_ENTRY_ID;

if (!space || !environment || !accessToken || !entryId) {
  throw new Error('Missing required Contentful environment variables');
}

const client = createClient({
  space,
  environment,
  accessToken,
});

export const fetchOGContent = async () => {
    try {
      const entry = await client.getEntry(entryId);
  
      const fields = entry.fields as {
        title: string;
        description: string;
        imageContent?: {
          fields?: {
            file?: { url?: string };
          };
        };
      };
  
      const title = fields?.title || '';
      const description = fields?.description || '';
      const imageUrl = fields?.imageContent?.fields?.file?.url
        ? `https:${fields.imageContent.fields.file.url}`
        : '';
  
      return {
        title,
        description,
        imageUrl,
      };
    } catch (error) {
      console.error('Error fetching entry:', error);
      throw new Error('Failed to fetch OG content');
    }
  };
  