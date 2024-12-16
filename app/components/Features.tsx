import EcoSystumIcon from "@/app/assets/icons/ecosystem.svg";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h1 className="text-6xl lg:text-[80px] text-center tracking-tight mb-8">
          Everything you need
        </h1>

        <p className="text-xl lg:text-3xl leading-normal text-center text-white/70 sm:max-w-xl lg:max-w-3xl mx-auto">
          Enjoy cunstomizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
        <div className="mt-10 flex max-lg:flex-col justify-center items-center flex-1 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0D0D0D] px-5 flex flex-col gap-4 mb-3 rounded-xl justify-center items-center h-72 border border-white/20"
            >
              <div className="bg-white text-black h-14 w-14 rounded-lg flex justify-center items-center">
                <EcoSystumIcon />
              </div>
              <h3 className="text-center text-xl tracking-normal font-medium">
                {feature.title}
              </h3>
              <p className="text-lg text-center leading-normal max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
