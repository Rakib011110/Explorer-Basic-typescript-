//  distructuring
{
  const user = {
    id: 111,
    name: {
      fristName: "sadiya",
      middleName: "islam",
      lastName: "sinthiya",
    },
    conctactNo: "01754836031",
    address: "pabna",
  };

  const {
    conctactNo,
    name: { fristName },
  } = user;
}

//  array distructuring

const myFriends = ["chanler", "joey", "ross"];

const [, , besfreind, ...rest] = myFriends;
