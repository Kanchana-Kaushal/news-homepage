import articles from "../assets/data/articles.js";

function Articles() {
  const Content = () =>
    articles.map((article, index) => (
      <article className="flex items-center gap-4 md:flex-1/3" key={index}>
        <div className="w-1/3">
          <img src={article.image} alt={article.title + " Image"} />
        </div>
        <div className="w-2/3">
          <h3 className="text-Soft-red my-1 text-3xl font-bold">
            {String(index + 1).padStart(2, "0")}
          </h3>
          <a
            href="#"
            className="hover:text-Soft-red font-extrabold transition-colors duration-75 ease-in-out"
          >
            {article.title}
          </a>
          <p className="text-Dark-grayish-blue my-1">{article.description}</p>
        </div>
      </article>
    ));

  return (
    <section className="my-14 items-center justify-between gap-8 space-y-4 md:flex md:space-y-0">
      <Content></Content>
    </section>
  );
}

export default Articles;
