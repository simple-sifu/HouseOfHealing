import { useParams, Link } from 'react-router-dom';
import { topics, getStudiesByTopic } from '@/data/studies';
import './TopicPage.css';

export function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const studies = topicId ? getStudiesByTopic(topicId) : [];
  const topic = topics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="topic-page">
        <div className="error-message">Topic not found</div>
      </div>
    );
  }

  return (
    <div className="topic-page">
      <header className="topic-header">
        <h1 className="topic-title">{topic.name}</h1>
      </header>

      {studies.length === 0 ? (
        <div className="no-studies">
          <p>No studies available for this topic yet. Check back soon!</p>
        </div>
      ) : (
        <section className="topic-studies">
          <div className="studies-list">
            {studies.map(study => (
              <Link
                key={study.id}
                to={`/studies/${study.id}`}
                className="study-link"
              >
                <h3>{study.title}</h3>
                <p>{study.scriptureReference}</p>
                {study.content?.commentary && (
                  <p className="study-excerpt">{study.content.commentary.substring(0, 150)}...</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

