import "./TextComponents.css";

export const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};

export const Subtitle = ({ children }) => {
  return <h2 className="subtitle">{children}</h2>;
};

export const Paragraph = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};