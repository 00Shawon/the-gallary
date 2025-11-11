import { FaHeart, FaStar, FaUserCircle } from "react-icons/fa";

export default function Community() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4 text-primary">
          🌟 Community Highlights
        </h2>
        <p className="text-lg text-base-content/70 mb-12">
          Celebrating the amazing contributions and stories from our community!
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Jane Doe"
                className="rounded-full w-24 h-24 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Jane Doe</h3>
              <p className="text-primary font-semibold">
                Community Mentor of the Month
              </p>
              <p className="text-sm text-base-content/70">
                Jane has been helping new members learn React and Tailwind.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-accent">
                  <FaHeart />
                  <span>124</span>
                </div>
                <div className="badge badge-outline flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  Highlight
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Carlos Rivera"
                className="rounded-full w-24 h-24 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Carlos Rivera</h3>
              <p className="text-primary font-semibold">Top Contributor</p>
              <p className="text-sm text-base-content/70">
                Carlos shared 10 new open-source templates this week!
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-accent">
                  <FaHeart />
                  <span>98</span>
                </div>
                <div className="badge badge-outline flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  Highlight
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://i.pravatar.cc/150?img=8"
                alt="Aisha Khan"
                className="rounded-full w-24 h-24 object-cover border-4 border-primary"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Aisha Khan</h3>
              <p className="text-primary font-semibold">Event Organizer</p>
              <p className="text-sm text-base-content/70">
                Aisha hosted our first online coding meetup with 200+ attendees.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-accent">
                  <FaHeart />
                  <span>167</span>
                </div>
                <div className="badge badge-outline flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  Highlight
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="btn btn-primary gap-2">
            <FaUserCircle />
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
}
