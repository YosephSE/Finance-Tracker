import { useUser } from "@clerk/clerk-react";

const Hero = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>Welcome {user?.firstName}! Here are your finances</h1>
    </div>
  );
};

export default Hero;
