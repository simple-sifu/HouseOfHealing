import type { Study, Book, Topic } from '@/types/study';

// Sample data structure - replace with your actual content
export const studies: Study[] = [
  {
    id: 'john-overview',
    title: 'The Gospel of John: Overview',
    scriptureReference: 'John',
    book: 'John',
    type: 'overview',
    content: {
      passage: '',
      commentary: 'An introduction to the Gospel of John, including author, date, and purpose.',
      application: [
        'What does the Gospel of John reveal about Jesus?',
        'How does this book differ from the other Gospels?',
        'What is the main purpose of this Gospel?'
      ]
    },
    pdfUrl: '/pdfs/John-Study-Guide-Part-1.pdf',
    nextStudyId: 'john-i-am-statements'
  },
  {
    id: 'john-i-am-statements',
    title: 'The "I Am" Statements',
    scriptureReference: 'John 6:35, 8:12, 10:7, 10:11, 11:25, 14:6, 15:1',
    book: 'John',
    type: 'thematic',
    series: 'I Am Statements',
    content: {
      passage: '',
      commentary: 'A collection of 7 documents focusing on Jesus\' identity through His "I Am" statements.',
      application: [
        'What does each "I Am" statement reveal about Jesus?',
        'How do these statements relate to the Old Testament?',
        'What is the significance of Jesus using "I Am"?'
      ]
    },
    pdfUrl: '/pdfs/John-Study-Guide-Part-2.pdf',
    nextStudyId: 'john-chapter-1'
  },
  {
    id: 'john-chapter-1',
    title: 'The Word Became Flesh',
    scriptureReference: 'John 1:1-18',
    book: 'John',
    chapter: 1,
    verses: '1-18',
    type: 'chapter',
    content: {
      passage: 'In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made; without him nothing was made that has been made. In him was life, and that life was the light of all mankind. The light shines in the darkness, and the darkness has not overcome it.',
      commentary: 'The prologue of John introduces us to the eternal nature of Jesus Christ, the Word who was with God and was God from the beginning. This passage establishes the divinity of Christ and His role in creation.',
      application: [
        'What does it mean that Jesus is the Word?',
        'How does this passage establish Jesus\' divinity?',
        'What is the significance of "the Word became flesh"?',
        'How does this passage relate to Genesis 1?',
        'What does it mean that Jesus is the light of the world?'
      ]
    },
    pdfUrl: '/pdfs/John-Study-Guide-Part-3.pdf',
    nextStudyId: 'john-chapter-2',
    previousStudyId: 'john-i-am-statements'
  },
  {
    id: 'john-chapter-2',
    title: 'The Wedding at Cana',
    scriptureReference: 'John 2:1-11',
    book: 'John',
    chapter: 2,
    verses: '1-11',
    type: 'chapter',
    content: {
      passage: 'On the third day a wedding took place at Cana in Galilee. Jesus\' mother was there, and Jesus and his disciples had also been invited to the wedding. When the wine was gone, Jesus\' mother said to him, "They have no more wine."',
      commentary: 'The first miracle recorded in John\'s Gospel demonstrates Jesus\' power and glory. This sign reveals His divine nature and sets the stage for His public ministry.',
      application: [
        'What is the significance of this being Jesus\' first miracle?',
        'Why did Jesus perform this miracle?',
        'What does this reveal about Jesus\' character?',
        'How does this miracle point to Jesus\' glory?'
      ]
    },
    pdfUrl: '/pdfs/John-Study-Guide-Part-1.pdf',
    nextStudyId: 'john-chapter-3',
    previousStudyId: 'john-chapter-1'
  }
];

export const books: Book[] = [
  {
    id: 'john',
    name: 'John',
    testament: 'new',
    studies: studies.filter(s => s.book === 'John')
  }
];

export const topics: Topic[] = [
  {
    id: 'i-am-statements',
    name: 'I Am Statements',
    studies: studies.filter(s => s.series === 'I Am Statements')
  },
  {
    id: 'salvation',
    name: 'Salvation',
    studies: []
  },
  {
    id: 'holy-spirit',
    name: 'Holy Spirit',
    studies: []
  },
  {
    id: 'trinity',
    name: 'The Trinity',
    studies: []
  }
];

export function getStudyById(id: string): Study | undefined {
  return studies.find(s => s.id === id);
}

export function getStudiesByBook(bookId: string): Study[] {
  return studies.filter(s => s.book.toLowerCase() === bookId.toLowerCase());
}

export function getStudiesByTopic(topicId: string): Study[] {
  const topic = topics.find(t => t.id === topicId);
  return topic?.studies || [];
}

