import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Anchor = ({ src, site }) => {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      {site === "Github" ? <IconBrandGithub /> : null}
      {site === "X/Twitter" ? <IconBrandX /> : null}
      {site === "Linkedin" ? <IconBrandLinkedin /> : null}
      {site}
    </a>
  );
};

export default Anchor;
