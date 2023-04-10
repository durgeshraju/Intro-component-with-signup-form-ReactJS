import content from '../data/data';
const IntroHeroUnit = () => {
    const {heading, paragraph} = content.hero;
    return(
    <div className="intro-herounit">   
        <h1 className="intro-herounit__heading">{heading}</h1>
        <p className="intro-herounit__paragraph">{paragraph}</p>      
    </div>
    )
};

export default IntroHeroUnit;