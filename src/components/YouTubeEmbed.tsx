/**
 * YouTubeEmbed Component
 * 
 * A responsive YouTube video embed component with aspect ratio preservation
 * Converts YouTube URLs to embed format and provides loading state
 * 
 * @param url - Full YouTube URL (e.g., https://youtu.be/qHK7_4EXAr0)
 * @param title - Accessible title for the iframe
 */

interface YouTubeEmbedProps {
  url: string;
  title: string;
}

const YouTubeEmbed = ({ url, title }: YouTubeEmbedProps) => {
  // Extract video ID from various YouTube URL formats
  const getYouTubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  const videoId = getYouTubeId(url);

  if (!videoId) {
    return (
      <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg hover-lift">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default YouTubeEmbed;
