const chalk = require("chalk");

// Helper log function

console.clear();

const Log = {
  title: (displayText: string) => {
    console.log();
    console.log(chalk.bgWhite.black(` ${displayText} `));
  },
  comment: (displayText: string) => {
    console.log(chalk.hex("#999")(`${displayText}`));
  },
};
const log = (displayText: string) => {
  console.log();
  console.log(chalk.bgWhite.black(` ${displayText} `));
};

Log.title("Function with no typesafety 🗡");
Log.comment("A simple function with no type safety.");
const func0 = (num: any) => {
  return num;
};

console.log(func0("sdf"));
console.log(func0(34));

Log.title("Using Union Types 🧷");
Log.comment(
  "A simple function that restricts passing a string or a number as argument."
);
const func1 = (num: number | string) => {
  return num;
};

console.log(func1("sdf"));
console.log(func1(34));

// Generics
Log.title(`Generics basics 🚼`);
Log.comment(
  "This function lets the consumer to assign any type to parameter S before calling."
);
const func2 = <S>(num: S) => {
  return num;
};

console.log(func2<string>("sdf"));
// console.log(func2<string>(34)); // Throws error as you specified the type to be string but passed a number argument.
console.log(func2<number>(34));
// The S above is 'any' by default. So, we can actually pass anything.
console.log(func2(true));
console.log(func2({ a: 23, b: 45 }));

// Generics with multiple types
Log.title(`Generics with multiple types 🎶 `);
Log.comment(
  "Function with type parameters S and T where both Generics can be assigned to anything."
);
const func3 = <S, T>(num1: S, num2: T) => {
  return `${num1}, ${num2} `;
};

console.log(func3<string, number>("sdf", 4));
console.log(func3<number, string>(34, "sfd"));
console.log(func3<boolean, string>(true, "sfd"));

// Using generic constraints
Log.title(`Using generic constraints 🔒`);
Log.comment("Restricting the types that can be assigned to the generics.");
const func4 = <S extends number | string, T extends boolean | number>(
  num1: S,
  num2: T
) => {
  return `${num1}, ${num2} `;
};

console.log(func4<string, number>("sdf", 4));
console.log(func4<number, boolean>(34, true));
// log(func4<number, string>(34, "sfd")); // throws error
// log(func4<boolean, string>(true, "karthick"));

// Generic constraints with custom types
Log.title(`Generic constraints with custom types 🥍 `);
Log.comment("Using custom type as generic constraint.");

type argObj = {
  a: boolean;
  b: number;
};

const func5 = <
  S extends number | string,
  T extends boolean | number,
  U extends argObj
>(
  num1: S,
  num2: T,
  obj?: U
) => {
  return `${num1}, ${num2}, ${JSON.stringify(obj)} `;
};

console.log(func5<string, number, argObj>("sdf", 4, { a: true, b: 3 }));
console.log(func5<number, boolean, argObj>(34, true));
// log(func5<number, string>(34, "sfd"));
// log(func5<boolean, string>(true, "karthick")); This throws an error!

console.log();

console.log(
  `🔥 Playaround passing different values to the above functions. 🚒 `
);
