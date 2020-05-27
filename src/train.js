let url = `https://api.github.com/users/USERNAME`;

const getUsers = (names) => {
  let response = await fetch(url,{
    method: GET,
  });
  let users = await response.json();
  return users;
};


async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

function f() {
  let a = 5;
  function f1(b) {
    console.log(`b`,b);
    console.log(`a`,a);
    return a + b
  }
  return f1;
}

alert( f()(1) );

let name = "Вася";
const sayHi = function () {
  console.log(name);
};

const f = function() {
  let name = "Петя";
  sayHi()
};
f();


