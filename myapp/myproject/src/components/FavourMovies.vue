<template>
  <div>
    <h1>{{ welcomeheading }}</h1>

    <body style="text-align:center;">
      <table id="moviesTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>favourite_movies</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="eachPerson in rows">
            <td>{{eachPerson.id}}</td>
            <td>{{eachPerson.firstName}}</td>
            <td>{{eachPerson.lastName}}</td>
            <td>{{eachPerson.favourite_movies}}</td>
          </tr> -->
        </tbody>
      </table>

    </body>
  </div>
</template>

<script>
export default {
  name: "FavourMovies",
  data() {
    return {
      welcomeheading: "Welcome to list of everyone's fovurite movies"
    };
  }
};
</script>



<style scoped>
h1,
h2 {
  font-weight: normal;
}

table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
  align-self: center;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
