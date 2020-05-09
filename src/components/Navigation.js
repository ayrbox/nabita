import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Navigation = () => {
  const { menus, site } = useStaticQuery(graphql`
    query {
      menus: allMenuYaml {
        edges {
          node {
            id
            path
            title
          }
        }
      }
      site {
        meta: siteMetadata {
          title
        }
      }
    }
  `);

  const navItems = menus.edges.map(({ node }) => node);

  return (
    <nav className="navbar navbar-expand-md navbar-main sps sps--abv">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {site.meta.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <div className="mr-auto">&nbsp;</div>
          <ul className="navbar-nav mt-2 mt-md-auto">
            {navItems.map(({ id, path, title }) => (
              <li className="nav-item" key={id}>
                <Link to={path} className="nav-link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
