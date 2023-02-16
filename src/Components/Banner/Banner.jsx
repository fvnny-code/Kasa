import './banner.css';

export default function Banner({title, imageName}) {


    return (
        <div className={`banner-container img-${imageName} `}>
            <h1 className="banner-title">
              {title}
            </h1>
            
        </div>
    )
}