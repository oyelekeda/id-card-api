      const url = "https://dummyjson.com/users";
      const fetchData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      let allUsers = document.querySelector("#allUsers");


    fetch(url, fetchData)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let users = data.users; 
        console.log(users); 

          allUsers.innerHTML = users
            .map(function (user) { 
              let gender;
              if(user.gender ==="male"){
                gender= "Male"
              } else if (user.gender ==="female"){
                gender = "Female"
              }else {
                gender= user.gender;
              }

                return `
              <div class="eachUser fade-in bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div class="relative">
                  <img 
                    src="${user.image}" 
                    alt="${user.firstName}" 
                    class="w-24 h-24 mx-auto rounded-full object-cover ring-4 ring-sky-500/40 mb-4"
                  >
                  <span class="absolute top-2 right-2 bg-sky-100 text-sky-600 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                    ID: ${user.id}
                  </span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800"><strong>Name</stong>${user.firstName} ${user.lastName}</h3>
                <p class="text-sm text-sky-600 font-medium"><strong>Department</stong>${user.company.department}</p>
                <div class="mt-4 text-gray-600 text-sm space-y-1">
                  <p> <span class="text-gray-700"><strong>Email</stong>${user.email}</span></p>
                  <p> <span class="text-gray-700"><strong>Phone</stong>${user.phone}</span></p>
                   <p> <span class="text-gray-700"><strong>Gender</stong>${user.gender}</span></p>
                </div>
                
              </div>
            `;
          })
          .join("");
        })
        .catch(error => {
          alert("Error fetching users");
          console.error(error);
        });
