import type { VercelRequest, VercelResponse } from '../types/vercel';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { language, slug } = req.query;

    if (!process.env.NOTION_DATABASE_ID) {
      return res.status(500).json({ error: 'Notion database ID not configured' });
    }

    let filter: any = {
      property: 'Language',
      select: {
        equals: language || 'en',
      },
    };

    if (slug) {
      filter = {
        and: [
          filter,
          {
            property: 'Slug',
            rich_text: {
              equals: slug as string,
            },
          },
        ],
      };
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter,
      sorts: [
        {
          property: 'Title',
          direction: 'ascending',
        },
      ],
    });

    const documents = response.results.map((page: any) => {
      return {
        id: page.id,
        title: page.properties.Title?.title?.[0]?.plain_text || '',
        slug: page.properties.Slug?.rich_text?.[0]?.plain_text || '',
        language: page.properties.Language?.select?.name || 'en',
        lastEdited: page.last_edited_time,
        url: page.url,
      };
    });

    res.status(200).json({ documents });
  } catch (error: any) {
    console.error('Notion API error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch documents',
      message: error.message 
    });
  }
}

