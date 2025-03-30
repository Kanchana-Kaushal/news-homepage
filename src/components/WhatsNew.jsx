import whatsNew from "../assets/data/whats-new.js";

function WhatsNew() {
  const Content = () =>
    whatsNew.map((article, index) => {
      return (
        <article key={index}>
          <a
            href="#"
            className="text-Off-white hover:text-Soft-orange text-xl font-bold"
          >
            {article.title}
          </a>
          <p className="text-Dark-grayish-blue my-3">{article.description}</p>

          {whatsNew.length === index + 1 ? null : (
            <hr className="text-Grayish-blue mt-8 opacity-50" />
          )}
        </article>
      );
    });
  return (
    <aside className="bg-Very-dark-blue my-14 space-y-8 p-5 md:my-0 md:w-1/3">
      <h2 className="text-Soft-orange text-4xl font-bold">New</h2>
      <Content></Content>
    </aside>
  );
}

export default WhatsNew;
