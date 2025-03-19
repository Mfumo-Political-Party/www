const leaders = [
  {
    name: "Thabo Nkosi",
    position: "Party Chairperson",
    image: "",
  },
  {
    name: "Nomsa Khumalo",
    position: "Secretary General",
    image: "",
  },
  {
    name: "David Mabaso",
    position: "Treasurer",
    image: "",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-sm md:text-base text-accent-dark font-medium">
                  {leader.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
