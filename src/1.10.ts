{
  // Union types
  type FrontEndDev = "fakibazDev" | "Junior Dev";
  type FullStackDev = "frontEndDEv" | "expert dev";

  type Developer = FrontEndDev | FullStackDev;

  const newDev: FrontEndDev = "Junior Dev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "O-" | "A+";
  };
  const user1: User = {
    name: "rakib",
    gender: "male",
    bloodGroup: "A+",
  };

  // intersaction

  type FrontEndDeveloper = {
    skill: string[];
    degignation: "frontend Developer";
  };

  type BackEndDeveloper = {
    skill: string[];
    degignation2: "backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  const fullStack: FullStackDeveloper = {
    skill: ["HTML", "CSS", "JS"],
    degignation: "frontend Developer",
    degignation2: "backend Developer",
  };
}
