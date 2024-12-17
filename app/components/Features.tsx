import EcoSystumIcon from "@/app/assets/icons/ecosystem.svg";
import Feature from "./Feature";
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
          {features.map(({ description, title }) => (
            <Feature key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};
