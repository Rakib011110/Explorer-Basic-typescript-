{
  let age = 20;

  if (age >= 20) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult " : "not adult";
  console.log({ isAdult });

  // nulish
  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: "dhaka";
      road: "Awesome Road ";
      presentAddress: "dhaka road ";
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "rakib",
    address: {
      city: "dhaka",
      road: "Awesome Road ",
      presentAddress: "dhaka road ",
    },
  };
  const parmanentAdd = user?.address?.permanentAddress ?? "no address";
}
