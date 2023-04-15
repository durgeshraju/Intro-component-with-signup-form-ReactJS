import content from '../data/data';

const Footer = () => {
const { attribution } = content.footer;
return (
<footer>
  <p className="attribution">
    {attribution.map((item, index) => (
      <span key={index}>
        {item.challengeText}{' '}
        <a href={item.challengeLink} target={item.challengeTarget} rel="noopener noreferrer">
          {item.challengeLinkText}
        </a>
        . {item.codedByText}{' '}
        <a href={item.codedByLink} target={item.codedByTarget} rel="noopener noreferrer">
          {item.codedByLinkText}
        </a>
        .
      </span>
    ))}
  </p>
</footer>
  )
}

export default Footer;
