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
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Document ID is required' });
    }

    const page = await notion.pages.retrieve({ page_id: id });
    const blocks = await notion.blocks.children.list({ block_id: id });

    // Extract content from blocks
    const content = blocks.results.map((block: any) => {
      const blockType = block.type;
      const blockData = block[blockType];

      if (blockType === 'paragraph') {
        return {
          type: 'paragraph',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
        };
      } else if (blockType === 'heading_1') {
        return {
          type: 'heading_1',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
        };
      } else if (blockType === 'heading_2') {
        return {
          type: 'heading_2',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
        };
      } else if (blockType === 'heading_3') {
        return {
          type: 'heading_3',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
        };
      } else if (blockType === 'bulleted_list_item') {
        return {
          type: 'bulleted_list_item',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
        };
      } else if (blockType === 'numbered_list_item') {
        return {
          type: 'numbered_list_item',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
        };
      } else if (blockType === 'code') {
        return {
          type: 'code',
          text: blockData.rich_text.map((text: any) => text.plain_text).join(''),
          language: blockData.language,
        };
      }

      return {
        type: blockType,
        raw: blockData,
      };
    });

    const document = {
      id: (page as any).id,
      title: (page as any).properties.Title?.title?.[0]?.plain_text || '',
      slug: (page as any).properties.Slug?.rich_text?.[0]?.plain_text || '',
      language: (page as any).properties.Language?.select?.name || 'en',
      content,
      lastEdited: (page as any).last_edited_time,
      url: (page as any).url,
    };

    res.status(200).json({ document });
  } catch (error: any) {
    console.error('Notion API error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch document',
      message: error.message 
    });
  }
}

