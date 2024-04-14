import Link from 'next/link';

const Contentcard = ({ title, imageUrl, conten, link }) => {
    return (
        <div className="content-card">
            <div className='image-container'>
                <img src={imageUrl} alt={title}/>
            </div>
            <div className='content-container'>
                <h3>{title}</h3>
                <p>{content}</p>
                <Link href={link}>
                    <a>Read more</a>
                </Link>
            </div>
        </div>
    );
};

export default Contentcard;