import React from "react";

const NewsSection = ({ posts }) => {
  return (
    <section className="page-section" id="news">
      <div className="container">
        <h4 className="page-section-heading text-center pb-5">News</h4>
        <div className="row">
          {posts.map(post => (
            <div className="col-sm-6 col-lg-4">
              <div className="news-card">
                {post.thumbnail && (
                  <div className="news-card-image-container">
                    <img src={post.thumbnail} alt="Card image cap" />
                  </div>
                )}
                <div className="news-body">
                  <span className="news-date">{post.date}</span>
                  <h5 className="news-title">
                    <a href="{{post.url | prepend: site.baseurl }}">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
