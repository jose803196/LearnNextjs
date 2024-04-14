import ContentCard from '../components/ContentCard';

const HomePage = () => {
  const contentData = [
    {
      title: 'Article 1',
      imageUrl: '/article1-image.jpg',
      content: 'This is the content of article 1.',
      link: '/article1',
    },
    {
      title: 'Article 2',
      imageUrl: '/article2-image.jpg',
      content: 'This is the content of article 2.',
      link: '/article2',
    },
    // Agrega más tarjetas de contenido según sea necesario
  ];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="content-cards-container">
        {contentData.map((item, index) => (
          <ContentCard
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            content={item.content}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;