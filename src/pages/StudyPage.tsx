import { useParams } from 'react-router-dom';
import { StudyDocument } from '@/components/StudyDocument';

export function StudyPage() {
  const { studyId } = useParams<{ studyId: string }>();

  if (!studyId) {
    return <div>Study ID is required</div>;
  }

  return <StudyDocument studyId={studyId} showPDF={false} />;
}

