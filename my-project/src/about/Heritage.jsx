const Heritage = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        <div>
          <span className="uppercase tracking-widest text-yellow-400">
            HANDMADE WITH LOVE
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            Our Story
          </h2>

          <div className="w-16 h-[1px] bg-red-300 mb-6"></div>

          <p className="text-gray-400 leading-8 mb-5">
           Safa Yasmin was born from a passion for handmade artistry and thoughtful gifting. Every creation is carefully crafted to celebrate life's special moments, from elegant wedding keepsakes to timeless crochet flowers. Our mission is to transform simple materials into meaningful pieces that bring beauty, warmth, and lasting memories.
          </p>

          <p className="text-gray-400 leading-8">
            Today, she brings together creativity, craftsmanship, and elegance to create handmade pieces that celebrate life's most meaningful moments. Every flower and gift is carefully crafted to reflect beauty, love, and lasting memories.
          </p>
        </div>

        <div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoO6TDJp16WINIAXk6vOPafUS6oIdcYkzfxXNTOhFqz3AiWmZZC9pKxDWSyQU_rJ4YilQgnb9W0OVM_-jVu7BxfwoGrVCHMWlNndO4DVoA663oTeYA9gq0IP6HlO5dEmsLNcVF11Yl-6nWRggnX49pIaEFRWz-iBYSpUjtXznxVg2FdLQhw8txcWCSzwXByojr1-s9FpKmWyzUme7S5iOpMfWs8JDW9orFRmGno6bHPfC8YRZ7ryJzIeOSU1sV4EspWFZxMgH5U2U"
            alt=""
            className="rounded-lg h-[600px] object-cover w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Heritage;