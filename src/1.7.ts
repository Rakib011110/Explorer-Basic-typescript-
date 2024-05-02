{
  //  spread operator
  //    rest operator
  //  distructure

  const bro1: string[] = ["hasib", "faruk"];
  const bro2: string[] = ["roton", "ratul"];
  bro1.push(...bro2);

  const mentors1 = {
    ts: "misba",
    redux: "mir",
  };
  const mentors2 = {
    prisma: "mizan",
    nextjs: "tonnmoy",
  };

  const mentorLIst = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(freind));
  };

  greetFriends("abul", "kabul", "ubul", "babul");

  //
}
